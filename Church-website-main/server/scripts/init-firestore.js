#!/usr/bin/env node

/**
 * Firestore Database Initialization Script
 * Creates collections and indexes for the Church Website Backend
 */

import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Firebase
const serviceAccount = {
  type: 'service_account',
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const db = admin.firestore();

async function initializeCollections() {
  console.log('🔥 Initializing Firestore collections...\n');

  try {
    // Create collections with initial documents
    const collections = [
      'participants',
      'donations',
      'sponsors',
      'testimonies',
      'contacts',
      'analytics',
      'users',
      'sessions'
    ];

    for (const collectionName of collections) {
      console.log(`Creating collection: ${collectionName}`);
      
      // Add a placeholder document to create the collection
      await db.collection(collectionName).doc('_init').set({
        initialized: true,
        createdAt: new Date().toISOString(),
        note: 'This is a placeholder document to initialize the collection'
      });

      console.log(`✅ Collection '${collectionName}' created\n`);
    }

    // Create composite indexes (these need to be created in Firebase Console or using Firebase CLI)
    console.log('📋 Recommended Firestore Indexes:\n');
    console.log('1. participants collection:');
    console.log('   - Fields: status (Ascending), createdAt (Descending)');
    console.log('   - Fields: role (Ascending), createdAt (Descending)');
    console.log('   - Fields: language (Ascending), createdAt (Descending)\n');
    
    console.log('2. donations collection:');
    console.log('   - Fields: status (Ascending), createdAt (Descending)');
    console.log('   - Fields: status (Ascending), completedAt (Descending)\n');
    
    console.log('3. testimonies collection:');
    console.log('   - Fields: approved (Ascending), createdAt (Descending)\n');
    
    console.log('4. analytics collection:');
    console.log('   - Fields: date (Ascending), timestamp (Descending)\n');

    console.log('To create these indexes, run:');
    console.log('firebase deploy --only firestore:indexes\n');

    // Create initial admin user (optional)
    console.log('Creating initial admin user...');
    await db.collection('users').doc('admin').set({
      email: 'admin@godcaresministries.org',
      role: 'admin',
      name: 'Admin User',
      createdAt: new Date().toISOString(),
      active: true
    });
    console.log('✅ Admin user created\n');

    // Create system configuration document
    console.log('Creating system configuration...');
    await db.collection('system').doc('config').set({
      initialized: true,
      version: '1.0.0',
      features: {
        registrations: true,
        donations: true,
        testimonies: true,
        analytics: true
      },
      limits: {
        maxParticipants: 10000,
        maxFileSize: 10485760, // 10MB
        registrationFee: 1000 // INR
      },
      contact: {
        email: 'support@theuniversalroyallawoflove.org',
        phone: '+91-88923-36400'
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    console.log('✅ System configuration created\n');

    console.log('✨ Firestore initialization completed successfully!\n');
    console.log('Next steps:');
    console.log('1. Create the recommended indexes in Firebase Console');
    console.log('2. Set up Firestore security rules');
    console.log('3. Configure backup schedule\n');

  } catch (error) {
    console.error('❌ Error initializing Firestore:', error);
    process.exit(1);
  }

  process.exit(0);
}

// Run initialization
initializeCollections();
