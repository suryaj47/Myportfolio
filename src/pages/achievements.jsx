import React from 'react';
import '../styles/achievements.css';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: 'Bronze Medal – Fencing',
      description: 'Secured 3rd place in the district-level fencing competition during school.',
      year: '2019',
    },
    {
      title: 'Joint Placement Representative',
      description: 'Selected as the joint placement representative of the CSE department.',
      year: '2024',
    },
    {
      title: 'First-Gen Graduate Recognition',
      description: 'Recognized as a first-generation graduate in my family, breaking educational barriers.',
      year: '2023',
    },
    {
      title: '579/600 in 12th Boards',
      description: 'Achieved 579 marks out of 600 in Higher Secondary Exams.',
      year: '2022',
    },
    {
      title: 'Volunteer – Scout Camp',
      description: 'Actively volunteered at the Rastrapuraskar Scout Camp during school days.',
      year: '2018',
    },
  ];

  return (
    <section className="achievements-section">
      <h2 className="achievements-title">Achievements</h2>
      <div className="timeline">
        {achievements.map((ach, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon"><FaTrophy /></div>
            <div className="timeline-content">
              <h3>{ach.title}</h3>
              <span className="year">{ach.year}</span>
              <p>{ach.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
