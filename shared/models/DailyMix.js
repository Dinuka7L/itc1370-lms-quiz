// Daily Mix quiz generation model
const mongoose = require('mongoose');

const dailyMixSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return today;
    }
  },
  questions: [{
    questionId: String,
    quizId: String,
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject'
    },
    difficulty: String,
    marks: Number
  }],
  totalQuestions: { type: Number, default: 10 },
  totalMarks: { type: Number, default: 0 },
  isCompleted: { type: Boolean, default: false },
  score: { type: Number, default: 0 },
  percentage: { type: Number, default: 0 },
  timeSpent: { type: Number, default: 0 },
  completedAt: Date,
  settings: {
    difficulty: {
      type: String,
      enum: ['mixed', 'easy', 'medium', 'hard'],
      default: 'mixed'
    },
    subjects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject'
    }],
    questionTypes: [String]
  }
}, {
  timestamps: true
});

// Compound index for user and date
dailyMixSchema.index({ user: 1, date: 1 }, { unique: true });
dailyMixSchema.index({ user: 1, isCompleted: 1 });

module.exports = mongoose.model('DailyMix', dailyMixSchema);