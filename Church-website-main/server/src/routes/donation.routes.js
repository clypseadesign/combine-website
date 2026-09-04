import express from 'express';
import {
  createDonation,
  getDonations,
  verifyPayment,
  getDonationStats
} from '../controllers/donation.controller.js';
import { validateDonation, validatePagination } from '../middleware/validation.js';
import { paymentLimiter } from '../config/rateLimiter.js';

const router = express.Router();

/**
 * @route   POST /api/v1/donations
 * @desc    Create donation and initiate payment
 * @access  Public
 */
router.post('/', paymentLimiter, validateDonation, createDonation);

/**
 * @route   POST /api/v1/donations/verify
 * @desc    Verify payment signature
 * @access  Public
 */
router.post('/verify', verifyPayment);

/**
 * @route   GET /api/v1/donations
 * @desc    Get all donations
 * @access  Protected
 */
router.get('/', validatePagination, getDonations);

/**
 * @route   GET /api/v1/donations/stats
 * @desc    Get donation statistics
 * @access  Protected
 */
router.get('/stats', getDonationStats);

export default router;
