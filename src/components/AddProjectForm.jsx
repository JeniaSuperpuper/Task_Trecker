import React, { useState } from 'react';
import axios from 'axios';

const AddProjectForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('AC');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/projects/', {
                title,
                description,
                status
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            // Очищаем форму после успешного добавления
            setTitle('');
            setDescription('');
            setStatus('AC');
            setError('');

            // Обновляем список проектов
            window.location.reload();
        } catch (error) {
            setError('Ошибка при добавлении проекта');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Название проекта:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Описание:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="status">Статус:</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="AC">Active</option>
                    <option value="AR">Archive</option>
                </select>
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Добавить проект</button>
        </form>
    );
};

export default AddProjectForm;