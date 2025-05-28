import React from 'react';
import '../styles/skills.css';
const technicalSkills = [
  {
    name: 'C',
    icon: '/images/c.png',
    description: 'Foundation of procedural programming and memory control.',
  },
  {
    name: 'MySQL',
    icon: '/images/mysql.png',
    description: 'Relational database design and SQL querying.',
  },
  {
    name: 'Python',
    icon: '/images/python.png',
    description: 'Versatile for automation, scripting, and data analysis.',
  },
  {
    name: 'Java',
    icon: '/images/java.png',
    description: 'Object-oriented programming for scalable solutions.',
  },
  {
    name: 'React.js',
    icon: '/images/react.png',
    description: 'Component-based UI development with hooks.',
  },
  {
    name: 'PHP',
    icon: '/images/php.png',
    description: 'Server-side scripting and web backend logic.',
  },
  {
    name: 'HTML',
    icon: '/images/html.png',
    description: 'Markup structure and layout for web pages.',
  },
];

const softSkills = [
  {
    name: 'Proactiveness',
    icon: '/images/proactive.png',
    description: 'Taking initiative and acting without prompts.',
  },
  {
    name: 'Goal-Oriented',
    icon: '/images/goal.png',
    description: 'Focused on achieving clear and measurable results.',
  },
  {
    name: 'Collaborative',
    icon: '/images/team.png',
    description: 'Working effectively in team-driven environments.',
  },
  {
    name: 'Adaptability',
    icon: '/images/adapt.png',
    description: 'Adjusting quickly to changing conditions and feedback.',
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      <h3 className="category-title">Technical Skills</h3>
      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <div className="skill-name">{skill.name}</div>
            <div className="skill-desc">{skill.description}</div>
          </div>
        ))}
      </div>

      <h3 className="category-title">Soft Skills</h3>
      <div className="skills-grid">
        {softSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <div className="skill-name">{skill.name}</div>
            <div className="skill-desc">{skill.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
