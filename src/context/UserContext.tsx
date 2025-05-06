import React, { createContext, useContext, useState, useEffect } from 'react';

export type Character = {
  name: string;
  level: number;
  experience: number;
  streak: number;
  chaptersCompleted: number;
  avatar: string;
};

export type UserContextType = {
  user: Character | null;
  isLoading: boolean;
  setUser: (user: Character | null) => void;
  updateUser: (updates: Partial<Character>) => void;
  completeChapter: () => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
};

const STORAGE_KEY = 'bible_quest_user';

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
  }, [user]);

  const updateUser = (updates: Partial<Character>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  const completeChapter = () => {
    if (user) {
      const expGain = 10;
      const newExp = user.experience + expGain;
      const chaptersCompleted = user.chaptersCompleted + 1;

      const currentLevel = user.level;
      const newLevel = Math.floor(newExp / 100) + 1;

      if (newLevel > currentLevel) {
        console.log("Parabéns! Você subiu de nível!");
      }


      setUser({
        ...user,
        experience: newExp,
        level: newLevel,
        chaptersCompleted,
        streak: user.streak + 1,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, setUser, updateUser, completeChapter, logout }}>
      {children}
    </UserContext.Provider>
  );
};