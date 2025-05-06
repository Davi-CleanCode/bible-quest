import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Scroll, User, Home, BookOpen } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-secondary-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <Scroll className="h-8 w-8 text-primary-500 mr-2" />
              <span className="font-heading text-xl font-bold">Bible Quest</span>
            </NavLink>
            {user ? (
              <NavLink to="/dashboard">dashboard</NavLink>
            ) : (
              <NavLink to="/login">Entrar</NavLink>
            )}

          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-secondary-800 text-primary-400' : 'hover:bg-secondary-600'}`
              }
            >
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Dashboard
              </div>
            </NavLink>
            <NavLink
              to="/quests"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-secondary-800 text-primary-400' : 'hover:bg-secondary-600'}`
              }
            >
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                Quests
              </div>
            </NavLink>
            <NavLink
              to="/character"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-secondary-800 text-primary-400' : 'hover:bg-secondary-600'}`
              }
            >
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                Personagem
              </div>
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-secondary-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary-700">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-secondary-800 text-primary-400' : 'hover:bg-secondary-600'}`
              }
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Dashboard
              </div>
            </NavLink>
            <NavLink
              to="/quests"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-secondary-800 text-primary-400' : 'hover:bg-secondary-600'}`
              }
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Quests
              </div>
            </NavLink>
            <NavLink
              to="/character"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-secondary-800 text-primary-400' : 'hover:bg-secondary-600'}`
              }
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Personagem
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;