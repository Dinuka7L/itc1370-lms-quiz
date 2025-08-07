// Shared User model for all applications
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['student', 'creator', 'admin'],
    default: 'student'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  profilePicture: {
    type: String,
    default: null
  },
  preferences: {
    theme: {
      type: String,
      enum: ['light', 'dark', 'system'],
      default: 'system'
    },
    notifications: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: true }
    },
    language: {
      type: String,
      default: 'en'
    }
  },
  stats: {
    totalQuizzesTaken: { type: Number, default: 0 },
    totalTimeSpent: { type: Number, default: 0 }, // in minutes
    averageScore: { type: Number, default: 0 },
    streakDays: { type: Number, default: 0 },
    lastActiveDate: { type: Date, default: Date.now }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Indexes for performance
userSchema.index({ email: 1 });
userSchema.index({ role: 1 });
userSchema.index({ isActive: 1 });

// Virtual for full name
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Method to update user stats
userSchema.methods.updateStats = function(quizScore, timeSpent) {
  this.stats.totalQuizzesTaken += 1;
  this.stats.totalTimeSpent += timeSpent;
  
  // Calculate new average score
  const totalScore = (this.stats.averageScore * (this.stats.totalQuizzesTaken - 1)) + quizScore;
  this.stats.averageScore = totalScore / this.stats.totalQuizzesTaken;
  
  this.stats.lastActiveDate = new Date();
  return this.save();
};

module.exports = mongoose.model('User', userSchema);