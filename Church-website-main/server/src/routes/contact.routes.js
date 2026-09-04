import express from 'express';
import { createContact, getContacts } from '../controllers/contact.controller.js';
import { validateContact, validatePagination } from '../middleware/validation.js';
import { formLimiter } from '../config/rateLimiter.js';

const router = express.Router();

router.post('/', formLimiter, validateContact, createContact);
router.get('/', validatePagination, getContacts);

export default router;
