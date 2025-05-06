import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-4xl text-secondary-800 mb-4">
          Quest Not Found
        </h1>
        <p className="text-neutral-600 mb-8">
          It seems like you've wandered off the map, brave hero. This path leads nowhere.
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary inline-flex items-center"
        >
          <Home className="h-5 w-5 mr-2" />
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;