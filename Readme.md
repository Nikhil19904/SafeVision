# 📸 SafeVision - CCTV Camera E-commerce Platform

## 📑 Table of Contents
1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Setup Guide](#setup-guide)
4. [API Documentation](#api-documentation)
5. [Database Schema](#database-schema)
6. [Frontend Components](#frontend-components)
7. [Security Features](#security-features)
8. [Testing](#testing)
9. [Deployment](#deployment)

## 🎯 Project Overview
SafeVision is an e-commerce platform specialized in CCTV cameras and security systems, where administrators can manage and sell CCTV products to customers.

### Key Features

#### 🛍️ Customer Features
- Browse CCTV cameras by categories (Dome, Bullet, PTZ, Wireless)
- Advanced product filtering (resolution, night vision, price range)
- Product comparison tool
- Detailed product specifications and images
- Real product installation images
- Customer reviews and ratings
- Shopping cart and wishlist
- Secure checkout process
- Order tracking
- Installation service booking

#### 👤 User Dashboard
- Order history
- Saved addresses
- Installation appointments
- Support tickets
- Warranty claims
- Product manuals download
- Invoice generation

#### 👨‍💼 Admin Features
- Product management (CRUD operations)
- Inventory tracking
- Order management
- Customer management
- Installation team management
- Sales reports and analytics
- Discount and coupon management
- Banner management
- Customer support system

#### 📦 Product Categories
- Indoor CCTV Cameras
- Outdoor CCTV Cameras
- Wireless Security Cameras
- PTZ Cameras
- NVR/DVR Systems
- Security Accessories
- Installation Kits
- Surveillance Packages

#### 💳 Payment Options
- Credit/Debit Cards
- UPI Payments
- Net Banking
- EMI Options
- Cash on Delivery

## 🏗️ System Architecture

### Technology Stack
- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT
- **Payment**: Razorpay/Stripe
- **Email**: Nodemailer

## 🛠️ Setup Guide

### Prerequisites
- Node.js (v14+)
- MySQL (v8+)
- npm/yarn

### Installation Steps

1. **Clone Repository**
````bash
git clone <repository-url>
cd CamSecurity
````

2. **Install Dependencies**
````bash
npm install
````

3. **Setup Environment Variables**
````bash
# filepath: d:\CamSecurity\backend\.env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=camsecurity
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
````

4. **Run Migrations**
````bash
npx sequelize-cli db:migrate
````

5. **Seed Database (Optional)**
````bash
npx sequelize-cli db:seed:all
````

6. **Start Development Server**
````bash
npm run dev
````

## 📚 API Documentation
Coming soon...

## 📊 Database Schema

### Products Table
````sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    sku VARCHAR(50) UNIQUE NOT NULL,
    category_id INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    sale_price DECIMAL(10,2),
    stock INT DEFAULT 0,
    resolution VARCHAR(50),
    night_vision BOOLEAN DEFAULT false,
    storage_capacity VARCHAR(50),
    connection_type VARCHAR(50),
    warranty_period INT,
    description TEXT,
    specifications TEXT,
    images JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
````

## ⚛️ Frontend Components

### Directory Structure
```
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── Navbar.jsx
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   └── products/
│       ├── ProductList.jsx
│       └── ProductCard.jsx
├── pages/
├── contexts/
└── utils/
```

## 🎨 Key Pages

### Customer Frontend
- Homepage with featured products
- Product listing page with filters
- Product detail page
- Shopping cart
- Checkout process
- User dashboard
- Installation booking page
- Support/Contact page

### Admin Dashboard
- Product management
- Order management
- Customer management
- Sales analytics
- Inventory management
- Support ticket system

## 🔒 Security Features
- SSL encryption
- Secure payment gateway integration
- Data encryption
- Regular security audits
- Backup systems
- DDoS protection

## 📱 Mobile Responsiveness
- Responsive design for all devices
- Mobile-optimized checkout
- Touch-friendly interface
- Quick product search
- Easy navigation

## 📞 Customer Support
- Live chat support
- Email support system
- FAQ section
- Installation guides
- Video tutorials
- Product manuals

## 🧪 Testing
Coming soon...

## 🚀 Deployment
Coming soon...