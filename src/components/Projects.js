import React from 'react';
import { resumeData } from '../data/resumeData';

const Projects = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="section projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              {project.features && (
                <ul className="project-features">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}

              {project.clients && (
                <div>
                  <h4 style={{marginBottom: '0.5rem', color: '#334155'}}>Key Clients:</h4>
                  <p style={{fontSize: '0.9rem', color: '#475569', lineHeight: '1.5'}}>
                    {project.clients.join(', ')}
                  </p>
                </div>
              )}

              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  🔗 View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
