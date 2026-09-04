import admin from 'firebase-admin';
import dotenv from 'dotenv';
import { logger } from './logger.js';

dotenv.config();

// Initialize Firebase Admin SDK
const initializeFirebase = () => {
  try {
    // Check if Firebase is already initialized
    if (admin.apps.length > 0) {
      logger.info('Firebase already initialized');
      return admin.app();
    }

    // Service account configuration
    const serviceAccount = {
      type: 'service_account',
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(
        process.env.FIREBASE_CLIENT_EMAIL
      )}`
    };

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`
    });

    logger.info('✅ Firebase Admin SDK initialized successfully');
    return admin.app();
  } catch (error) {
    logger.error('❌ Firebase initialization error:', error);
    throw new Error('Failed to initialize Firebase');
  }
};

// Initialize Firebase
initializeFirebase();

// Export Firestore database instance
export const db = admin.firestore();

// Export Storage instance
export const storage = admin.storage();

// Export Auth instance
export const auth = admin.auth();

// Collections
export const collections = {
  PARTICIPANTS: 'participants',
  DONATIONS: 'donations',
  SPONSORS: 'sponsors',
  TESTIMONIES: 'testimonies',
  CONTACTS: 'contacts',
  ANALYTICS: 'analytics',
  USERS: 'users',
  SESSIONS: 'sessions'
};

// Firestore settings for better performance
db.settings({
  ignoreUndefinedProperties: true,
  timestampsInSnapshots: true
});

export default admin;
