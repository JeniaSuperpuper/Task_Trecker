import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/users', {
                username,
                password,
                email
            });

            // Очищаем форму после успешной регистрации
            setUsername('');
            setPassword('');
            setEmail('');
            setError('');

            // Перенаправляем пользователя на страницу входа или на главную страницу
            window.location.href = '/login';
        } catch (error) {
            setError('Ошибка при регистрации');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Имя пользователя:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default RegisterForm;