// Quiz API - Create new quiz (creators only)
const DatabaseUtils = require('../../shared/utils/database');
const AuthUtils = require('../../shared/utils/auth');
const Quiz = require('../../shared/models/Quiz');
const Subject = require('../../shared/models/Subject');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
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

    // Check if user is creator or admin
    if (!['creator', 'admin'].includes(decoded.role)) {
      return res.status(403).json({ error: 'Only creators and admins can create quizzes' });
    }

    await DatabaseUtils.connect();

    const {
      title,
      description,
      subjectId,
      timeOptions,
      questions,
      category,
      difficulty,
      tags,
      settings
    } = req.body;

    // Validation
    if (!title || !description || !subjectId || !questions || questions.length === 0) {
      return res.status(400).json({ 
        error: 'Title, description, subject, and questions are required' 
      });
    }

    // Verify subject exists
    const subject = await Subject.findById(subjectId);
    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }

    // Calculate total marks
    const totalMarks = questions.reduce((sum, q) => sum + (q.marks || 0), 0);

    // Generate unique quiz ID
    const quizId = `quiz-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create quiz
    const quiz = new Quiz({
      id: quizId,
      title: title.trim(),
      description: description.trim(),
      subject: subjectId,
      timeOptions: timeOptions || [30, 45, 60],
      questions: questions.map((q, index) => ({
        ...q,
        id: q.id || `q${index + 1}`
      })),
      totalMarks,
      category: category || 'lesson',
      difficulty: difficulty || 'intermediate',
      tags: tags || [],
      settings: {
        randomizeQuestions: settings?.randomizeQuestions || false,
        showResults: settings?.showResults !== false,
        allowRetake: settings?.allowRetake !== false,
        passingScore: settings?.passingScore || 60
      },
      createdBy: decoded.id,
      isPublished: false // Start as draft
    });

    await quiz.save();

    // Update subject stats
    await Subject.findByIdAndUpdate(subjectId, {
      $inc: { 
        'stats.totalQuizzes': 1,
        'stats.totalQuestions': questions.length
      }
    });

    res.status(201).json({
      success: true,
      message: 'Quiz created successfully',
      quiz: {
        id: quiz.id,
        title: quiz.title,
        description: quiz.description,
        subject: quiz.subject,
        totalMarks: quiz.totalMarks,
        questionCount: quiz.questions.length,
        category: quiz.category,
        difficulty: quiz.difficulty,
        isPublished: quiz.isPublished
      }
    });

  } catch (error) {
    console.error('Error creating quiz:', error);
    
    if (error.message.includes('Invalid or expired')) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    if (error.code === 11000) {
      return res.status(409).json({ error: 'Quiz with this ID already exists' });
    }

    res.status(500).json({ error: 'Internal server error' });
  }
};