# LMS Platform - Comprehensive Learning Management System

A modern, serverless Learning Management System built with React, Node.js, and MongoDB, deployed on Vercel.

## 🏗️ Architecture Overview

This platform follows a microservices architecture with clear separation of concerns:

- **Frontend Applications**: React-based UIs for different user roles
- **Serverless APIs**: Vercel Functions for backend logic
- **Shared Database**: MongoDB Atlas for centralized data
- **Role-Based Access**: Students, Creators, and Admins

## 📁 Project Structure

```
lms-platform/
├── apps/
│   ├── lms-frontend/          # Main LMS UI (Students + Creators)
│   ├── creator-portal/        # Quiz creation interface
│   ├── admin-dashboard/       # Admin management panel
│   └── auth-frontend/         # Authentication system
├── api/
│   ├── auth-api/              # User authentication & authorization
│   ├── quiz-api/              # Quiz management & submission
│   └── analytics-api/         # Usage analytics & reporting
├── shared/
│   ├── models/                # Database schemas
│   └── utils/                 # Shared utilities
└── docs/                      # Documentation
```

## 🚀 Features

### For Students
- **Dashboard**: Personal progress tracking and statistics
- **Subject Modules**: Organized learning paths
- **Daily Quiz Mix**: Randomized questions from all subjects
- **Progress Analytics**: Detailed performance insights

### For Creators
- **Quiz Builder**: Intuitive interface for creating assessments
- **Subject Management**: Organize content by topics
- **Question Bank**: Reusable question library
- **Analytics**: Track quiz performance and engagement

### For Admins
- **User Management**: Role assignment and permissions
- **Platform Analytics**: System-wide usage statistics
- **Content Moderation**: Review and approve creator content
- **Email Whitelisting**: Control creator access

## 🔧 Technology Stack

- **Frontend**: Vite + React + TypeScript + Tailwind CSS
- **Backend**: Vercel Serverless Functions + Node.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT with role-based access control
- **State Management**: Zustand
- **Deployment**: Vercel (Frontend & API)

## 🛠️ Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lms-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   # Configure your MongoDB URI and JWT secrets
   ```

4. **Start development servers**
   ```bash
   # Main LMS Frontend
   cd apps/lms-frontend && npm run dev
   
   # Creator Portal
   cd apps/creator-portal && npm run dev
   
   # Admin Dashboard
   cd apps/admin-dashboard && npm run dev
   ```

## 🔐 Authentication Flow

1. **Initial Access**: Users are redirected to auth-frontend if not authenticated
2. **Role-Based Routing**: 
   - Students → LMS Dashboard
   - Creators → Creator Portal
   - Admins → Admin Dashboard
3. **JWT Tokens**: Secure, stateless authentication with role information

## 📊 API Endpoints

### Authentication API
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/refresh` - Token refresh
- `GET /api/auth/verify` - Token verification

### Quiz API
- `GET /api/quizzes/:subjectId` - Get quizzes by subject
- `POST /api/quiz/:quizId/submit` - Submit quiz answers
- `GET /api/quiz/:quizId` - Get quiz details
- `POST /api/quiz/create` - Create new quiz (creators only)

### Analytics API
- `GET /api/analytics/user/:id/stats` - User statistics
- `GET /api/analytics/platform` - Platform-wide analytics
- `POST /api/analytics/daily-mix` - Generate daily quiz mix

## 🚀 Deployment

Each component is deployed independently:

- **Frontends**: Vercel static hosting
- **APIs**: Vercel Serverless Functions
- **Database**: MongoDB Atlas

## 📈 Roadmap

- [ ] Advanced analytics dashboard
- [ ] Real-time collaboration features
- [ ] Mobile app development
- [ ] AI-powered question generation
- [ ] Integration with external LMS platforms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.