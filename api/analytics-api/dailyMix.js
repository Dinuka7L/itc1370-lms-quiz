// Analytics API - Generate daily quiz mix
const DatabaseUtils = require('../../shared/utils/database');
const AuthUtils = require('../../shared/utils/auth');
const Quiz = require('../../shared/models/Quiz');
const DailyMix = require('../../shared/models/DailyMix');
const QuizAttempt = require('../../shared/models/QuizAttempt');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
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

    if (req.method === 'GET') {
      // Get today's daily mix
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const dailyMix = await DailyMix.findOne({
        user: decoded.id,
        date: today
      }).populate({
        path: 'questions.subject',
        select: 'name code color'
      });

      if (!dailyMix) {
        return res.status(404).json({ 
          error: 'No daily mix found for today. Generate one first.' 
        });
      }

      res.status(200).json({
        success: true,
        dailyMix
      });

    } else if (req.method === 'POST') {
      // Generate new daily mix
      const {
        totalQuestions = 10,
        difficulty = 'mixed',
        subjects = [],
        questionTypes = []
      } = req.body;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Check if daily mix already exists for today
      const existingMix = await DailyMix.findOne({
        user: decoded.id,
        date: today
      });

      if (existingMix && !req.body.regenerate) {
        return res.status(409).json({
          error: 'Daily mix already exists for today',
          dailyMix: existingMix
        });
      }

      // Get user's quiz history to avoid repetition
      const recentAttempts = await QuizAttempt.find({
        user: decoded.id,
        createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } // Last 7 days
      }).select('quiz');

      const recentQuizIds = recentAttempts.map(a => a.quiz);

      // Build query for available quizzes
      let quizQuery = {
        isActive: true,
        isPublished: true,
        _id: { $nin: recentQuizIds } // Exclude recently taken quizzes
      };

      if (subjects.length > 0) {
        quizQuery.subject = { $in: subjects };
      }

      if (difficulty !== 'mixed') {
        quizQuery.difficulty = difficulty;
      }

      // Get available quizzes
      const availableQuizzes = await Quiz.find(quizQuery)
        .populate('subject', 'name code color')
        .select('questions subject difficulty category');

      if (availableQuizzes.length === 0) {
        return res.status(404).json({
          error: 'No quizzes available for daily mix generation'
        });
      }

      // Collect all questions from available quizzes
      const allQuestions = [];
      availableQuizzes.forEach(quiz => {
        quiz.questions.forEach(question => {
          if (!questionTypes.length || questionTypes.includes(question.type)) {
            allQuestions.push({
              questionId: question.id,
              quizId: quiz.id,
              subject: quiz.subject._id,
              difficulty: question.difficulty || quiz.difficulty,
              marks: question.marks,
              type: question.type
            });
          }
        });
      });

      if (allQuestions.length < totalQuestions) {
        return res.status(400).json({
          error: `Not enough questions available. Found ${allQuestions.length}, need ${totalQuestions}`
        });
      }

      // Shuffle and select questions
      const shuffled = allQuestions.sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffled.slice(0, totalQuestions);

      // Calculate total marks
      const totalMarks = selectedQuestions.reduce((sum, q) => sum + q.marks, 0);

      // Create or update daily mix
      const dailyMixData = {
        user: decoded.id,
        date: today,
        questions: selectedQuestions,
        totalQuestions,
        totalMarks,
        settings: {
          difficulty,
          subjects,
          questionTypes
        }
      };

      let dailyMix;
      if (existingMix) {
        dailyMix = await DailyMix.findByIdAndUpdate(
          existingMix._id,
          dailyMixData,
          { new: true }
        ).populate({
          path: 'questions.subject',
          select: 'name code color'
        });
      } else {
        dailyMix = new DailyMix(dailyMixData);
        await dailyMix.save();
        await dailyMix.populate({
          path: 'questions.subject',
          select: 'name code color'
        });
      }

      res.status(201).json({
        success: true,
        message: 'Daily mix generated successfully',
        dailyMix
      });
    }

  } catch (error) {
    console.error('Error with daily mix:', error);
    
    if (error.message.includes('Invalid or expired')) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    res.status(500).json({ error: 'Internal server error' });
  }
};