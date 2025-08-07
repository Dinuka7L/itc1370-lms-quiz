// Quiz attempt tracking model
const mongoose = require('mongoose');

const questionResultSchema = new mongoose.Schema({
  questionId: { type: String, required: true },
  userAnswer: mongoose.Schema.Types.Mixed,
  score: { type: Number, required: true },
  maxScore: { type: Number, required: true },
  isCorrect: { type: Boolean, required: true },
  timeSpent: { type: Number, default: 0 } // seconds spent on this question
});

const quizAttemptSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true
  },
  quizId: { type: String, required: true }, // Keep for compatibility
  answers: { type: Map, of: mongoose.Schema.Types.Mixed },
  results: [questionResultSchema],
  startTime: { type: Date, required: true },
  endTime: Date,
  timeLimit: { type: Number, required: true }, // in minutes
  timeSpent: { type: Number, default: 0 }, // actual time spent in seconds
  score: { type: Number, default: 0 },
  percentage: { type: Number, default: 0 },
  isCompleted: { type: Boolean, default: false },
  isSubmitted: { type: Boolean, default: false },
  isAutoSubmitted: { type: Boolean, default: false },
  isUnlimited: { type: Boolean, default: false },
  isPaused: { type: Boolean, default: false },
  pausedTime: Date,
  currentQuestionIndex: { type: Number, default: 0 },
  questionStatuses: {
    type: Map,
    of: {
      answered: { type: Boolean, default: false },
      flagged: { type: Boolean, default: false },
      visited: { type: Boolean, default: false }
    }
  },
  metadata: {
    userAgent: String,
    ipAddress: String,
    deviceType: String,
    browserInfo: String
  }
}, {
  timestamps: true
});

// Indexes for performance
quizAttemptSchema.index({ user: 1, quiz: 1 });
quizAttemptSchema.index({ user: 1, isCompleted: 1 });
quizAttemptSchema.index({ quiz: 1, isCompleted: 1 });
quizAttemptSchema.index({ createdAt: -1 });

// Method to calculate final score
quizAttemptSchema.methods.calculateScore = function() {
  if (!this.results || this.results.length === 0) return 0;
  
  const totalScore = this.results.reduce((sum, result) => sum + result.score, 0);
  const totalMaxScore = this.results.reduce((sum, result) => sum + result.maxScore, 0);
  
  this.score = totalScore;
  this.percentage = totalMaxScore > 0 ? (totalScore / totalMaxScore) * 100 : 0;
  
  return this.percentage;
};

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);