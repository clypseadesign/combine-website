import { db, collections } from '../config/firebase.js';
import { catchAsync, AppError } from '../middleware/errorHandler.js';
import { sendEmail } from '../services/email.service.js';
import { logger } from '../config/logger.js';
import { v4 as uuidv4 } from 'uuid';

export const createTestimony = catchAsync(async (req, res) => {
  const { name, email, testimony, location } = req.body;

  const testimonyId = uuidv4();
  const testimonyData = {
    id: testimonyId,
    name,
    email: email.toLowerCase(),
    testimony,
    location: location || '',
    status: 'pending',
    approved: false,
    createdAt: new Date().toISOString(),
    ipAddress: req.ip
  };

  await db.collection(collections.TESTIMONIES).doc(testimonyId).set(testimonyData);

  logger.info(`Testimony submitted: ${testimonyId}`);

  res.status(201).json({
    success: true,
    message: 'Thank you for sharing your testimony. It will be reviewed before publishing.',
    data: { id: testimonyId }
  });
});

export const getTestimonies = catchAsync(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const approved = req.query.approved === 'true';

  let query = db.collection(collections.TESTIMONIES);

  if (approved) {
    query = query.where('approved', '==', true);
  }

  const snapshot = await query.get();
  const total = snapshot.size;

  const offset = (page - 1) * limit;
  query = query.orderBy('createdAt', 'desc').limit(limit).offset(offset);

  const testimoniesSnapshot = await query.get();
  const testimonies = testimoniesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  res.status(200).json({
    success: true,
    count: testimonies.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: testimonies
  });
});

export const approveTestimony = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const doc = await db.collection(collections.TESTIMONIES).doc(id).get();

  if (!doc.exists) {
    return next(new AppError('Testimony not found', 404));
  }

  await db.collection(collections.TESTIMONIES).doc(id).update({
    approved: true,
    status: 'approved',
    approvedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  logger.info(`Testimony approved: ${id}`);

  res.status(200).json({
    success: true,
    message: 'Testimony approved successfully'
  });
});
