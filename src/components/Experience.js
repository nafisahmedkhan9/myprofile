import React from 'react';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  const { experience } = resumeData;

  return (
    <section id="experience" className="section experience">
      <h2>Work Experience</h2>
      <div className="experience-timeline">
        {experience.map((job) => (
          <div key={job.id} className="experience-item">
            <div className="experience-header">
              <h3 className="experience-title">{job.title}</h3>
              <div className="experience-company">{job.company} • {job.location}</div>
              <div className="experience-duration">{job.duration}</div>
            </div>
            <ul className="experience-responsibilities">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
