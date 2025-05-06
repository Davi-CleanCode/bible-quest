import React, { useState } from 'react';
import { Trophy, Medal, Star, Award, Undo } from 'lucide-react';
import { useUser } from '../context/UserContext';

const AVATARS = [
  'warrior',
  'mag',
  'cleric',
  'ranger',
];

const achievements = [
  { id: 1, title: 'Primeira Quest', description: 'Complete sua primeira leitura da Bíblia', icon: Trophy, unlocked: true },
  { id: 2, title: 'Sequência de 7 dias', description: 'Leia a Bíblia por 7 dias consecutivos', icon: Medal, unlocked: true },
  { id: 3, title: 'Genesis Completo', description: 'Termine o livro inteiro de Gênesis', icon: Award, unlocked: false },
  { id: 4, title: 'Explorador do Novo Testamento', description: 'Leia pelo menos um capítulo de cada Evangelho', icon: Star, unlocked: false },
];

const CharacterPage: React.FC = () => {
  const { user, updateUser, logout } = useUser();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [avatar, setAvatar] = useState(user?.avatar || 'warrior');

  if (!user) {
    return null;
  }

  const handleSave = () => {
    updateUser({ name, avatar });
    setEditMode(false);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
      logout();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-secondary-800">
          Character Sheet
        </h1>
        <p className="text-neutral-600 mt-2">
          Manage your hero and view achievements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            {editMode ? (
              <div>
                <h2 className="font-heading text-xl text-secondary-800 mb-4">
                  Edit Character
                </h2>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Hero Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input w-full"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Choose Avatar
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {AVATARS.map((avatarOption) => (
                      <div
                        key={avatarOption}
                        onClick={() => setAvatar(avatarOption)}
                        className={`
                          flex flex-col items-center p-3 rounded-md cursor-pointer border
                          ${avatar === avatarOption ? 'border-primary-500 bg-primary-50' : 'border-neutral-200'}
                        `}
                      >
                        <div className="h-16 w-16 rounded-full bg-secondary-100 flex items-center justify-center">
                          <span className="text-2xl">🧙</span>
                        </div>
                        <span className="mt-2 capitalize text-sm">{avatarOption}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => setEditMode(false)}
                    className="btn bg-neutral-200 text-neutral-800 hover:bg-neutral-300"
                  >
                    Cancel
                  </button>
                  <button onClick={handleSave} className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🧙</span>
                </div>
                <h2 className="font-heading text-xl font-bold text-secondary-800">
                  {user.name}
                </h2>
                <p className="text-neutral-600 text-sm mt-1 capitalize">
                  Level {user.level} {user.avatar}
                </p>

                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-neutral-600">Experience</span>
                      <span className="font-medium">{user.experience} / {user.level * 100}</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div
                        className="bg-secondary-500 h-2 rounded-full"
                        style={{ width: `${(user.experience % 100) / 100 * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-neutral-600">Daily Streak</span>
                      <span className="font-medium">{user.streak} days</span>
                    </div>
                    <div className="flex space-x-1 mt-2">
                      {Array.from({ length: 7 }, (_, i) => (
                        <div
                          key={i}
                          className={`h-2 flex-1 rounded-full ${i < (user.streak % 7) ? 'bg-primary-500' : 'bg-neutral-200'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center space-x-3">
                  <button
                    onClick={() => setEditMode(true)}
                    className="btn btn-secondary text-sm"
                  >
                    Edit Character
                  </button>
                  <button
                    onClick={handleReset}
                    className="btn bg-error-100 text-error-700 hover:bg-error-200 text-sm"
                  >
                    <Undo className="h-4 w-4 mr-1" />
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-heading text-xl text-secondary-800 mb-4">
              Achievements
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`flex items-start p-4 rounded-lg border ${achievement.unlocked
                    ? 'border-primary-200 bg-primary-50'
                    : 'border-neutral-200 bg-neutral-50 opacity-60'
                    }`}
                >
                  <div className={`rounded-full p-3 mr-4 ${achievement.unlocked
                    ? 'bg-primary-100 text-primary-600'
                    : 'bg-neutral-200 text-neutral-400'
                    }`}>
                    <achievement.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-800">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-1">
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.unlocked && (
                    <div className="ml-auto">
                      <div className="badge badge-primary">Unlocked</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="font-heading text-xl text-secondary-800 mb-4">
                Stats
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <h3 className="text-sm font-medium text-neutral-700">Longest Streak</h3>
                  <p className="text-2xl font-bold text-secondary-800 mt-1">{user.streak} days</p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <h3 className="text-sm font-medium text-neutral-700">Chapters Read</h3>
                  <p className="text-2xl font-bold text-secondary-800 mt-1">{user.chaptersCompleted}</p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <h3 className="text-sm font-medium text-neutral-700">Books Completed</h3>
                  <p className="text-2xl font-bold text-secondary-800 mt-1">0 / 66</p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <h3 className="text-sm font-medium text-neutral-700">Total Experience</h3>
                  <p className="text-2xl font-bold text-secondary-800 mt-1">{user.experience} XP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;