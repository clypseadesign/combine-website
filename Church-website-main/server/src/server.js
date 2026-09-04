import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';

// Import configurations
import { corsOptions } from './config/cors.js';
import { limiter } from './config/rateLimiter.js';
import { logger, morganStream } from './config/logger.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import './config/firebase.js'; // Initialize Firebase

// Import routes
import participantRoutes from './routes/participant.routes.js';
import donationRoutes from './routes/donation.routes.js';
import sponsorRoutes from './routes/sponsor.routes.js';
import contactRoutes from './routes/contact.routes.js';
import testimonyRoutes from './routes/testimony.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';
import healthRoutes from './routes/health.routes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_VERSION = process.env.API_VERSION || 'v1';

// Trust proxy - important for rate limiting behind load balancers
app.set('trust proxy', 1);

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// CORS Configuration
app.use(cors(corsOptions));

// Body Parser Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Data Sanitization
app.use(mongoSanitize()); // Prevent NoSQL injection
app.use(xss()); // Prevent XSS attacks

// Compression Middleware
app.use(compression());

// Logging Middleware
app.use(morgan('combined', { stream: morganStream }));

// Rate Limiting
app.use('/api/', limiter);

// Health Check Route
app.use('/health', healthRoutes);

// API Routes
app.use(`/api/${API_VERSION}/participants`, participantRoutes);
app.use(`/api/${API_VERSION}/donations`, donationRoutes);
app.use(`/api/${API_VERSION}/sponsors`, sponsorRoutes);
app.use(`/api/${API_VERSION}/contact`, contactRoutes);
app.use(`/api/${API_VERSION}/testimonies`, testimonyRoutes);
app.use(`/api/${API_VERSION}/analytics`, analyticsRoutes);

// Welcome Route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'God Cares Ministries API Server',
    version: API_VERSION,
    status: 'running',
    documentation: `/api/${API_VERSION}/docs`,
    endpoints: {
      participants: `/api/${API_VERSION}/participants`,
      donations: `/api/${API_VERSION}/donations`,
      sponsors: `/api/${API_VERSION}/sponsors`,
      contact: `/api/${API_VERSION}/contact`,
      testimonies: `/api/${API_VERSION}/testimonies`,
      health: '/health'
    }
  });
});

// 404 Handler
app.use(notFoundHandler);

// Global Error Handler
app.use(errorHandler);

// Graceful Shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
});

// Start Server
const server = app.listen(PORT, () => {
  logger.info(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  logger.info(`📚 API Documentation: http://localhost:${PORT}/api/${API_VERSION}/docs`);
  logger.info(`🏥 Health Check: http://localhost:${PORT}/health`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error('UNHANDLED REJECTION! 💥 Shutting down...', err);
  server.close(() => {
    process.exit(1);
  });
});

export default app;
