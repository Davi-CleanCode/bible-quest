import React, { useState } from 'react';
import { CheckCircle, } from 'lucide-react';
import { useUser } from '../context/UserContext';

const TODAY_QUEST = {
  id: 'genesis',
  book: 'Genesis',
  chapter: 1,
  title: '',
  description: "Leia sobre como o pecado entrou no mundo e a promessa de redenção de Deus"
};

const DailyQuest: React.FC = () => {
  const { completeChapter } = useUser();
  const [completed, setCompleted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleComplete = () => {
    setShowConfirmation(true);
  };

  const confirmCompletion = (didComplete: boolean) => {
    setShowConfirmation(false);

    if (didComplete) {
      setCompleted(true);
      completeChapter();
    }
  };

  if (completed) {
    return (
      <div className="text-center py-4">
        <CheckCircle className="h-12 w-12 text-success-500 mx-auto mb-2" />
        <h3 className="text-lg font-medium text-neutral-800">Quest Completa!</h3>
        <p className="text-sm text-neutral-600 mt-1">
          Ótimo trabalho! Volte amanhã para uma nova missão.
        </p>
        <div className="mt-4 bg-success-50 text-success-800 text-sm p-3 rounded-md">
          <p>+10 XP merecido</p>
          <p>
            Sequência diária aumentada</p>
        </div>
      </div>
    );
  }

  if (showConfirmation) {
    return (
      <div className="py-2">
        <p className="text-center text-neutral-800 font-medium mb-4">
          Você terminou de ler ?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => confirmCompletion(true)}
            className="btn btn-primary px-5 py-2"
          >
            Yes, eu li!
          </button>
          <button
            onClick={() => confirmCompletion(false)}
            className="btn bg-neutral-200 text-neutral-800 hover:bg-neutral-300 px-5 py-2"
          >
            ainda não 😔
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="scroll-appearance rounded-md p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-heading text-lg text-primary-800">
            {TODAY_QUEST.book} {TODAY_QUEST.chapter}
          </h3>
          <p className="text-sm font-medium text-secondary-700 mt-1">
            {TODAY_QUEST.title}
          </p>
        </div>
        <div className="badge badge-primary">Diaria</div>
      </div>
      <p className="text-sm text-neutral-700 mt-3 mb-4">
        {TODAY_QUEST.description}
      </p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-neutral-500">Recompensas: +10 XP</span>
        <button
          onClick={handleComplete}
          className="btn btn-accent text-sm px-4 py-2"
        >
          Marcar como lido
        </button>
      </div>
    </div>
  );
};

export default DailyQuest;