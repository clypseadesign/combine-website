import Razorpay from 'razorpay';
import crypto from 'crypto';
import { db, collections } from '../config/firebase.js';
import { AppError, catchAsync } from '../middleware/errorHandler.js';
import { sendEmail } from '../services/email.service.js';
import { logger } from '../config/logger.js';
import { v4 as uuidv4 } from 'uuid';

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/**
 * @desc    Create donation and generate payment order
 * @route   POST /api/v1/donations
 * @access  Public
 */
export const createDonation = catchAsync(async (req, res, next) => {
  const { name, email, phone, amount, message } = req.body;

  // Create Razorpay order
  const options = {
    amount: amount * 100, // amount in smallest currency unit (paise)
    currency: 'INR',
    receipt: `rcpt_${Date.now()}`,
    notes: {
      donor_name: name,
      donor_email: email,
      donor_phone: phone,
      message: message || ''
    }
  };

  const order = await razorpay.orders.create(options);

  // Create donation record in Firestore
  const donationId = uuidv4();
  const donationData = {
    id: donationId,
    name,
    email: email.toLowerCase(),
    phone,
    amount,
    message: message || '',
    orderId: order.id,
    paymentId: null,
    status: 'pending', // pending, completed, failed, refunded
    currency: 'INR',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ipAddress: req.ip,
    userAgent: req.get('user-agent')
  };

  await db.collection(collections.DONATIONS).doc(donationId).set(donationData);

  logger.info(`Donation initiated: ${donationId} - Amount: ₹${amount}`);

  res.status(201).json({
    success: true,
    message: 'Donation order created successfully',
    data: {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      donationId,
      razorpayKeyId: process.env.RAZORPAY_KEY_ID
    }
  });
});

/**
 * @desc    Verify Razorpay payment signature
 * @route   POST /api/v1/donations/verify
 * @access  Public
 */
export const verifyPayment = catchAsync(async (req, res, next) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return next(new AppError('Missing payment verification data', 400));
  }

  // Verify signature
  const sign = razorpay_order_id + '|' + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(sign.toString())
    .digest('hex');

  if (razorpay_signature !== expectedSign) {
    return next(new AppError('Invalid payment signature', 400));
  }

  // Find donation by order ID
  const snapshot = await db
    .collection(collections.DONATIONS)
    .where('orderId', '==', razorpay_order_id)
    .limit(1)
    .get();

  if (snapshot.empty) {
    return next(new AppError('Donation not found', 404));
  }

  const donationDoc = snapshot.docs[0];
  const donationData = donationDoc.data();

  // Update donation status
  await db.collection(collections.DONATIONS).doc(donationDoc.id).update({
    paymentId: razorpay_payment_id,
    signature: razorpay_signature,
    status: 'completed',
    completedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  logger.info(`Payment verified: ${razorpay_payment_id} - Donation: ${donationDoc.id}`);

  // Send thank you email with receipt
  try {
    await sendEmail({
      to: donationData.email,
      template: 'donationReceipt',
      data: {
        name: donationData.name,
        amount: donationData.amount,
        transactionId: razorpay_payment_id,
        paymentMethod: 'Razorpay',
        date: new Date().toISOString(),
        message: donationData.message
      }
    });
  } catch (emailError) {
    logger.error('Failed to send donation receipt email:', emailError);
  }

  // Send admin notification
  try {
    await sendEmail({
      to: process.env.ADMIN_EMAILS,
      subject: 'New Donation Received',
      html: `
        <h2>New Donation Received</h2>
        <p><strong>Donor:</strong> ${donationData.name}</p>
        <p><strong>Email:</strong> ${donationData.email}</p>
        <p><strong>Amount:</strong> ₹${donationData.amount}</p>
        <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
        <p><strong>Message:</strong> ${donationData.message || 'N/A'}</p>
      `
    });
  } catch (emailError) {
    logger.error('Failed to send admin notification:', emailError);
  }

  res.status(200).json({
    success: true,
    message: 'Payment verified successfully. Thank you for your donation!',
    data: {
      paymentId: razorpay_payment_id,
      donationId: donationDoc.id,
      status: 'completed'
    }
  });
});

/**
 * @desc    Get all donations
 * @route   GET /api/v1/donations
 * @access  Protected
 */
export const getDonations = catchAsync(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const status = req.query.status;

  let query = db.collection(collections.DONATIONS);

  if (status) {
    query = query.where('status', '==', status);
  }

  const snapshot = await query.get();
  const total = snapshot.size;

  const offset = (page - 1) * limit;
  query = query.orderBy('createdAt', 'desc').limit(limit).offset(offset);

  const donationsSnapshot = await query.get();
  const donations = donationsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  res.status(200).json({
    success: true,
    count: donations.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: donations
  });
});

/**
 * @desc    Get donation statistics
 * @route   GET /api/v1/donations/stats
 * @access  Protected
 */
export const getDonationStats = catchAsync(async (req, res, next) => {
  const snapshot = await db.collection(collections.DONATIONS).get();

  const stats = {
    totalDonations: 0,
    totalAmount: 0,
    completedDonations: 0,
    pendingDonations: 0,
    failedDonations: 0,
    averageDonation: 0,
    topDonors: [],
    recentDonations: []
  };

  let completedAmount = 0;
  let completedCount = 0;

  snapshot.forEach(doc => {
    const data = doc.data();
    stats.totalDonations++;
    stats.totalAmount += data.amount;

    if (data.status === 'completed') {
      stats.completedDonations++;
      completedAmount += data.amount;
      completedCount++;
    } else if (data.status === 'pending') {
      stats.pendingDonations++;
    } else if (data.status === 'failed') {
      stats.failedDonations++;
    }
  });

  stats.averageDonation = completedCount > 0 ? Math.round(completedAmount / completedCount) : 0;

  // Get recent completed donations
  const recentSnapshot = await db
    .collection(collections.DONATIONS)
    .where('status', '==', 'completed')
    .orderBy('completedAt', 'desc')
    .limit(10)
    .get();

  stats.recentDonations = recentSnapshot.docs.map(doc => ({
    id: doc.id,
    name: doc.data().name,
    amount: doc.data().amount,
    date: doc.data().completedAt
  }));

  res.status(200).json({
    success: true,
    data: stats
  });
});

export default {
  createDonation,
  verifyPayment,
  getDonations,
  getDonationStats
};
