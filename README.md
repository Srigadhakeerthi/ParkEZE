
# Smart Pulse - Smart Vehicle Parking System

A comprehensive web-based parking management system built with React, TypeScript, and modern web technologies.

## 🚀 Features

### User Features
- **User Authentication**: Secure registration and login system
- **Real-time Slot Availability**: View available parking slots instantly
- **Slot Booking**: Reserve parking slots for specific dates and times
- **Payment Integration**: Secure payment processing (Razorpay ready)
- **Email Notifications**: Automated booking confirmations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **User Dashboard**: Manage bookings and view history

### Admin Features
- **Admin Panel**: Comprehensive slot and booking management
- **Slot Management**: Add, update, and delete parking slots
- **Booking Management**: View and manage all user bookings
- **Analytics Dashboard**: Revenue and occupancy statistics
- **System Settings**: Configure pricing and booking parameters

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Payment**: Razorpay (integration ready)
- **Email**: Nodemailer (service ready)

## 📦 Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── auth/              # Authentication components
│   ├── dashboard/         # User dashboard
│   ├── booking/           # Booking system
│   ├── admin/             # Admin panel
│   └── Layout.tsx         # Main layout component
├── hooks/
│   └── useAuth.tsx        # Authentication hook
├── utils/
│   ├── emailService.ts    # Email notification service
│   └── paymentService.ts  # Payment processing service
├── pages/
│   ├── Index.tsx          # Landing page
│   └── NotFound.tsx       # 404 page
└── App.tsx                # Main app component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd smart-pulse-parking
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 🔐 Demo Credentials

### User Account
- Email: `user@test.com`
- Password: `password123`

### Admin Account
- Email: `admin@smartpulse.com`
- Password: `admin123`

## 🏗️ Backend Integration Ready

The frontend is prepared for backend integration with:

### API Endpoints Structure
```
POST /api/auth/register
POST /api/auth/login
GET  /api/slots/available
POST /api/bookings
GET  /api/bookings/user/:userId
POST /api/payments/process
POST /api/admin/slots
PUT  /api/admin/slots/:id
DELETE /api/admin/slots/:id
```

### Database Schema (MongoDB)
```javascript
// Users Collection
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String, // hashed
  role: String, // 'user' | 'admin'
  createdAt: Date
}

// Parking Slots Collection
{
  _id: ObjectId,
  number: String,
  type: String, // 'regular' | 'premium' | 'disabled'
  price: Number,
  location: String,
  status: String, // 'available' | 'occupied' | 'maintenance'
  createdAt: Date
}

// Bookings Collection
{
  _id: ObjectId,
  userId: ObjectId,
  slotId: ObjectId,
  date: Date,
  startTime: String,
  duration: Number,
  amount: Number,
  status: String, // 'active' | 'completed' | 'cancelled'
  paymentId: String,
  createdAt: Date
}
```

## 🔧 Environment Variables

Create a `.env` file for backend integration:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/smartpulse

# JWT
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=7d

# Razorpay
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Frontend URL
FRONTEND_URL=http://localhost:8080
```

## 📧 Email Templates

Pre-built email templates included for:
- Booking confirmations
- Payment receipts
- Booking reminders
- Cancellation notifications

## 💳 Payment Integration

Razorpay integration ready with:
- Order creation
- Payment processing
- Payment verification
- Refund handling

## 🔒 Security Features

- JWT-based authentication
- Password hashing (bcrypt ready)
- Input validation with Zod
- Protected routes
- Role-based access control

## 📱 Responsive Design

Fully responsive design supporting:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
```

Deploy the `dist` folder to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Firebase Hosting

### Backend Deployment Options
- Heroku
- AWS EC2/ECS
- DigitalOcean
- Railway

### Database Options
- MongoDB Atlas (recommended)
- Local MongoDB
- AWS DocumentDB

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and queries:
- Email: support@smartpulse.com
- GitHub Issues: Create an issue in this repository

## 🔄 Future Enhancements

- Mobile app (React Native)
- IoT sensor integration
- AI-powered slot recommendations
- QR code parking validation
- Multi-language support
- Advanced analytics dashboard
</README.md>
