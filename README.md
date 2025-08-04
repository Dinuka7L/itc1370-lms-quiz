# ITC1370 LMS Quiz Platform

A comprehensive Learning Management System (LMS) quiz platform built with React, TypeScript, and MongoDB, deployed on Vercel.

## 🚀 Architecture Overview

This application follows a modern serverless architecture:

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Vercel Serverless Functions
- **Database**: MongoDB Atlas
- **Deployment**: Vercel

## 📁 Project Structure

```
ITC1370-LMS-QUIZ/
├── api/                          # Vercel Serverless Functions
│   ├── getQuiz.ts               # Fetch individual quiz (no answers)
│   ├── getQuizzes.ts            # Fetch quiz summaries
│   └── submitQuiz.ts            # Grade and store submissions
├── src/
│   ├── components/              # React components
│   ├── pages/                   # Main application pages
│   ├── services/api.ts          # API client service
│   ├── hooks/useQuizData.ts     # React hooks for data fetching
│   ├── store/quizStore.ts       # Zustand state management
│   └── types/quiz.ts            # TypeScript interfaces
├── scripts/migrate-to-mongodb.js # Database migration script
├── vercel.json                  # Vercel configuration
└── .env.example                 # Environment variables template
```

## 🔧 Setup Instructions

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd ITC1370-LMS-QUIZ
npm install
```

### 2. Set Up MongoDB

1. Create a MongoDB Atlas account
2. Create a new cluster and database named `itc1370-quiz-app`
3. Get your connection string

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Add your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/itc1370-quiz-app?retryWrites=true&w=majority
```

### 4. Migrate Quiz Data

Run the migration script to populate your database:

```bash
node scripts/migrate-to-mongodb.js
```

### 5. Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel`
4. Add environment variables in Vercel dashboard

## 🎯 Features

### Current Features
- ✅ Dynamic quiz loading from MongoDB
- ✅ Secure server-side grading
- ✅ Auto-save progress with resume capability
- ✅ Multiple question types (MCQ, Essay, Fill-in-blank, etc.)
- ✅ Responsive design with loading states
- ✅ Local storage for progress persistence

### Planned Architecture Expansion

```
lms-platform/
├── apps/
│   ├── lms-frontend/          # Current quiz platform
│   ├── creator-portal/        # Quiz creation interface
│   ├── admin-dashboard/       # Admin management panel
│   └── auth-frontend/         # Authentication system
├── api/
│   ├── auth-api/              # User authentication
│   ├── quiz-api/              # Quiz management
│   └── analytics-api/         # Usage analytics
└── shared/
    ├── models/                # Database schemas
    └── utils/                 # Shared utilities
```

## 🔒 Security Features

- **Answer Protection**: Quiz answers never reach the client
- **Server-side Grading**: All scoring logic runs on Vercel functions
- **Environment Variables**: Sensitive data secured in Vercel environment
- **Input Validation**: Comprehensive validation on all API endpoints

## 🎨 User Experience

- **Loading States**: Skeleton screens during data fetching
- **Error Handling**: User-friendly error messages with retry options
- **Progressive Loading**: Quizzes load dynamically when needed
- **Auto-save**: Progress automatically saved every action

## 📊 API Endpoints

- `GET /api/getQuizzes?category=lesson|mockFinal` - Get quiz summaries
- `GET /api/getQuiz?id=quiz-id` - Get quiz questions (no answers)
- `POST /api/submitQuiz` - Submit quiz for grading

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📈 Future Enhancements

1. **Authentication System**: User registration and login
2. **Creator Portal**: Interface for creating and managing quizzes
3. **Admin Dashboard**: User management and analytics
4. **Daily Mix Quizzes**: Randomized question sets
5. **Progress Analytics**: Detailed performance tracking
6. **Role-based Access**: Student, Creator, and Admin roles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.