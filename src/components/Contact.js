import React from 'react';
import { resumeData } from '../data/resumeData';

const Contact = () => {
  const { personal } = resumeData;

  return (
    <section id="contact" className="section contact">
      <h2>Get In Touch</h2>
      <p style={{fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9}}>
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
      </p>
      
      <div className="contact-info">
        <div className="contact-item">
          <span>📧</span>
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
        </div>
        
        <div className="contact-item">
          <span>📱</span>
          <a href={`tel:${personal.phone}`}>{personal.phone}</a>
        </div>
        
        <div className="contact-item">
          <span>💼</span>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
        
        <div className="contact-item">
          <span>🐙</span>
          <a href={personal.github} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
        
        <div className="contact-item">
          <span>📍</span>
          <span>{personal.location}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
