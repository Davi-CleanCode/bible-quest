import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, BookOpen } from 'lucide-react';
import { bibleBooks } from '../data/bibleData';
import { useUser } from '../context/UserContext';

const QuestDetailPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [activeChapter, setActiveChapter] = useState(1);
  const { completeChapter } = useUser();
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  
  const book = bibleBooks.find(b => b.id === bookId);
  
  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="font-heading text-2xl text-neutral-800 mb-4">
            Quest Not Found
          </h1>
          <button 
            onClick={() => navigate('/quests')} 
            className="btn btn-primary"
          >
            Back to Quests
          </button>
        </div>
      </div>
    );
  }

  const handleComplete = (chapter: number) => {
    completeChapter();
    setCompletedChapters([...completedChapters, chapter]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => navigate('/quests')}
        className="flex items-center text-secondary-700 hover:text-secondary-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to all quests
      </button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-secondary-700 text-white p-6">
          <h1 className="font-heading text-3xl font-bold">
            {book.name}
          </h1>
          <p className="mt-2 text-secondary-200">
            {book.description}
          </p>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h2 className="font-heading text-xl text-secondary-800 mb-3">
              Book Overview
            </h2>
            <p className="text-neutral-600">
              {book.overview || `The book of ${book.name} contains ${book.chapters} chapters. Select a chapter below to begin your quest.`}
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="font-heading text-xl text-secondary-800 mb-3">
              Your Progress
            </h2>
            <div className="w-full bg-neutral-200 rounded-full h-2.5">
              <div 
                className="bg-primary-500 h-2.5 rounded-full"
                style={{ width: `${(completedChapters.length / book.chapters) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-neutral-600">
              <span>{completedChapters.length} of {book.chapters} chapters completed</span>
              <span>{Math.round((completedChapters.length / book.chapters) * 100)}%</span>
            </div>
          </div>
          
          <div>
            <h2 className="font-heading text-xl text-secondary-800 mb-4">
              Chapters
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {Array.from({ length: book.chapters }, (_, i) => i + 1).map(chapter => (
                <div 
                  key={chapter}
                  onClick={() => setActiveChapter(chapter)}
                  className={`
                    cursor-pointer rounded-md p-3 text-center transition
                    ${activeChapter === chapter ? 'bg-primary-500 text-white' : 
                      completedChapters.includes(chapter) ? 'bg-success-100 text-success-700' : 
                      'bg-white border border-neutral-200 hover:bg-neutral-50'}
                  `}
                >
                  <div className="flex flex-col items-center">
                    {completedChapters.includes(chapter) && (
                      <CheckCircle className="h-4 w-4 mb-1" />
                    )}
                    <span>{chapter}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {activeChapter && (
            <div className="mt-8 scroll-appearance rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-heading text-xl text-primary-800">
                  Chapter {activeChapter}
                </h3>
                {completedChapters.includes(activeChapter) ? (
                  <span className="badge badge-success">Completed</span>
                ) : (
                  <button
                    onClick={() => handleComplete(activeChapter)}
                    className="btn btn-primary text-sm"
                  >
                    Mark as Read
                  </button>
                )}
              </div>
              
              <div className="flex items-center justify-center py-8 border-2 border-dashed border-neutral-300 rounded-md">
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-secondary-400 mx-auto mb-3" />
                  <p className="text-neutral-600">
                    Open your Bible to {book.name} {activeChapter} to complete this quest
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium text-secondary-700 mb-2">Quest Notes</h4>
                <p className="text-sm text-neutral-600">
                  As you read this chapter, reflect on how it connects to your life and what lessons you can apply today.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestDetailPage;