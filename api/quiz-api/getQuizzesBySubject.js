// Quiz API - Get quizzes by subject
const DatabaseUtils = require('../../shared/utils/database');
const AuthUtils = require('../../shared/utils/auth');
const Quiz = require('../../shared/models/Quiz');
const Subject = require('../../shared/models/Subject');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Authenticate user
    const authHeader = req.headers['authorization'];
    const token = AuthUtils.extractTokenFromHeader(authHeader);

    if (!token) {
      return res.status(401).json({ error: 'Access token required' });
    }

    const decoded = AuthUtils.verifyAccessToken(token);
    await DatabaseUtils.connect();

    const { subjectId, category, difficulty } = req.query;

    // Build query
    let query = {
      isActive: true,
      isPublished: true
    };

    if (subjectId) {
      query.subject = subjectId;
    }

    if (category) {
      query.category = category;
    }

    if (difficulty) {
      query.difficulty = difficulty;
    }

    // Get quizzes with subject information
    const quizzes = await Quiz.find(query)
      .populate('subject', 'name code color icon')
      .populate('createdBy', 'firstName lastName')
      .select('-questions.answer -questions.rationale -questions.idealKeywords')
      .sort({ createdAt: -1 });

    // Transform data for frontend
    const quizSummaries = quizzes.map(quiz => ({
      id: quiz.id,
      title: quiz.title,
      description: quiz.description,
      subject: quiz.subject,
      timeOptions: quiz.timeOptions,
      totalMarks: quiz.totalMarks,
      weight: quiz.weight,
      category: quiz.category,
      difficulty: quiz.difficulty,
      questionCount: quiz.questions.length,
      tags: quiz.tags,
      createdBy: quiz.createdBy,
      stats: quiz.stats,
      settings: quiz.settings
    }));

    res.status(200).json({
      success: true,
      quizzes: quizSummaries,
      total: quizSummaries.length
    });

  } catch (error) {
    console.error('Error fetching quizzes:', error);
    
    if (error.message.includes('Invalid or expired')) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    res.status(500).json({ error: 'Internal server error' });
  }
};