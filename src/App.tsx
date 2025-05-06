import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import QuestsPage from './pages/QuestsPage';
import QuestDetailPage from './pages/QuestDetailPage';
import CharacterPage from './pages/CharacterPage';
import NotFoundPage from './pages/NotFoundPage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="quests" element={<QuestsPage />} />
          <Route path="quests/:bookId" element={<QuestDetailPage />} />
          <Route path="character" element={<CharacterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;