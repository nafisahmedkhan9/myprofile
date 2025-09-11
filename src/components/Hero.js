import React from 'react';
import { resumeData } from '../data/resumeData';

const Hero = () => {
  const { personal, summary } = resumeData;

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-image-container">
          <img 
            src="/profile-photo.jpg" 
            alt="Nafis Ahmed Khan - Software Engineer"
            className="profile-image"
          />
        </div>
        <h1>{personal.name}</h1>
        <h2>{personal.title}</h2>
        <p>{summary}</p>
        <div className="social-links">
          <a href={`mailto:${personal.email}`} className="social-link">
            📧 Email
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            💼 LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-link">
            🐙 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
