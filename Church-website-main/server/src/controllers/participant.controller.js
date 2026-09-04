import { db, collections } from '../config/firebase.js';
import { AppError, catchAsync } from '../middleware/errorHandler.js';
import { sendEmail } from '../services/email.service.js';
import { logger } from '../config/logger.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * @desc    Create new participant registration
 * @route   POST /api/v1/participants
 * @access  Public
 */
export const createParticipant = catchAsync(async (req, res, next) => {
  const {
    fullName,
    spouseName,
    age,
    dob,
    gender,
    whatsapp,
    email,
    occupation,
    location,
    govtId,
    address,
    role,
    language
  } = req.body;

  // Check if participant already exists with same email
  const existingParticipant = await db
    .collection(collections.PARTICIPANTS)
    .where('email', '==', email)
    .limit(1)
    .get();

  if (!existingParticipant.empty) {
    return next(new AppError('A participant with this email already exists', 409));
  }

  // Create participant document
  const participantId = uuidv4();
  const participantData = {
    id: participantId,
    fullName,
    spouseName,
    age: parseInt(age),
    dob,
    gender,
    whatsapp,
    email: email.toLowerCase(),
    occupation,
    location,
    govtId,
    address,
    role,
    language,
    status: 'pending', // pending, approved, rejected
    paymentStatus: 'unpaid', // unpaid, paid, refunded
    registrationDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ipAddress: req.ip,
    userAgent: req.get('user-agent')
  };

  // Save to Firestore
  await db.collection(collections.PARTICIPANTS).doc(participantId).set(participantData);

  logger.info(`New participant registered: ${email}`);

  // Send confirmation email to participant
  try {
    await sendEmail({
      to: email,
      subject: 'Registration Confirmation - God Cares Ministries',
      template: 'participantConfirmation',
      data: {
        name: fullName,
        registrationId: participantId,
        role,
        language
      }
    });
  } catch (emailError) {
    logger.error('Failed to send confirmation email:', emailError);
    // Don't fail the registration if email fails
  }

  // Send notification email to admin
  try {
    await sendEmail({
      to: process.env.ADMIN_EMAILS,
      subject: 'New Participant Registration',
      template: 'adminParticipantNotification',
      data: {
        participant: participantData
      }
    });
  } catch (emailError) {
    logger.error('Failed to send admin notification email:', emailError);
  }

  res.status(201).json({
    success: true,
    message: 'Registration submitted successfully! You will receive a confirmation email shortly.',
    data: {
      id: participantId,
      fullName,
      email,
      role,
      language,
      registrationDate: participantData.registrationDate
    }
  });
});

/**
 * @desc    Get all participants with pagination
 * @route   GET /api/v1/participants
 * @access  Public (should be protected in production)
 */
export const getParticipants = catchAsync(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const status = req.query.status;
  const role = req.query.role;
  const language = req.query.language;

  let query = db.collection(collections.PARTICIPANTS);

  // Apply filters
  if (status) {
    query = query.where('status', '==', status);
  }
  if (role) {
    query = query.where('role', '==', role);
  }
  if (language) {
    query = query.where('language', '==', language);
  }

  // Get total count
  const snapshot = await query.get();
  const total = snapshot.size;

  // Apply pagination
  const offset = (page - 1) * limit;
  query = query.orderBy('createdAt', 'desc').limit(limit).offset(offset);

  const participantsSnapshot = await query.get();
  const participants = participantsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  res.status(200).json({
    success: true,
    count: participants.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: participants
  });
});

/**
 * @desc    Get participant by ID
 * @route   GET /api/v1/participants/:id
 * @access  Public (should be protected in production)
 */
export const getParticipantById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const doc = await db.collection(collections.PARTICIPANTS).doc(id).get();

  if (!doc.exists) {
    return next(new AppError('Participant not found', 404));
  }

  res.status(200).json({
    success: true,
    data: {
      id: doc.id,
      ...doc.data()
    }
  });
});

/**
 * @desc    Update participant
 * @route   PUT /api/v1/participants/:id
 * @access  Public (should be protected in production)
 */
export const updateParticipant = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const doc = await db.collection(collections.PARTICIPANTS).doc(id).get();

  if (!doc.exists) {
    return next(new AppError('Participant not found', 404));
  }

  const updateData = {
    ...req.body,
    updatedAt: new Date().toISOString()
  };

  await db.collection(collections.PARTICIPANTS).doc(id).update(updateData);

  logger.info(`Participant updated: ${id}`);

  res.status(200).json({
    success: true,
    message: 'Participant updated successfully',
    data: {
      id,
      ...updateData
    }
  });
});

/**
 * @desc    Delete participant
 * @route   DELETE /api/v1/participants/:id
 * @access  Public (should be protected in production)
 */
export const deleteParticipant = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const doc = await db.collection(collections.PARTICIPANTS).doc(id).get();

  if (!doc.exists) {
    return next(new AppError('Participant not found', 404));
  }

  await db.collection(collections.PARTICIPANTS).doc(id).delete();

  logger.info(`Participant deleted: ${id}`);

  res.status(200).json({
    success: true,
    message: 'Participant deleted successfully'
  });
});

/**
 * @desc    Get participant statistics
 * @route   GET /api/v1/participants/stats
 * @access  Public (should be protected in production)
 */
export const getParticipantStats = catchAsync(async (req, res, next) => {
  const snapshot = await db.collection(collections.PARTICIPANTS).get();
  
  const stats = {
    total: 0,
    byStatus: {},
    byRole: {},
    byLanguage: {},
    byGender: {},
    recent: []
  };

  snapshot.forEach(doc => {
    const data = doc.data();
    stats.total++;

    // Count by status
    stats.byStatus[data.status] = (stats.byStatus[data.status] || 0) + 1;

    // Count by role
    stats.byRole[data.role] = (stats.byRole[data.role] || 0) + 1;

    // Count by language
    stats.byLanguage[data.language] = (stats.byLanguage[data.language] || 0) + 1;

    // Count by gender
    stats.byGender[data.gender] = (stats.byGender[data.gender] || 0) + 1;
  });

  // Get recent registrations
  const recentSnapshot = await db
    .collection(collections.PARTICIPANTS)
    .orderBy('createdAt', 'desc')
    .limit(10)
    .get();

  stats.recent = recentSnapshot.docs.map(doc => ({
    id: doc.id,
    fullName: doc.data().fullName,
    email: doc.data().email,
    role: doc.data().role,
    language: doc.data().language,
    createdAt: doc.data().createdAt
  }));

  res.status(200).json({
    success: true,
    data: stats
  });
});

export default {
  createParticipant,
  getParticipants,
  getParticipantById,
  updateParticipant,
  deleteParticipant,
  getParticipantStats
};
