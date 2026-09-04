# Frontend Integration Guide

Complete guide for integrating the React frontend with the Node.js backend.

## 📋 Overview

This guide will help you connect your existing React frontend to the new backend API.

## 🔧 Setup

### 1. Install Required Packages

```bash
cd church-website
npm install axios react-query
```

### 2. Create API Configuration

Create `src/config/api.js`:

```javascript
import axios from 'axios';

// Base URL configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add authorization token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Server responded with error
      const message = error.response.data.message || 'Something went wrong';
      console.error('API Error:', message);
      return Promise.reject(new Error(message));
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message);
      return Promise.reject(new Error('Network error. Please check your connection.'));
    } else {
      // Something else happened
      console.error('Error:', error.message);
      return Promise.reject(error);
    }
  }
);

export default api;
```

### 3. Create API Service Layer

Create `src/services/api.service.js`:

```javascript
import api from '../config/api';

export const participantService = {
  register: async (data) => {
    return await api.post('/participants', data);
  },
  getAll: async (params) => {
    return await api.get('/participants', { params });
  },
  getById: async (id) => {
    return await api.get(`/participants/${id}`);
  },
  getStats: async () => {
    return await api.get('/participants/stats');
  }
};

export const donationService = {
  create: async (data) => {
    return await api.post('/donations', data);
  },
  verify: async (data) => {
    return await api.post('/donations/verify', data);
  },
  getStats: async () => {
    return await api.get('/donations/stats');
  }
};

export const contactService = {
  submit: async (data) => {
    return await api.post('/contact', data);
  }
};

export const testimonyService = {
  submit: async (data) => {
    return await api.post('/testimonies', data);
  },
  getApproved: async (params) => {
    return await api.get('/testimonies', { params: { ...params, approved: true } });
  }
};

export const sponsorService = {
  register: async (data) => {
    return await api.post('/sponsors', data);
  }
};

export const analyticsService = {
  trackPageView: async (page) => {
    return await api.post('/analytics/pageview', { page });
  }
};
```

## 🔄 Update Existing Components

### 1. Update ParticipantRegistration.jsx

Replace the existing file with:

```javascript
import React, { useState } from 'react';
import Backdrop from '../components/Backdrop';
import { participantService } from '../services/api.service';

const ParticipantRegistration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        spouseName: '',
        age: '',
        dob: '',
        gender: '',
        whatsapp: '',
        email: '',
        occupation: '',
        location: '',
        govtId: '',
        address: '',
        role: '',
        language: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError(''); // Clear error on input change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await participantService.register(formData);
            
            setSuccess(true);
            alert(response.message || "Registration submitted successfully!");

            // Clear form
            setFormData({
                fullName: '',
                spouseName: '',
                age: '',
                dob: '',
                gender: '',
                whatsapp: '',
                email: '',
                occupation: '',
                location: '',
                govtId: '',
                address: '',
                role: '',
                language: ''
            });

            // Reset success after 5 seconds
            setTimeout(() => setSuccess(false), 5000);

        } catch (error) {
            console.error("Registration error:", error);
            setError(error.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
            <Backdrop title="Participant Registration" />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: '"Century Gothic", sans-serif' }}>
                
                {/* Success Message */}
                {success && (
                    <div style={{ 
                        backgroundColor: '#10b981', 
                        color: 'white', 
                        padding: '15px', 
                        borderRadius: '8px', 
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}>
                        ✅ Registration submitted successfully! Check your email for confirmation.
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div style={{ 
                        backgroundColor: '#ef4444', 
                        color: 'white', 
                        padding: '15px', 
                        borderRadius: '8px', 
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}>
                        ❌ {error}
                    </div>
                )}

                {/* Heading */}
                <h2 style={{ 
                    fontSize: '26px', 
                    fontFamily: "Anastasia", 
                    fontWeight: '900', 
                    color: '#f59e0b', 
                    letterSpacing: '1px', 
                    textTransform: 'uppercase', 
                    marginBottom: '30px', 
                    textAlign: 'center' 
                }}>
                    Participant Registration
                </h2>

                {/* Form - Keep existing form JSX but update onSubmit */}
                <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '50px 40px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', color: '#1f2937' }}>
                    {/* Keep all existing form fields */}
                    {/* ... */}
                    
                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{ 
                                backgroundColor: loading ? '#d1d5db' : '#facc15', 
                                color: '#1f2937', 
                                fontWeight: 'bold', 
                                padding: '12px 30px', 
                                borderRadius: '20px', 
                                border: 'none', 
                                cursor: loading ? 'not-allowed' : 'pointer', 
                                fontSize: '13px', 
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                            }}
                        >
                            {loading ? 'SUBMITTING...' : 'REGISTER NOW'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ParticipantRegistration;
```

