import { db, collections } from '../config/firebase.js';
import { catchAsync } from '../middleware/errorHandler.js';
import { sendEmail } from '../services/email.service.js';
import { logger } from '../config/logger.js';
import { v4 as uuidv4 } from 'uuid';

export const createContact = catchAsync(async (req, res) => {
  const { name, email, subject, message } = req.body;

  const contactId = uuidv4();
  const contactData = {
    id: contactId,
    name,
    email: email.toLowerCase(),
    subject,
    message,
    status: 'new',
    createdAt: new Date().toISOString(),
    ipAddress: req.ip
  };

  await db.collection(collections.CONTACTS).doc(contactId).set(contactData);

  // Send confirmation to user
  try {
    await sendEmail({
      to: email,
      template: 'contactConfirmation',
      data: { name, message }
    });
  } catch (error) {
    logger.error('Failed to send contact confirmation:', error);
  }

  // Notify admin
  try {
    await sendEmail({
      to: process.env.ADMIN_EMAILS,
      subject: `New Contact Message: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
  } catch (error) {
    logger.error('Failed to send admin notification:', error);
  }

  logger.info(`Contact form submitted: ${contactId}`);

  res.status(201).json({
    success: true,
    message: 'Your message has been sent successfully. We will respond shortly.',
    data: { id: contactId }
  });
});

export const getContacts = catchAsync(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;

  const snapshot = await db.collection(collections.CONTACTS).get();
  const total = snapshot.size;

  const offset = (page - 1) * limit;
  const contactsSnapshot = await db
    .collection(collections.CONTACTS)
    .orderBy('createdAt', 'desc')
    .limit(limit)
    .offset(offset)
    .get();

  const contacts = contactsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  res.status(200).json({
    success: true,
    count: contacts.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    data: contacts
  });
});
