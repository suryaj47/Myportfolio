import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React.js',
    'Node.js',
    'HTML5',
    'CSS3',
    'Java',
    'Python',
    'SQL',
    'Git & GitHub',
    'REST APIs',
    'MongoDB',
    'Tailwind CSS',
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
