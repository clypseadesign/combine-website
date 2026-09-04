import { body, param, query, validationResult } from 'express-validator';
import { AppError } from './errorHandler.js';

// Validation result checker
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map(err => ({
      field: err.path,
      message: err.msg
    }));
    
    throw new AppError(JSON.stringify(formattedErrors), 400);
  }
  next();
};

// Participant Registration Validation
export const validateParticipant = [
  body('fullName')
    .trim()
    .notEmpty().withMessage('Full name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  
  body('spouseName')
    .trim()
    .notEmpty().withMessage('Father/Spouse name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  
  body('age')
    .notEmpty().withMessage('Age is required')
    .isInt({ min: 10, max: 120 }).withMessage('Please enter a valid age'),
  
  body('dob')
    .notEmpty().withMessage('Date of birth is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('Date must be in YYYY-MM-DD format'),
  
  body('gender')
    .notEmpty().withMessage('Gender is required')
    .isIn(['MALE', 'FEMALE']).withMessage('Gender must be MALE or FEMALE'),
  
  body('whatsapp')
    .notEmpty().withMessage('WhatsApp number is required')
    .matches(/^[+]?[\d\s-]{10,15}$/).withMessage('Please enter a valid WhatsApp number'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),
  
  body('occupation')
    .trim()
    .notEmpty().withMessage('Occupation is required')
    .isLength({ min: 2, max: 100 }).withMessage('Occupation must be between 2 and 100 characters'),
  
  body('location')
    .trim()
    .notEmpty().withMessage('Location is required')
    .isLength({ min: 2, max: 200 }).withMessage('Location must be between 2 and 200 characters'),
  
  body('govtId')
    .trim()
    .notEmpty().withMessage('Government ID is required')
    .isLength({ min: 6, max: 50 }).withMessage('Government ID must be between 6 and 50 characters'),
  
  body('address')
    .trim()
    .notEmpty().withMessage('Address is required')
    .isLength({ min: 10, max: 500 }).withMessage('Address must be between 10 and 500 characters'),
  
  body('role')
    .notEmpty().withMessage('Role is required')
    .isIn(['Sing', 'Instrument', 'Act']).withMessage('Invalid role selected'),
  
  body('language')
    .notEmpty().withMessage('Language is required')
    .isIn(['Tamil', 'English', 'Kannada', 'Hindi', 'Malayalam']).withMessage('Invalid language selected'),
  
  validate
];

// Donation Validation
export const validateDonation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[+]?[\d\s-]{10,15}$/).withMessage('Please enter a valid phone number'),
  
  body('amount')
    .notEmpty().withMessage('Amount is required')
    .isInt({ min: 1 }).withMessage('Amount must be at least 1'),
  
  body('message')
    .optional()
    .trim()
    .isLength({ max: 1000 }).withMessage('Message must not exceed 1000 characters'),
  
  validate
];

// Contact Form Validation
export const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),
  
  body('subject')
    .trim()
    .notEmpty().withMessage('Subject is required')
    .isLength({ min: 5, max: 200 }).withMessage('Subject must be between 5 and 200 characters'),
  
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters'),
  
  validate
];

// Testimony Validation
export const validateTestimony = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email address')
    .normalizeEmail(),
  
  body('testimony')
    .trim()
    .notEmpty().withMessage('Testimony is required')
    .isLength({ min: 20, max: 5000 }).withMessage('Testimony must be between 20 and 5000 characters'),
  
  body('location')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Location must not exceed 200 characters'),
  
  validate
];

// ID parameter validation
export const validateId = [
  param('id')
    .notEmpty().withMessage('ID is required')
    .matches(/^[a-zA-Z0-9_-]+$/).withMessage('Invalid ID format'),
  
  validate
];

// Pagination validation
export const validatePagination = [
  query('page')
    .optional()
    .isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
  
  validate
];

export default {
  validate,
  validateParticipant,
  validateDonation,
  validateContact,
  validateTestimony,
  validateId,
  validatePagination
};
