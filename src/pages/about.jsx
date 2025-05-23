import React from 'react';
import bgImage from '../assets/bg.jpg';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={bgImage} alt="Tam" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Tam, a passionate software developer and tech enthusiast. I love building applications that make a difference and enjoy learning new technologies every day.
          </p>
          <p>
            My journey in programming started with curiosity and has grown into a drive to solve real-world problems through clean, scalable code. Whether it’s a frontend design or backend logic, I enjoy every part of the development cycle.
          </p>
          <p>
            Outside of coding, I enjoy participating in hackathons, exploring open-source contributions, and occasionally diving into competitive programming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
