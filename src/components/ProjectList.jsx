import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/v1/projects/', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                    }
                });
                setProjects(response.data);
            } catch (error) {
                setError('Ошибка при загрузке проектов');
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>Статус: {project.status === 'AC' ? 'Active' : 'Archive'}</p>
                        <p>Создан: {new Date(project.created).toLocaleString()}</p>
                        <p>Обновлен: {new Date(project.update).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;