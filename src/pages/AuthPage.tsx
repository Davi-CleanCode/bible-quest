import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { Character } from '../context/UserContext';

interface AuthPageProps {
    onAuth: (user: Character) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuth }) => {
    const [showRegister, setShowRegister] = useState(false);

    // Cria um personagem padrão ao autenticar
    const handleAuth = async (user: { id: number; username: string }) => {
        // Busca personagens do usuário
        const res = await fetch(`http://localhost:4000/api/characters/${user.id}`);
        const characters = await res.json();
        let character: Character;
        if (Array.isArray(characters) && characters.length > 0) {
            // Usa o primeiro personagem existente
            character = {
                name: characters[0].name,
                level: characters[0].level,
                experience: characters[0].experience,
                streak: 0,
                chaptersCompleted: 0,
                avatar: 'warrior',
            };
        } else {
            // Cria personagem padrão
            const createRes = await fetch('http://localhost:4000/api/character', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: user.id, name: user.username })
            });
            const newChar = await createRes.json();
            character = {
                name: newChar.name,
                level: newChar.level,
                experience: newChar.experience,
                streak: 0,
                chaptersCompleted: 0,
                avatar: 'warrior',
            };
        }
        onAuth(character);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                {showRegister ? (
                    <>
                        <RegisterForm onRegister={handleAuth} />
                        <p className="mt-4 text-sm text-center">
                            Já tem conta?{' '}
                            <button className="text-blue-600 underline" onClick={() => setShowRegister(false)}>
                                Entrar
                            </button>
                        </p>
                    </>
                ) : (
                    <>
                        <LoginForm onLogin={handleAuth} />
                        <p className="mt-4 text-sm text-center">
                            Não tem conta?{' '}
                            <button className="text-blue-600 underline" onClick={() => setShowRegister(true)}>
                                Registrar
                            </button>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthPage;