### 2. Update SupportMatters.jsx (Donation Integration)

Add Razorpay payment integration:

```javascript
import React, { useState } from 'react';
import { donationService } from '../services/api.service';

// Add Razorpay script to index.html
// <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

const SupportMatters = () => {
    const [donationData, setDonationData] = useState({
        name: '',
        email: '',
        phone: '',
        amount: '',
        message: ''
    });

    const handleDonation = async (e) => {
        e.preventDefault();

        try {
            // Create order
            const orderData = await donationService.create(donationData);

            // Initialize Razorpay
            const options = {
                key: orderData.data.razorpayKeyId,
                amount: orderData.data.amount,
                currency: orderData.data.currency,
                order_id: orderData.data.orderId,
                name: 'God Cares Ministries',
                description: 'Donation',
                image: '/logo.png',
                prefill: {
                    name: donationData.name,
                    email: donationData.email,
                    contact: donationData.phone
                },
                theme: {
                    color: '#f59e0b'
                },
                handler: async function (response) {
                    try {
                        // Verify payment
                        await donationService.verify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature
                        });
                        alert('Thank you for your donation!');
                    } catch (error) {
                        alert('Payment verification failed. Please contact support.');
                    }
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            alert(error.message || 'Failed to initiate payment');
        }
    };

    return (
        // Your existing JSX with form connected to handleDonation
    );
};
```

### 3. Add Analytics Tracking

Create `src/hooks/usePageTracking.js`:

```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsService } from '../services/api.service';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    analyticsService.trackPageView(location.pathname).catch(err => {
      console.error('Analytics tracking failed:', err);
    });
  }, [location]);
};
```

Use in App.jsx:

```javascript
import { usePageTracking } from './hooks/usePageTracking';

function App() {
  usePageTracking(); // Add this line
  
  return (
    // Your existing app structure
  );
}
```

## 🌐 Environment Variables

Create `.env.local` in frontend root:

```env
REACT_APP_API_URL=http://localhost:5000/api/v1
REACT_APP_RAZORPAY_KEY_ID=rzp_test_your_key_id
```

Production `.env.production`:

```env
REACT_APP_API_URL=https://api.yourdomain.com/api/v1
REACT_APP_RAZORPAY_KEY_ID=rzp_live_your_key_id
```

## ✅ Testing the Integration

### 1. Start Backend
```bash
cd server
npm run dev
```

### 2. Start Frontend
```bash
cd church-website
npm run dev
```

### 3. Test Registration
1. Navigate to `/participant-registration`
2. Fill out the form
3. Submit
4. Check console for API response
5. Verify email received

### 4. Test Donations
1. Navigate to `/support-matters`
2. Fill donation form
3. Click donate
4. Complete Razorpay payment (use test cards)

## 🔍 Debugging

### Check API Connection
```javascript
// Add to any component
useEffect(() => {
  fetch('http://localhost:5000/health')
    .then(res => res.json())
    .then(data => console.log('Backend health:', data))
    .catch(err => console.error('Backend not reachable:', err));
}, []);
```

### Common Issues

1. **CORS Error**
   - Check backend CORS configuration
   - Ensure frontend URL is in ALLOWED_ORIGINS

2. **Network Error**
   - Backend not running
   - Wrong API_BASE_URL
   - Firewall blocking connection

3. **400 Bad Request**
   - Check request payload format
   - Validate required fields

## 📱 Production Deployment

Update `package.json` build script:

```json
{
  "scripts": {
    "build": "REACT_APP_API_URL=https://api.yourdomain.com/api/v1 vite build"
  }
}
```

## 🎉 Complete!

Your frontend is now fully integrated with the backend API. All forms will submit to the database, emails will be sent, and payments will be processed through Razorpay.

For support: support@godcaresministries.org
