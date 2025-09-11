import React from 'react';
import { resumeData } from '../data/resumeData';

const Education = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="education-grid">
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3 className="education-degree">{edu.degree}</h3>
            <div className="education-institution">{edu.institution}</div>
            <div className="education-details">
              <div>{edu.location} • {edu.duration}</div>
              <div>Grade: {edu.grade}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
