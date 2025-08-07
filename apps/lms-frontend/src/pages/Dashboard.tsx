import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  Clock, 
  Award, 
  Target,
  Shuffle,
  ChevronRight,
  Calendar
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { analyticsAPI, quizAPI } from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import StatCard from '../components/StatCard';
import SubjectCard from '../components/SubjectCard';
import RecentActivity from '../components/RecentActivity';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  // Fetch user statistics
  const { data: statsData, isLoading: statsLoading } = useQuery(
    'userStats',
    () => analyticsAPI.getUserStats(),
    {
      enabled: !!user,
      refetchOnWindowFocus: false
    }
  );

  // Fetch available quizzes
  const { data: quizzesData, isLoading: quizzesLoading } = useQuery(
    'allQuizzes',
    () => quizAPI.getQuizzesBySubject(),
    {
      enabled: !!user,
      refetchOnWindowFocus: false
    }
  );

  // Check for today's daily mix
  const { data: dailyMixData } = useQuery(
    'todayDailyMix',
    () => analyticsAPI.getDailyMix(),
    {
      enabled: !!user,
      retry: false,
      refetchOnWindowFocus: false
    }
  );

  const handleGenerateDailyMix = async () => {
    try {
      await analyticsAPI.generateDailyMix({
        totalQuestions: 10,
        difficulty: 'mixed'
      });
      navigate('/daily-mix');
    } catch (error) {
      console.error('Failed to generate daily mix:', error);
    }
  };

  const handleTakeDailyMix = () => {
    navigate('/daily-mix');
  };

  if (statsLoading || quizzesLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const stats = statsData?.stats;
  const quizzes = quizzesData?.quizzes || [];

  // Group quizzes by subject
  const subjectGroups = quizzes.reduce((acc: any, quiz: any) => {
    const subjectId = quiz.subject?._id || 'unknown';
    const subjectName = quiz.subject?.name || 'Unknown Subject';
    
    if (!acc[subjectId]) {
      acc[subjectId] = {
        id: subjectId,
        name: subjectName,
        color: quiz.subject?.color || '#3B82F6',
        icon: quiz.subject?.icon || 'BookOpen',
        quizzes: []
      };
    }
    
    acc[subjectId].quizzes.push(quiz);
    return acc;
  }, {});

  const subjects = Object.values(subjectGroups);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.firstName}! 👋
            </h1>
            <p className="text-gray-600">
              Ready to continue your learning journey? Let's see what's new today.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <div className="text-sm text-gray-500">Current Streak</div>
              <div className="text-2xl font-bold text-orange-600">
                {stats?.overview?.streakDays || 0} days 🔥
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Quizzes Taken"
          value={stats?.overview?.totalQuizzesTaken || 0}
          icon={<BookOpen className="h-6 w-6" />}
          color="blue"
          trend={+5}
        />
        <StatCard
          title="Average Score"
          value={`${(stats?.overview?.averageScore || 0).toFixed(1)}%`}
          icon={<TrendingUp className="h-6 w-6" />}
          color="green"
          trend={+2.3}
        />
        <StatCard
          title="Time Spent"
          value={`${Math.floor((stats?.overview?.totalTimeSpent || 0) / 60)}h`}
          icon={<Clock className="h-6 w-6" />}
          color="purple"
          trend={+12}
        />
        <StatCard
          title="Daily Mixes"
          value={stats?.overview?.totalDailyMixes || 0}
          icon={<Shuffle className="h-6 w-6" />}
          color="orange"
          trend={+1}
        />
      </div>

      {/* Daily Mix Section */}
      <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-full">
              <Shuffle className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Daily Quiz Mix</h2>
              <p className="text-gray-600">Challenge yourself with a personalized mix of questions</p>
            </div>
          </div>
          <Calendar className="h-8 w-8 text-purple-500" />
        </div>

        {dailyMixData?.dailyMix ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Today's mix: {dailyMixData.dailyMix.totalQuestions} questions
              </div>
              {dailyMixData.dailyMix.isCompleted && (
                <div className="flex items-center space-x-2 text-green-600">
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Completed - {dailyMixData.dailyMix.percentage.toFixed(1)}%
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={handleTakeDailyMix}
              className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              <span>{dailyMixData.dailyMix.isCompleted ? 'Review' : 'Continue'}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              No daily mix generated yet. Create one to get started!
            </div>
            <button
              onClick={handleGenerateDailyMix}
              className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              <Shuffle className="h-4 w-4" />
              <span>Generate Daily Mix</span>
            </button>
          </div>
        )}
      </div>

      {/* Subjects Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Subjects</h2>
          <button
            onClick={() => navigate('/stats')}
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <span>View All Stats</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {subjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject: any) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onClick={() => navigate(`/subject/${subject.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Subjects Available</h3>
            <p className="text-gray-600">
              Subjects and quizzes will appear here once they're added by creators.
            </p>
          </div>
        )}
      </div>

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  );
};

export default Dashboard;