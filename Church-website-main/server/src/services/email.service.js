import nodemailer from 'nodemailer';
import { logger } from '../config/logger.js';

// Email templates
const templates = {
  participantConfirmation: (data) => ({
    subject: 'Registration Confirmation - God Cares Ministries',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f59e0b; color: white; padding: 20px; text-align: center; }
          .content { padding: 30px 20px; background: #f9fafb; }
          .footer { background: #1f2937; color: white; padding: 20px; text-align: center; font-size: 12px; }
          .button { display: inline-block; padding: 12px 30px; background: #f59e0b; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .details { background: white; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>God Cares Ministries</h1>
            <p>A Ministry Rooted in Love</p>
          </div>
          <div class="content">
            <h2>Thank You for Registering!</h2>
            <p>Dear ${data.name},</p>
            <p>We are delighted to confirm your registration for "The Universal Royal Law of Love" Project.</p>
            
            <div class="details">
              <h3>Registration Details:</h3>
              <p><strong>Registration ID:</strong> ${data.registrationId}</p>
              <p><strong>Role:</strong> ${data.role}</p>
              <p><strong>Language:</strong> ${data.language}</p>
            </div>

            <p>Your registration fee of ₹1,000 (INR) is required to complete the process. Payment details will be sent to you shortly.</p>
            
            <p>We will review your application and contact you within 2-3 business days with further instructions.</p>

            <p>If you have any questions, please contact us at <a href="mailto:support@theuniversalroyallawoflove.org">support@theuniversalroyallawoflove.org</a></p>

            <p>Thank you for being part of this meaningful mission!</p>
            
            <p>Blessings,<br><strong>God Cares Ministries Team</strong></p>
          </div>
          <div class="footer">
            <p>&copy; 2026 God Cares Ministries. All rights reserved.</p>
            <p>Serving Truth. Serving Humanity. Serving God.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  adminParticipantNotification: (data) => ({
    subject: 'New Participant Registration',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
          th { background: #f59e0b; color: white; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Participant Registration</h2>
          <p>A new participant has registered for the project.</p>
          <table>
            <tr><th>Field</th><th>Value</th></tr>
            <tr><td>Full Name</td><td>${data.participant.fullName}</td></tr>
            <tr><td>Email</td><td>${data.participant.email}</td></tr>
            <tr><td>Phone</td><td>${data.participant.whatsapp}</td></tr>
            <tr><td>Role</td><td>${data.participant.role}</td></tr>
            <tr><td>Language</td><td>${data.participant.language}</td></tr>
            <tr><td>Location</td><td>${data.participant.location}</td></tr>
            <tr><td>Registration Date</td><td>${new Date(data.participant.registrationDate).toLocaleString()}</td></tr>
          </table>
          <p>Please review and approve the registration.</p>
        </div>
      </body>
      </html>
    `
  }),

  donationReceipt: (data) => ({
    subject: 'Donation Receipt - God Cares Ministries',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f59e0b; color: white; padding: 20px; text-align: center; }
          .content { padding: 30px 20px; background: #f9fafb; }
          .receipt { background: white; padding: 20px; border: 2px solid #f59e0b; margin: 20px 0; }
          .amount { font-size: 32px; color: #f59e0b; font-weight: bold; text-align: center; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your Donation!</h1>
          </div>
          <div class="content">
            <p>Dear ${data.name},</p>
            <p>We have received your generous donation to God Cares Ministries.</p>
            
            <div class="receipt">
              <h3>Donation Receipt</h3>
              <p><strong>Transaction ID:</strong> ${data.transactionId}</p>
              <p><strong>Date:</strong> ${new Date(data.date).toLocaleString()}</p>
              <div class="amount">₹${data.amount}</div>
              <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
              ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
            </div>

            <p>Your contribution will help us continue our mission of spreading truth, love, peace, and hope through media and educational outreach.</p>
            
            <p>May God bless you abundantly!</p>
            
            <p>In gratitude,<br><strong>God Cares Ministries</strong></p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  contactConfirmation: (data) => ({
    subject: 'We Received Your Message',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Thank you for contacting us!</h2>
          <p>Dear ${data.name},</p>
          <p>We have received your message and will respond within 24-48 hours.</p>
          <p><strong>Your message:</strong></p>
          <blockquote style="background: #f9fafb; padding: 15px; border-left: 4px solid #f59e0b;">
            ${data.message}
          </blockquote>
          <p>Blessings,<br>God Cares Ministries</p>
        </div>
      </body>
      </html>
    `
  })
};

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

/**
 * Send email
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.template - Template name
 * @param {Object} options.data - Template data
 */
export const sendEmail = async ({ to, subject, template, data, html, text }) => {
  try {
    const transporter = createTransporter();

    let emailHtml = html;
    let emailSubject = subject;

    // Use template if provided
    if (template && templates[template]) {
      const templateResult = templates[template](data);
      emailHtml = templateResult.html;
      emailSubject = templateResult.subject;
    }

    const mailOptions = {
      from: `"God Cares Ministries" <${process.env.FROM_EMAIL}>`,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject: emailSubject,
      html: emailHtml,
      text: text || null,
    };

    const info = await transporter.sendMail(mailOptions);
    
    logger.info(`Email sent: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    logger.error('Email sending failed:', error);
    throw error;
  }
};

/**
 * Send bulk emails
 * @param {Array} recipients - Array of recipient objects
 */
export const sendBulkEmails = async (recipients) => {
  const results = {
    sent: 0,
    failed: 0,
    errors: []
  };

  for (const recipient of recipients) {
    try {
      await sendEmail(recipient);
      results.sent++;
    } catch (error) {
      results.failed++;
      results.errors.push({
        recipient: recipient.to,
        error: error.message
      });
    }
  }

  return results;
};

export default {
  sendEmail,
  sendBulkEmails
};
