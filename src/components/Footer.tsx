import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Bible Quest</p>
            <p className="text-xs text-neutral-400 mt-1">
              Aproximando-se de Deus através do estudo diário
            </p>
          </div>
          <div className="flex items-center text-sm">
            <span>Feito com</span>
            <Heart className="h-4 w-4 mx-1 text-error-500" />
            <span>pela Palavra de Deus</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;