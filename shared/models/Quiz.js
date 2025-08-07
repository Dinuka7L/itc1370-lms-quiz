// Enhanced Quiz model with subject relationship
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  type: {
    type: String,
    enum: ['multipleChoice', 'multiSelect', 'fillInBlank', 'essay', 'dragDrop', 'matching', 'dropdown'],
    required: true
  },
  question: { type: String, required: true },
  image: String,
  imageAlt: String,
  options: [String],
  answer: mongoose.Schema.Types.Mixed,
  rationale: String,
  idealKeywords: [String],
  marks: { type: Number, required: true },
  dragItems: [mongoose.Schema.Types.Mixed],
  matchPairs: [mongoose.Schema.Types.Mixed],
  dropdownBlanks: [mongoose.Schema.Types.Mixed],
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  tags: [String]
});

const quizSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true
  },
  timeOptions: [Number],
  questions: [questionSchema],
  totalMarks: { type: Number, required: true },
  weight: { type: Number, default: 0 },
  category: {
    type: String,
    enum: ['lesson', 'mockFinal', 'practice', 'assessment'],
    required: true
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'intermediate'
  },
  isActive: { type: Boolean, default: true },
  isPublished: { type: Boolean, default: false },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tags: [String],
  settings: {
    randomizeQuestions: { type: Boolean, default: false },
    showResults: { type: Boolean, default: true },
    allowRetake: { type: Boolean, default: true },
    passingScore: { type: Number, default: 60 }
  },
  stats: {
    totalAttempts: { type: Number, default: 0 },
    averageScore: { type: Number, default: 0 },
    averageTime: { type: Number, default: 0 },
    completionRate: { type: Number, default: 0 }
  }
}, {
  timestamps: true
});

// Indexes
quizSchema.index({ id: 1 });
quizSchema.index({ subject: 1 });
quizSchema.index({ category: 1 });
quizSchema.index({ isActive: 1, isPublished: 1 });
quizSchema.index({ createdBy: 1 });

// Virtual for question count
quizSchema.virtual('questionCount').get(function() {
  return this.questions.length;
});

module.exports = mongoose.model('Quiz', quizSchema);