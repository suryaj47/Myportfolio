import React from 'react';
import '../styles/achievements.css';
import { FaTrophy } from 'react-icons/fa';


const Achievements = () => {
 const achievements = [
  {
    title: '579/600 in 12th Boards',
    description: 'Achieved 579 marks out of 600 in Higher Secondary Exams.',
    year: '2022',
    icon: '/icons/boards.png',  
  },
  {
    title: 'Bronze Medal – Fencing',
    description: 'Secured 3rd place in the district-level fencing competition during school.',
    year: '2019',
    icon: '/icons/fencing.png',
  },
  {
    title: 'Zonal Goalkeeper & Vice-Captain',
    description: 'Represented college as a zonal-level goalkeeper and vice-captained the winning house team.',
    year: '2024',
    icon: '/icons/football.png',
  },
  {
    title: 'Joint Placement Representative',
    description: 'Serving as Joint Placement Representative for the CSE Department.',
    year: '2024',
    icon: '/icons/placement.png',
  },
  {
    title: 'Volunteer – Scout Camp',
    description: 'Actively volunteered at the Rastrapuraskar Scout Camp during school days.',
    year: '2018',
    icon: '/icons/scout.png',
  },
];


  return (
  <section className="achievements-section">
  <h2 className="achievements-title">Achievements</h2>
  <div className="achievements-grid">
    {achievements.map((ach, index) => (
      <div className="achievement-card" key={index}>
      <div className="achievement-icon">
  <img src={ach.icon} alt={ach.title} />
</div>
        <h3 className="achievement-title">{ach.title}</h3>
        <div className="achievement-year">{ach.year}</div>
        <p className="achievement-description">{ach.description}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Achievements;
