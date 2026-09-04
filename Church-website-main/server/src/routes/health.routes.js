import express from 'express';
import { db } from '../config/firebase.js';

const router = express.Router();

/**
 * @route   GET /health
 * @desc    Health check endpoint
 * @access  Public
 */
router.get('/', async (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    environment: process.env.NODE_ENV,
    services: {
      database: 'checking...',
      email: 'checking...'
    }
  };

  try {
    // Check Firestore connection
    await db.collection('health_check').doc('test').set({
      timestamp: new Date().toISOString()
    });
    healthcheck.services.database = 'connected';
  } catch (error) {
    healthcheck.services.database = 'error';
    healthcheck.message = 'DEGRADED';
  }

  // Check email service (simplified)
  healthcheck.services.email = process.env.SMTP_USER ? 'configured' : 'not configured';

  const statusCode = healthcheck.message === 'OK' ? 200 : 503;
  res.status(statusCode).json(healthcheck);
});

/**
 * @route   GET /health/ready
 * @desc    Readiness probe
 * @access  Public
 */
router.get('/ready', (req, res) => {
  res.status(200).json({ ready: true });
});

/**
 * @route   GET /health/live
 * @desc    Liveness probe
 * @access  Public
 */
router.get('/live', (req, res) => {
  res.status(200).json({ alive: true });
});

export default router;
