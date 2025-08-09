import React, { useState } from 'react';

interface RegisterFormProps {
    onRegister: (user: { id: number; username: string }) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Erro ao registrar');
            onRegister(data);
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Erro desconhecido');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
            <h2 className="text-xl font-bold">Registrar</h2>
            <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="input input-bordered w-full"
                required
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="input input-bordered w-full"
                required
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                {loading ? 'Registrando...' : 'Registrar'}
            </button>
        </form>
    );
};

export default RegisterForm;
