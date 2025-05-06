import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, CheckCircle } from 'lucide-react';
import { useUser } from '../context/UserContext';

const AVATARS = [
  'warrior',
  'mage',
  'cleric',
  'ranger',
];

const CharacterCreation: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('warrior');
  const [step, setStep] = useState(1);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1 && name.trim()) {
      setStep(2);
      return;
    }

    if (step === 2) {
      setUser({
        name: name.trim(),
        level: 1,
        experience: 0,
        streak: 0,
        chaptersCompleted: 0,
        avatar: selectedAvatar,
      });

      navigate('/dashboard');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden pixel-border">
        <div className="bg-secondary-700 text-white py-4 px-6">
          <h2 className="font-heading text-2xl">Crie seu Heroi</h2>
          <div className="flex mt-2">
            <div className={`h-2 ${step >= 1 ? 'bg-primary-500' : 'bg-gray-300'} flex-1 mr-1 rounded-full`}></div>
            <div className={`h-2 ${step >= 2 ? 'bg-primary-500' : 'bg-gray-300'} flex-1 ml-1 rounded-full`}></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {step === 1 ? (
            <>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Nome do Heroi
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input w-full"
                  placeholder="Enter your hero name"
                  required
                  autoFocus
                />
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn bg-neutral-200 text-neutral-800 hover:bg-neutral-300"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={!name.trim()}
                  className="btn btn-primary"
                >
                  Proximo
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-neutral-800 mb-3">Escolha seu heroi</h3>
                <div className="grid grid-cols-2 gap-4">
                  {AVATARS.map((avatar) => (
                    <div
                      key={avatar}
                      onClick={() => setSelectedAvatar(avatar)}
                      className={`
                        flex flex-col items-center p-3 rounded-md cursor-pointer border-2
                        ${selectedAvatar === avatar ? 'border-primary-500 bg-primary-50' : 'border-neutral-200 hover:bg-neutral-50'}
                      `}
                    >
                      <div className="h-20 w-20 flex items-center justify-center bg-secondary-100 rounded-full mb-2">
                        <User className="h-12 w-12 text-secondary-600" />
                      </div>
                      <span className="capitalize font-medium">{avatar}</span>
                      {selectedAvatar === avatar && (
                        <CheckCircle className="absolute top-2 right-2 h-5 w-5 text-primary-500" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn bg-neutral-200 text-neutral-800 hover:bg-neutral-300"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Comece sua jornada
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default CharacterCreation;