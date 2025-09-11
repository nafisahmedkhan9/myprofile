import React from 'react';
import { resumeData } from '../data/resumeData';

const Skills = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="section">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
