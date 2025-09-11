import React from 'react';
import { resumeData } from '../data/resumeData';

const About = () => {
  const { summary, personal } = resumeData;

  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>{summary}</p>
        <br />
        <p>
          Based in {personal.location}, I'm passionate about creating innovative solutions 
          that make a real impact. With extensive experience in full-stack development, 
          AI integration, and chatbot development, I bring a unique blend of technical 
          expertise and client-focused approach to every project.
        </p>
        <br />
        <p>
          My journey in software engineering has taken me through various domains - from 
          developing AI-powered applications to creating chatbots for major clients across 
          different industries. I believe in continuous learning and staying updated with 
          the latest technologies to deliver cutting-edge solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
