#!/bin/bash

# Setup script for Church Website Backend
# This script automates the initial setup process

set -e

echo "🚀 Starting Church Website Backend Setup..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18 or higher.${NC}"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js version must be 18 or higher. Current: $(node -v)${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js $(node -v) detected${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ npm $(npm -v) detected${NC}"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependencies installed successfully${NC}"
else
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi

echo ""

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p logs
mkdir -p config
mkdir -p uploads

echo -e "${GREEN}✅ Directories created${NC}"
echo ""

# Setup environment file
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo -e "${YELLOW}⚠️  Please edit .env file with your actual credentials${NC}"
    echo -e "${YELLOW}   Required: Firebase, SMTP, Razorpay credentials${NC}"
else
    echo -e "${YELLOW}⚠️  .env file already exists. Skipping...${NC}"
fi

echo ""

# Create initial log files
echo "📄 Creating log files..."
touch logs/app.log
touch logs/error.log
touch logs/all.log

echo -e "${GREEN}✅ Log files created${NC}"
echo ""

# Check Firebase credentials
if [ -f config/gcp-service-account.json ]; then
    echo -e "${GREEN}✅ Firebase service account found${NC}"
else
    echo -e "${YELLOW}⚠️  Firebase service account not found${NC}"
    echo -e "${YELLOW}   Place your service account JSON at: config/gcp-service-account.json${NC}"
fi

echo ""
echo "✨ Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your credentials"
echo "2. Add Firebase service account to config/gcp-service-account.json"
echo "3. Run 'npm run dev' to start development server"
echo "4. Run 'npm start' for production"
echo ""
echo "📚 API Documentation will be available at: http://localhost:5000/api/v1/docs"
echo "🏥 Health Check: http://localhost:5000/health"
echo ""
echo -e "${GREEN}Happy coding! 🎉${NC}"
