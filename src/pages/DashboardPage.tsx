import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Award, TrendingUp, Zap } from 'lucide-react';
import { useUser } from '../context/UserContext';
import DailyQuest from '../components/DailyQuest';
import ProgressChart from '../components/ProgressChart';

const DashboardPage: React.FC = () => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/');
    }
  }, [user, isLoading, navigate]);

  if (isLoading || !user) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-secondary-800">
          Welcome, <span className="text-primary-600">{user.name}</span>!
        </h1>
        <p className="text-neutral-600 mt-2">
          Your spiritual journey continues today. Are you ready for new quests?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-primary-100 p-3 mr-4">
            <BookOpen className="h-6 w-6 text-primary-600" />
          </div>
          <div>
            <p className="text-sm text-neutral-500">Chapters Completed</p>
            <p className="text-2xl font-bold text-secondary-800">{user.chaptersCompleted}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-secondary-100 p-3 mr-4">
            <Award className="h-6 w-6 text-secondary-600" />
          </div>
          <div>
            <p className="text-sm text-neutral-500">Hero Level</p>
            <p className="text-2xl font-bold text-secondary-800">{user.level}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-accent-100 p-3 mr-4">
            <TrendingUp className="h-6 w-6 text-accent-600" />
          </div>
          <div>
            <p className="text-sm text-neutral-500">Experience</p>
            <p className="text-2xl font-bold text-secondary-800">{user.experience}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-warning-100 p-3 mr-4">
            <Zap className="h-6 w-6 text-warning-500" />
          </div>
          <div>
            <p className="text-sm text-neutral-500">Current Streak</p>
            <p className="text-2xl font-bold text-secondary-800">{user.streak} days</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="font-heading text-xl font-bold text-secondary-800 mb-4">
              Progress Overview
            </h2>
            <ProgressChart chaptersCompleted={user.chaptersCompleted} />
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="font-heading text-xl font-bold text-secondary-800 mb-4">
              Today's Quest
            </h2>
            <DailyQuest />
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="font-heading text-xl font-bold text-secondary-800 mb-4">
              Current Book
            </h2>
            <div className="scroll-appearance rounded-md p-4">
              <h3 className="font-heading text-lg text-primary-800">Genesis</h3>
              <div className="mt-2 mb-4 bg-neutral-800 bg-opacity-10 h-2 rounded-full">
                <div
                  className="bg-primary-500 h-2 rounded-full"
                  style={{ width: `${(3 / 50) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-neutral-700">
                3 of 50 chapters completed
              </p>
            </div>
            <button
              onClick={() => navigate('/quests/genesis')}
              className="btn btn-secondary w-full mt-4"
            >
              Continue Quest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;