# Deployment Guide

Complete guide for deploying the Church Website Backend to production.

## 📋 Pre-Deployment Checklist

- [ ] Firebase project created and configured
- [ ] Firestore database enabled
- [ ] Service account credentials downloaded
- [ ] Razorpay account created (API keys obtained)
- [ ] Email service configured (SMTP/SendGrid)
- [ ] Environment variables prepared
- [ ] Domain name registered (if applicable)
- [ ] SSL certificate ready
- [ ] Backup strategy planned

## 🔧 Environment Setup

### 1. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create new project or select existing
3. Enable Firestore Database
4. Create service account:
   - Project Settings → Service Accounts
   - Generate new private key
   - Save JSON file securely

5. Deploy Firestore rules and indexes:
```bash
firebase login
firebase init firestore
firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes
```

### 2. Environment Configuration

Create `.env` file with production values:

```env
NODE_ENV=production
PORT=5000

# Firebase
FIREBASE_PROJECT_ID=your-production-project-id
FIREBASE_PRIVATE_KEY_ID=your-key-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your-client-id
FIREBASE_DATABASE_URL=https://your-project.firebaseio.com

# Email (Production SMTP)
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
FROM_EMAIL=noreply@yourdomain.com
SUPPORT_EMAIL=support@yourdomain.com
ADMIN_EMAILS=admin@yourdomain.com

# Razorpay (Production keys)
RAZORPAY_KEY_ID=rzp_live_your-key
RAZORPAY_KEY_SECRET=your-secret
RAZORPAY_WEBHOOK_SECRET=your-webhook-secret

# Security
JWT_ACCESS_SECRET=your-strong-random-secret-256-bits
JWT_REFRESH_SECRET=your-another-strong-secret-256-bits

# CORS
FRONTEND_URL=https://yourdomain.com
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

## 🚀 Deployment Options

### Option 1: Google Cloud Run (Recommended)

**Advantages:**
- Fully managed
- Auto-scaling
- Pay per use
- Built-in HTTPS
- Zero maintenance

**Steps:**

1. **Install Google Cloud SDK**
```bash
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
gcloud init
```

2. **Configure project**
```bash
gcloud config set project YOUR_PROJECT_ID
gcloud config set run/region us-central1
```

3. **Build and push container**
```bash
cd server
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/church-backend
```

4. **Deploy to Cloud Run**
```bash
gcloud run deploy church-backend \
  --image gcr.io/YOUR_PROJECT_ID/church-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --max-instances 10 \
  --set-env-vars NODE_ENV=production \
  --set-secrets .env=church-backend-secrets:latest
```

5. **Set up custom domain (optional)**
```bash
gcloud run domain-mappings create \
  --service church-backend \
  --domain api.yourdomain.com
```

### Option 2: AWS EC2

**Steps:**

1. **Launch EC2 instance**
   - Ubuntu 22.04 LTS
   - t2.small or larger
   - Configure security group (ports 22, 80, 443, 5000)

2. **SSH into instance**
```bash
ssh -i your-key.pem ubuntu@your-instance-ip
```

3. **Install dependencies**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Install certbot for SSL
sudo apt install -y certbot python3-certbot-nginx
```

4. **Clone and setup**
```bash
git clone your-repo-url
cd church-website/server
npm install --production
cp .env.example .env
# Edit .env with production values
nano .env
```

5. **Start with PM2**
```bash
pm2 start src/server.js --name church-api
pm2 save
pm2 startup
```

6. **Configure Nginx**
```bash
sudo nano /etc/nginx/sites-available/church-api
```

Add configuration:
```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. **Enable site and SSL**
```bash
sudo ln -s /etc/nginx/sites-available/church-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
sudo certbot --nginx -d api.yourdomain.com
```

### Option 3: Heroku

**Steps:**

1. **Install Heroku CLI**
```bash
curl https://cli-assets.heroku.com/install.sh | sh
heroku login
```

2. **Create app**
```bash
cd server
heroku create church-ministries-api
```

3. **Set environment variables**
```bash
heroku config:set NODE_ENV=production
heroku config:set FIREBASE_PROJECT_ID=your-project-id
# Set all other env vars
```

4. **Deploy**
```bash
git push heroku main
```

5. **Scale**
```bash
heroku ps:scale web=1
```

### Option 4: Docker on VPS

**Steps:**

1. **Install Docker**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

2. **Install Docker Compose**
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

3. **Deploy**
```bash
cd server
docker-compose up -d
```

4. **View logs**
```bash
docker-compose logs -f
```

## 🔒 Security Hardening

### 1. Firewall Configuration
```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### 2. SSL Certificate
```bash
sudo certbot --nginx -d api.yourdomain.com
sudo certbot renew --dry-run
```

### 3. Environment Security
- Never commit `.env` files
- Use secrets management (Google Secret Manager, AWS Secrets Manager)
- Rotate keys regularly
- Use strong passwords

### 4. Database Security
- Enable Firestore security rules
- Limit API access by IP (if possible)
- Enable audit logging
- Regular backups

## 📊 Monitoring

### Google Cloud Monitoring
```bash
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=church-backend" --limit 50
```

### PM2 Monitoring
```bash
pm2 monit
pm2 logs church-api
```

### Set up alerts
- Email notifications for errors
- Slack/Discord webhooks
- Uptime monitoring (UptimeRobot, Pingdom)

## 🔄 CI/CD with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: |
          cd server
          npm ci
          
      - name: Run tests
        run: |
          cd server
          npm test
          
      - name: Setup Google Cloud
        uses: google-github-actions/setup-gcloud@v1
        with:
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          project_id: ${{ secrets.GCP_PROJECT_ID }}
          
      - name: Build and Push Docker image
        run: |
          cd server
          gcloud builds submit --tag gcr.io/${{ secrets.GCP_PROJECT_ID }}/church-backend
          
      - name: Deploy to Cloud Run
        run: |
          gcloud run deploy church-backend \
            --image gcr.io/${{ secrets.GCP_PROJECT_ID }}/church-backend \
            --platform managed \
            --region us-central1 \
            --allow-unauthenticated
```

## 📱 Frontend Integration

Update frontend API endpoint:

```javascript
// src/config/api.js
const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.yourdomain.com/api/v1'
  : 'http://localhost:5000/api/v1';

export default API_BASE_URL;
```

## 🧪 Post-Deployment Testing

1. **Health Check**
```bash
curl https://api.yourdomain.com/health
```

2. **API Test**
```bash
curl -X POST https://api.yourdomain.com/api/v1/participants \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User",...}'
```

3. **Load Testing**
```bash
npm install -g artillery
artillery quick --count 10 --num 100 https://api.yourdomain.com/health
```

## 🔙 Backup Strategy

### Firestore Backup
```bash
gcloud firestore export gs://your-backup-bucket
```

### Automated Daily Backup
Create Cloud Scheduler job or cron:
```bash
0 2 * * * gcloud firestore export gs://your-backup-bucket/$(date +\%Y-\%m-\%d)
```

## 📈 Scaling Considerations

- Use Cloud Run auto-scaling
- Implement Redis for caching (if needed)
- CDN for static assets
- Database read replicas
- Load balancer for multiple instances

## 🆘 Rollback Procedure

### Cloud Run
```bash
gcloud run services update-traffic church-backend \
  --to-revisions=PREVIOUS_REVISION=100
```

### PM2
```bash
pm2 reload church-api
```

## 📞 Support

For deployment issues:
- Check logs first
- Review configuration
- Contact: devops@godcaresministries.org

---

**Deployed with ❤️ for God Cares Ministries**
