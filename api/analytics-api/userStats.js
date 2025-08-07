// Analytics API - Get user statistics
const DatabaseUtils = require('../../shared/utils/database');
const AuthUtils = require('../../shared/utils/auth');
const User = require('../../shared/models/User');
const QuizAttempt = require('../../shared/models/QuizAttempt');
const DailyMix = require('../../shared/models/DailyMix');

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

    const { userId } = req.query;
    const targetUserId = userId || decoded.id;

    // Check if user can access these stats
    if (targetUserId !== decoded.id && decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Get user data
    const user = await User.findById(targetUserId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Get quiz attempts
    const attempts = await QuizAttempt.find({ 
      user: targetUserId, 
      isCompleted: true 
    })
    .populate('quiz', 'title subject category')
    .populate({
      path: 'quiz',
      populate: {
        path: 'subject',
        select: 'name code color'
      }
    })
    .sort({ createdAt: -1 });

    // Get daily mix attempts
    const dailyMixes = await DailyMix.find({ 
      user: targetUserId, 
      isCompleted: true 
    }).sort({ date: -1 });

    // Calculate statistics
    const stats = {
      overview: {
        totalQuizzesTaken: attempts.length,
        totalDailyMixes: dailyMixes.length,
        totalTimeSpent: user.stats.totalTimeSpent,
        averageScore: user.stats.averageScore,
        streakDays: user.stats.streakDays,
        lastActiveDate: user.stats.lastActiveDate
      },
      performance: {
        byCategory: {},
        bySubject: {},
        recentScores: attempts.slice(0, 10).map(a => ({
          date: a.createdAt,
          score: a.percentage,
          quizTitle: a.quiz?.title,
          subject: a.quiz?.subject?.name
        }))
      },
      progress: {
        weeklyActivity: [],
        monthlyTrends: [],
        improvementRate: 0
      }
    };

    // Calculate category performance
    attempts.forEach(attempt => {
      const category = attempt.quiz?.category || 'unknown';
      if (!stats.performance.byCategory[category]) {
        stats.performance.byCategory[category] = {
          count: 0,
          totalScore: 0,
          averageScore: 0
        };
      }
      stats.performance.byCategory[category].count++;
      stats.performance.byCategory[category].totalScore += attempt.percentage;
      stats.performance.byCategory[category].averageScore = 
        stats.performance.byCategory[category].totalScore / 
        stats.performance.byCategory[category].count;
    });

    // Calculate subject performance
    attempts.forEach(attempt => {
      const subjectName = attempt.quiz?.subject?.name || 'Unknown';
      if (!stats.performance.bySubject[subjectName]) {
        stats.performance.bySubject[subjectName] = {
          count: 0,
          totalScore: 0,
          averageScore: 0,
          color: attempt.quiz?.subject?.color || '#3B82F6'
        };
      }
      stats.performance.bySubject[subjectName].count++;
      stats.performance.bySubject[subjectName].totalScore += attempt.percentage;
      stats.performance.bySubject[subjectName].averageScore = 
        stats.performance.bySubject[subjectName].totalScore / 
        stats.performance.bySubject[subjectName].count;
    });

    // Calculate weekly activity (last 7 days)
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);
      
      const dayAttempts = attempts.filter(a => 
        a.createdAt >= date && a.createdAt < nextDate
      );
      
      stats.progress.weeklyActivity.push({
        date: date.toISOString().split('T')[0],
        quizzes: dayAttempts.length,
        averageScore: dayAttempts.length > 0 
          ? dayAttempts.reduce((sum, a) => sum + a.percentage, 0) / dayAttempts.length 
          : 0
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      },
      stats
    });

  } catch (error) {
    console.error('Error fetching user stats:', error);
    
    if (error.message.includes('Invalid or expired')) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    res.status(500).json({ error: 'Internal server error' });
  }
};