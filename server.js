const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import API routes
const authLogin = require('./api/auth-api/login');
const authRegister = require('./api/auth-api/register');
const authVerify = require('./api/auth-api/verify');
const getQuiz = require('./api/getQuiz');
const getQuizzes = require('./api/getQuizzes');
const submitQuiz = require('./api/submitQuiz');
const userStats = require('./api/analytics-api/userStats');
const dailyMix = require('./api/analytics-api/dailyMix');
const createQuiz = require('./api/quiz-api/createQuiz');
const getQuizzesBySubject = require('./api/quiz-api/getQuizzesBySubject');

// API Routes
app.use('/api/auth/login', (req, res) => authLogin(req, res));
app.use('/api/auth/register', (req, res) => authRegister(req, res));
app.use('/api/auth/verify', (req, res) => authVerify(req, res));
app.use('/api/getQuiz', (req, res) => getQuiz.default(req, res));
app.use('/api/getQuizzes', (req, res) => getQuizzes.default(req, res));
app.use('/api/submitQuiz', (req, res) => submitQuiz.default(req, res));
app.use('/api/analytics/userStats', (req, res) => userStats(req, res));
app.use('/api/analytics/dailyMix', (req, res) => dailyMix(req, res));
app.use('/api/quiz/create', (req, res) => createQuiz(req, res));
app.use('/api/quiz/subject', (req, res) => getQuizzesBySubject(req, res));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;