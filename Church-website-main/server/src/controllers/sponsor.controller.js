import { db, collections } from '../config/firebase.js';
import { catchAsync } from '../middleware/errorHandler.js';
import { sendEmail } from '../services/email.service.js';
import { logger } from '../config/logger.js';
import { v4 as uuidv4 } from 'uuid';

export const createSponsor = catchAsync(async (req, res) => {
  const { name, email, phone, amount, message } = req.body;

  const sponsorId = uuidv4();
  const sponsorData = {
    id: sponsorId,
    name,
    email: email.toLowerCase(),
    phone,
    amount,
    message: message || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
    ipAddress: req.ip
  };

  await db.collection(collections.SPONSORS).doc(sponsorId).set(sponsorData);

  try {
    await sendEmail({
      to: email,
      subject: 'Thank You for Becoming a Sponsor',
      html: `
        <h2>Thank You for Your Sponsorship!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for becoming a sponsor of God Cares Ministries.</p>
        <p><strong>Sponsorship Amount:</strong> ₹${amount}</p>
        <p>We will contact you shortly with payment details and next steps.</p>
        <p>Blessings,<br>God Cares Ministries</p>
      `
    });
  } catch (error) {
    logger.error('Failed to send sponsor confirmation:', error);
  }

  logger.info(`Sponsor registered: ${sponsorId}`);

  res.status(201).json({
    success: true,
    message: 'Thank you for your interest in sponsoring. We will contact you shortly.',
    data: { id: sponsorId }
  });
});

export const getSponsors = catchAsync(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;

  const snapshot = await db.collection(collections.SPONSORS).get();
  const total = snapshot.size;

  const offset = (page - 1) * limit;
  const sponsorsSnapshot = await db
    .collection(collections.SPONSORS)
    .orderBy('createdAt', 'desc')
    .limit(limit)
    .offset(offset)
    .get();

  const sponsors = sponsorsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  res.status(200).json({
    success: true,
    count: sponsors.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: sponsors
  });
});
