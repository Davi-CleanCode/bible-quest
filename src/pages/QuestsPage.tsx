import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book } from 'lucide-react';
import { bibleBooks } from '../data/bibleData';

const QuestsPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleBookSelect = (bookId: string) => {
    navigate(`/quests/${bookId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-secondary-800">
          Bible Quests
        </h1>
        <p className="text-neutral-600 mt-2">
          Choose a book of the Bible to begin your journey
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-heading text-2xl font-medium text-secondary-700 mb-4">
          Old Testament
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bibleBooks.filter(book => book.testament === 'antigo').map(book => (
            <div 
              key={book.id}
              onClick={() => handleBookSelect(book.id)}
              className="quest-card"
            >
              <div className="flex items-center mb-2">
                <Book className="h-5 w-5 text-primary-600 mr-2" />
                <h3 className="font-heading text-lg font-medium text-secondary-800">
                  {book.name}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 mb-3">
                {book.description}
              </p>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-500">
                  {book.chapters} chapters
                </span>
                <span className={`badge ${book.difficulty === 'facil' ? 'badge-success' : book.difficulty === 'medio' ? 'badge-warning' : 'badge-error'}`}>
                  {book.difficulty === 'facil' ? 'Fácil' : book.difficulty === 'medio' ? 'Médio' : 'Difícil'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-medium text-secondary-700 mb-4">
          New Testament
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bibleBooks.filter(book => book.testament === 'novo').map(book => (
            <div 
              key={book.id}
              onClick={() => handleBookSelect(book.id)}
              className="quest-card"
            >
              <div className="flex items-center mb-2">
                <Book className="h-5 w-5 text-secondary-600 mr-2" />
                <h3 className="font-heading text-lg font-medium text-secondary-800">
                  {book.name}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 mb-3">
                {book.description}
              </p>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-500">
                  {book.chapters} chapters
                </span>
                <span className={`badge ${book.difficulty === 'facil' ? 'badge-success' : book.difficulty === 'medio' ? 'badge-warning' : 'badge-error'}`}>
                  {book.difficulty === 'facil' ? 'Fácil' : book.difficulty === 'medio' ? 'Médio' : 'Difícil'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestsPage;