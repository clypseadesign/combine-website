# God Cares Ministries - Backend API

Production-ready backend API for the God Cares Ministries website built with Node.js, Express, and Firebase.

## 🏗️ Architecture

```
server/
├── src/
│   ├── config/           # Configuration files
│   │   ├── firebase.js   # Firebase/Firestore setup
│   │   ├── logger.js     # Winston logger
│   │   ├── cors.js       # CORS configuration
│   │   └── rateLimiter.js # Rate limiting
│   ├── controllers/      # Request handlers
│   │   ├── participant.controller.js
│   │   ├── donation.controller.js
│   │   ├── contact.controller.js
│   │   ├── testimony.controller.js
│   │   ├── sponsor.controller.js
│   │   └── analytics.controller.js
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── services/        # Business logic
│   │   └── email.service.js
│   └── server.js        # Entry point
├── logs/               # Application logs
├── .env.example        # Environment variables template
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Firebase project
- Google Cloud Platform account (optional)
- Razorpay account (for payments)
- SMTP email service (Gmail, SendGrid, etc.)

### Installation

1. **Clone and navigate to server directory**
```bash
cd server
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` file with your actual credentials:
- Firebase credentials
- SMTP/Email settings
- Razorpay API keys
- Other configurations

4. **Start development server**
```bash
npm run dev
```

5. **Start production server**
```bash
npm start
```

The server will start on `http://localhost:5000`

## 📚 API Documentation

### Base URL
```
Development: http://localhost:5000/api/v1
Production: https://your-domain.com/api/v1
```

### Authentication
Currently, the API is public. For production, implement JWT authentication.

## 🔌 API Endpoints

### Participant Registration

#### Register New Participant
```http
POST /api/v1/participants
Content-Type: application/json

{
  "fullName": "John Doe",
  "spouseName": "Jane Doe",
  "age": "35",
  "dob": "1989-01-15",
  "gender": "MALE",
  "whatsapp": "+91-9876543210",
  "email": "john@example.com",
  "occupation": "Software Engineer",
  "location": "Karnataka, India",
  "govtId": "ABCD1234E",
  "address": "123 Main St, Bangalore",
  "role": "Sing",
  "language": "English"
}
```

Response:
```json
{
  "success": true,
  "message": "Registration submitted successfully!",
  "data": {
    "id": "uuid-here",
    "fullName": "John Doe",
    "email": "john@example.com",
    "role": "Sing",
    "language": "English",
    "registrationDate": "2024-01-15T10:30:00.000Z"
  }
}
```

#### Get All Participants
```http
GET /api/v1/participants?page=1&limit=20&status=pending&role=Sing
```

#### Get Participant Statistics
```http
GET /api/v1/participants/stats
```

### Donations

#### Create Donation Order
```http
POST /api/v1/donations
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+91-9876543210",
  "amount": 1000,
  "message": "Supporting the mission"
}
```

Response includes Razorpay order details for payment processing.

#### Verify Payment
```http
POST /api/v1/donations/verify
Content-Type: application/json

{
  "razorpay_order_id": "order_xxx",
  "razorpay_payment_id": "pay_xxx",
  "razorpay_signature": "signature_xxx"
}
```

#### Get Donation Statistics
```http
GET /api/v1/donations/stats
```

### Contact

#### Submit Contact Form
```http
POST /api/v1/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Question about participation",
  "message": "I would like to know more..."
}
```

### Testimonies

#### Submit Testimony
```http
POST /api/v1/testimonies
Content-Type: application/json

{
  "name": "Sarah Johnson",
  "email": "sarah@example.com",
  "testimony": "This ministry has transformed my life...",
  "location": "Mumbai, India"
}
```

#### Get Approved Testimonies
```http
GET /api/v1/testimonies?approved=true&page=1&limit=10
```

### Sponsors

#### Register as Sponsor
```http
POST /api/v1/sponsors
Content-Type: application/json

{
  "name": "ABC Corporation",
  "email": "contact@abc.com",
  "phone": "+91-9876543210",
  "amount": 50000,
  "message": "We want to sponsor this project"
}
```

### Analytics

#### Track Page View
```http
POST /api/v1/analytics/pageview
Content-Type: application/json

{
  "page": "/participants",
  "referrer": "https://google.com"
}
```

#### Get Analytics
```http
GET /api/v1/analytics?days=30
```

### Health Check

```http
GET /health
GET /health/ready
GET /health/live
```

## 🔐 Security Features

- **Helmet.js** - Security headers
- **CORS** - Cross-Origin Resource Sharing protection
- **Rate Limiting** - Prevent abuse
- **Input Validation** - Express-validator
- **XSS Protection** - Clean user input
- **NoSQL Injection Prevention** - Sanitize MongoDB queries
- **Environment Variables** - Sensitive data protection

## 📧 Email Templates

The system includes built-in email templates:
- Participant registration confirmation
- Admin notifications
- Donation receipts
- Contact form confirmations
- Testimony submissions

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Firestore Database
3. Create a service account and download credentials
4. Add credentials to `.env` file

### Razorpay Setup

1. Create account at https://razorpay.com
2. Get API keys from dashboard
3. Add to `.env` file

### Email Setup (SMTP)

For Gmail:
1. Enable 2-factor authentication
2. Generate App Password
3. Use in `.env` file

## 📊 Database Schema

### Participants Collection
```javascript
{
  id: "uuid",
  fullName: "string",
  spouseName: "string",
  age: number,
  dob: "YYYY-MM-DD",
  gender: "MALE|FEMALE",
  whatsapp: "string",
  email: "string",
  occupation: "string",
  location: "string",
  govtId: "string",
  address: "string",
  role: "Sing|Instrument|Act",
  language: "Tamil|English|Kannada|Hindi|Malayalam",
  status: "pending|approved|rejected",
  paymentStatus: "unpaid|paid|refunded",
  registrationDate: "ISO Date",
  createdAt: "ISO Date",
  updatedAt: "ISO Date"
}
```

### Donations Collection
```javascript
{
  id: "uuid",
  name: "string",
  email: "string",
  phone: "string",
  amount: number,
  message: "string",
  orderId: "string",
  paymentId: "string",
  status: "pending|completed|failed|refunded",
  currency: "INR",
  createdAt: "ISO Date",
  completedAt: "ISO Date"
}
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📝 Logging

Logs are stored in `logs/` directory:
- `all.log` - All logs
- `error.log` - Error logs only
- `exceptions.log` - Uncaught exceptions
- `rejections.log` - Unhandled promise rejections

## 🚀 Deployment

### Deploy to Google Cloud Run

1. **Build container**
```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/church-backend
```

2. **Deploy**
```bash
gcloud run deploy church-backend \
  --image gcr.io/PROJECT_ID/church-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Deploy to Heroku

```bash
heroku create church-ministries-api
git push heroku main
heroku config:set NODE_ENV=production
```

### Deploy to AWS EC2

1. SSH into EC2 instance
2. Install Node.js
3. Clone repository
4. Install dependencies
5. Use PM2 for process management
```bash
npm install -g pm2
pm2 start src/server.js --name church-api
pm2 save
pm2 startup
```

## 🔄 CI/CD

Example GitHub Actions workflow:

```yaml
name: Deploy Backend

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
      - run: npm run build
      # Add deployment steps
```

## 🐛 Troubleshooting

### Firebase Connection Issues
- Verify service account credentials
- Check Firebase project settings
- Ensure Firestore is enabled

### Email Not Sending
- Check SMTP credentials
- Verify email service is enabled
- Check logs for specific errors

### Rate Limiting Issues
- Adjust rate limits in `config/rateLimiter.js`
- Clear Redis cache if using Redis

## 📞 Support

For issues or questions:
- Email: support@godcaresministries.org
- Create GitHub issue

## 📄 License

MIT License - See LICENSE file for details

## 👥 Contributors

- Backend Development Team @ God Cares Ministries

---

**Built with ❤️ for God Cares Ministries**
