import express from 'express';
import { getAnalytics, trackPageView } from '../controllers/analytics.controller.js';

const router = express.Router();

router.get('/', getAnalytics);
router.post('/pageview', trackPageView);

export default router;
