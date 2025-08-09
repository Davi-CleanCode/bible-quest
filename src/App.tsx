import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import QuestsPage from './pages/QuestsPage';
import QuestDetailPage from './pages/QuestDetailPage';
import CharacterPage from './pages/CharacterPage';
import NotFoundPage from './pages/NotFoundPage';
import AuthPage from './pages/AuthPage';
import { UserProvider, useUser, Character } from './context/UserContext';

// Wrapper para proteger rotas privadas
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useUser();
  if (isLoading) return null;
  return user ? <>{children}</> : <Navigate to="/auth" replace />;
};

function AppRoutes() {
  const { setUser } = useUser();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage onAuth={(user: Character) => setUser(user)} />} />
        <Route path="dashboard" element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        } />
        <Route path="quests" element={
          <PrivateRoute>
            <QuestsPage />
          </PrivateRoute>
        } />
        <Route path="quests/:bookId" element={
          <PrivateRoute>
            <QuestDetailPage />
          </PrivateRoute>
        } />
        <Route path="character" element={
          <PrivateRoute>
            <CharacterPage />
          </PrivateRoute>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;