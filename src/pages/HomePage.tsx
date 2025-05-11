import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scroll, ChevronRight } from 'lucide-react';
import { useUser } from '../context/UserContext';
import CharacterCreation from '../components/CharacterCreation';

const HomePage: React.FC = () => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  const [showCreation, setShowCreation] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (user) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-secondary-50 to-primary-50">
      {showCreation ? (
        <CharacterCreation onClose={() => setShowCreation(false)} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Scroll className="h-16 w-16 text-primary-500 animate-floating" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-800 mb-6">
              Bible Quest
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-3xl mx-auto">
              Embarque em uma aventura espiritual através da Palavra de Deus, onde estudar a Bíblia se torna uma jornada épica.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
              <button
                onClick={() => setShowCreation(true)}
                className="btn btn-primary text-lg px-8 py-3 flex items-center justify-center mx-auto md:mx-0"
              >
                Comece sua jornada
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary-500">
              <h3 className="font-heading text-xl font-bold text-secondary-800 mb-3">Missões Diárias</h3>
              <p className="text-neutral-600">Complete missões de leitura da Bíblia diariamente para ganhar recompensas e melhorar o nível do seu personagem.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-secondary-500">
              <h3 className="font-heading text-xl font-bold text-secondary-800 mb-3">Crescimento do personagem</h3>
              <p className="text-neutral-600">Observe seu personagem crescer em fé e sabedoria à medida que você avança nas Escrituras.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-accent-500">
              <h3 className="font-heading text-xl font-bold text-secondary-800 mb-3">Acompanhe o progresso</h3>
              <p className="text-neutral-600">Veja sua jornada pela Bíblia com belas visualizações do seu progresso.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;