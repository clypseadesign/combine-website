import express from 'express';
import { createSponsor, getSponsors } from '../controllers/sponsor.controller.js';
import { validateDonation, validatePagination } from '../middleware/validation.js';
import { formLimiter } from '../config/rateLimiter.js';

const router = express.Router();

router.post('/', formLimiter, validateDonation, createSponsor);
router.get('/', validatePagination, getSponsors);

export default router;
