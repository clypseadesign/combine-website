import express from 'express';
import {
  createParticipant,
  getParticipants,
  getParticipantById,
  updateParticipant,
  deleteParticipant,
  getParticipantStats
} from '../controllers/participant.controller.js';
import { validateParticipant, validateId, validatePagination } from '../middleware/validation.js';
import { formLimiter } from '../config/rateLimiter.js';

const router = express.Router();

/**
 * @route   POST /api/v1/participants
 * @desc    Register a new participant
 * @access  Public
 */
router.post('/', formLimiter, validateParticipant, createParticipant);

/**
 * @route   GET /api/v1/participants
 * @desc    Get all participants (with pagination)
 * @access  Public (should be protected in production)
 */
router.get('/', validatePagination, getParticipants);

/**
 * @route   GET /api/v1/participants/stats
 * @desc    Get participant statistics
 * @access  Public (should be protected in production)
 */
router.get('/stats', getParticipantStats);

/**
 * @route   GET /api/v1/participants/:id
 * @desc    Get participant by ID
 * @access  Public (should be protected in production)
 */
router.get('/:id', validateId, getParticipantById);

/**
 * @route   PUT /api/v1/participants/:id
 * @desc    Update participant
 * @access  Public (should be protected in production)
 */
router.put('/:id', validateId, validateParticipant, updateParticipant);

/**
 * @route   DELETE /api/v1/participants/:id
 * @desc    Delete participant
 * @access  Public (should be protected in production)
 */
router.delete('/:id', validateId, deleteParticipant);

export default router;
