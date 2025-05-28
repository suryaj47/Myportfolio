import React from 'react';
import '../styles/projects.css';
import { FaBrain, FaAndroid, FaGamepad, FaCheckSquare, FaCalculator } from 'react-icons/fa';
import { SiPhp, SiReact } from 'react-icons/si';

const Projects = () => {
  const projectList = [
    {
      title: 'Tic Tac Toe',
      description: 'A simple Python-based CLI game — my first project that sparked my interest in logic building.',
      tech: ['Python'],
      icon: <FaGamepad className="project-icon" />,
      github: 'https://github.com/suryaj47/TIC-TAC-TOE',
    },
    {
      title: 'Sleep Tracking App',
      description: 'An Android app developed as part of a Naan Mudhalvan team project, helping users monitor and improve their sleep habits.',
      tech: ['Kotlin', 'Android Studio', 'Jetpack Compose'],
      icon: <FaAndroid className="project-icon" />,
      github: 'https://github.com/Ajaykumar0411g/SleepTracking-NM2024TMID05856-',
    },
    {
      title: 'Sparkiz - Quiz Web App',
      description: 'A lightweight quiz platform allowing users to create and participate in quizzes. Built using core web technologies.',
      tech: ['HTML', 'PHP', 'MySQL'],
      icon: <SiPhp className="project-icon" />,
      github: 'https://github.com/suryaj47/Sparkiz---Simple-Quiz-creating-web-app',
    },
    {
      title: 'To-Do List App',
      description: 'A task manager built with React.js for managing daily goals with a clean UI and real-time state updates.',
      tech: ['React.js'],
      icon: <SiReact className="project-icon" />,
      github: 'https://github.com/suryaj47/React-todo-list',
    },
    {
      title: 'Scientific Calculator',
      description: 'A JavaFX-based desktop calculator that performs scientific computations with an intuitive interface.',
      tech: ['JavaFX'],
      icon: <FaCalculator className="project-icon" />,
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            {project.icon}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  View on GitHub
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
