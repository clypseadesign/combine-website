import express from 'express';
import { createTestimony, getTestimonies, approveTestimony } from '../controllers/testimony.controller.js';
import { validateTestimony, validateId, validatePagination } from '../middleware/validation.js';
import { formLimiter } from '../config/rateLimiter.js';

const router = express.Router();

router.post('/', formLimiter, validateTestimony, createTestimony);
router.get('/', validatePagination, getTestimonies);
router.patch('/:id/approve', validateId, approveTestimony);

export default router;
