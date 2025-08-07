# API Documentation

This document describes the API endpoints available in the LMS Platform.

## Base URL
- Development: `http://localhost:3000/api`
- Production: `https://your-domain.com/api`

## Authentication

All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <access_token>
```

## Response Format

All API responses follow this format:
```json
{
  "success": true,
  "data": {},
  "message": "Optional message",
  "error": "Error message if success is false"
}
```

## Authentication Endpoints

### POST /auth-api/login
Login with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "student"
  },
  "tokens": {
    "accessToken": "jwt_token",
    "refreshToken": "refresh_token"
  }
}
```

### POST /auth-api/register
Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "role": "student"
}
```

### GET /auth-api/verify
Verify access token validity.

**Headers:**
```
Authorization: Bearer <access_token>
```

## Quiz Endpoints

### GET /quiz-api/getQuizzesBySubject
Get quizzes filtered by subject and other criteria.

**Query Parameters:**
- `subjectId` (optional): Filter by subject ID
- `category` (optional): Filter by category (lesson, mockFinal, etc.)
- `difficulty` (optional): Filter by difficulty (beginner, intermediate, advanced)

**Response:**
```json
{
  "success": true,
  "quizzes": [
    {
      "id": "quiz_id",
      "title": "Quiz Title",
      "description": "Quiz description",
      "subject": {
        "name": "Subject Name",
        "color": "#3B82F6"
      },
      "totalMarks": 100,
      "questionCount": 10
    }
  ]
}
```

### GET /quiz-api/getQuiz
Get detailed quiz information (without answers).

**Query Parameters:**
- `id`: Quiz ID

### POST /quiz-api/submitQuiz
Submit quiz answers for grading.

**Request Body:**
```json
{
  "quizId": "quiz_id",
  "answers": {
    "q1": "answer1",
    "q2": ["answer2a", "answer2b"]
  },
  "timeSpent": 1800
}
```

### POST /quiz-api/createQuiz
Create a new quiz (creators only).

**Request Body:**
```json
{
  "title": "Quiz Title",
  "description": "Quiz description",
  "subjectId": "subject_id",
  "questions": [
    {
      "type": "multipleChoice",
      "question": "What is 2+2?",
      "options": ["3", "4", "5", "6"],
      "answer": "4",
      "marks": 1
    }
  ],
  "timeOptions": [30, 45, 60],
  "category": "lesson"
}
```

## Analytics Endpoints

### GET /analytics-api/userStats
Get user statistics and performance data.

**Query Parameters:**
- `userId` (optional): Get stats for specific user (admin only)

**Response:**
```json
{
  "success": true,
  "stats": {
    "overview": {
      "totalQuizzesTaken": 25,
      "averageScore": 85.5,
      "totalTimeSpent": 1200,
      "streakDays": 7
    },
    "performance": {
      "byCategory": {
        "lesson": {
          "count": 15,
          "averageScore": 88.2
        }
      },
      "bySubject": {
        "Mathematics": {
          "count": 10,
          "averageScore": 90.1,
          "color": "#3B82F6"
        }
      }
    }
  }
}
```

### POST /analytics-api/dailyMix
Generate a daily quiz mix.

**Request Body:**
```json
{
  "totalQuestions": 10,
  "difficulty": "mixed",
  "subjects": ["subject_id1", "subject_id2"],
  "questionTypes": ["multipleChoice", "essay"],
  "regenerate": false
}
```

### GET /analytics-api/dailyMix
Get today's daily mix.

## Error Codes

- `400` - Bad Request: Invalid request data
- `401` - Unauthorized: Missing or invalid token
- `403` - Forbidden: Insufficient permissions
- `404` - Not Found: Resource not found
- `409` - Conflict: Resource already exists
- `500` - Internal Server Error: Server error

## Rate Limiting

API endpoints are rate-limited to prevent abuse:
- Authentication endpoints: 5 requests per minute
- Quiz submission: 10 requests per minute
- General endpoints: 100 requests per minute

## Pagination

For endpoints that return lists, pagination is supported:

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20, max: 100)

**Response:**
```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

## Webhooks

For real-time updates, webhooks can be configured:

### Quiz Completion Webhook
Triggered when a user completes a quiz.

**Payload:**
```json
{
  "event": "quiz.completed",
  "data": {
    "userId": "user_id",
    "quizId": "quiz_id",
    "score": 85.5,
    "completedAt": "2024-01-01T12:00:00Z"
  }
}
```

## SDK and Libraries

Official SDKs are available for:
- JavaScript/TypeScript
- Python
- PHP

Example usage:
```javascript
import { LMSClient } from '@lms-platform/sdk';

const client = new LMSClient({
  apiKey: 'your-api-key',
  baseURL: 'https://your-domain.com/api'
});

const quizzes = await client.quizzes.getBySubject('subject-id');
```