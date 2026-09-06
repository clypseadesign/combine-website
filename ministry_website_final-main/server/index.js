import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

let razorpay = null;
if (RAZORPAY_KEY_ID && RAZORPAY_KEY_SECRET) {
  razorpay = new Razorpay({ key_id: RAZORPAY_KEY_ID, key_secret: RAZORPAY_KEY_SECRET });
}

const MIN_AMOUNT_PAISE = 100;

// STEP 1: Create Order
app.post('/api/create-order', async (req, res) => {
  try {
    if (!razorpay) {
      return res.status(500).json({ error: 'Razorpay is not configured on the server.' });
    }

    const { amount } = req.body || {};
    const amountPaise = Number(amount);

    if (!Number.isFinite(amountPaise) || amountPaise < MIN_AMOUNT_PAISE) {
      return res.status(400).json({ error: `Amount must be at least ${MIN_AMOUNT_PAISE} paise (₹1).` });
    }

    const options = {
      amount: amountPaise,
      currency: 'INR',
      receipt: 'receipt_' + Date.now()
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (err) {
    console.error('[create-order] error:', err.message);
    if (err.statusCode === 401 || err.statusCode === 400) {
      return res.status(err.statusCode).json({ error: err.message });
    }
    res.status(500).json({ error: 'Failed to create Razorpay order.' });
  }
});

// STEP 3: Verify Signature
app.post('/api/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ error: 'Missing required payment fields.' });
  }

  try {
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ error: 'Invalid payment signature.' });
    }

    res.status(200).json({ success: true, payment_id: razorpay_payment_id, order_id: razorpay_order_id });
  } catch (err) {
    console.error('[verify-payment] error:', err.message);
    res.status(500).json({ error: 'Failed to verify payment.' });
  }
});

// Serve built frontend in production
const distDir = path.join(__dirname, '..', 'dist');
app.use(express.static(distDir));
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return next();
  }
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
