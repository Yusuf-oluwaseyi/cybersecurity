import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/projects')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading projects:', err);
                setLoading(false);
            });
    }, []);

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="project-list">
                    {projects.map((project, index) => (
                        <a href={project.link} key={index} className="project-item">
                            <div className="project-title">{project.title.replace(/_/g, ' ')}</div>
                            <div className="project-meta">
                                <div>{project.tags.join(' / ')}</div>
                                <div style={{ marginTop: '10px', maxWidth: '300px' }}>{project.description}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
