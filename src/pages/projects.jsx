import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'AI Mental Health Assistant',
      description: 'An AI-powered chatbot that evaluates stress levels and offers personalized remedies. Built with React, Flask, and OpenAI API.',
      tech: ['React', 'Flask', 'OpenAI API'],
      github: 'https://github.com/your-username/mental-health-assistant',
      demo: 'https://your-demo-link.com',
    },
    {
      title: 'Online Exam Portal',
      description: 'A secure and user-friendly online examination system with admin and student panels.',
      tech: ['Java', 'JSP', 'MySQL'],
      github: 'https://github.com/your-username/online-exam',
    },
    {
      title: 'Sleep Tracker App',
      description: 'An Android app built using Jetpack Compose to help users monitor and improve sleep quality.',
      tech: ['Kotlin', 'Jetpack Compose', 'Material 3'],
      github: 'https://github.com/your-username/sleep-tracker',
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
