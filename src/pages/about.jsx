import React from 'react';
import bgImage from '../assets/dp.png';
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
           I'm Suryaprakash J, a passionate software developer and tech enthusiast. I love to do things that make a difference and enjoy learning new technologies every day.
          </p>
          <p>
            And as a college student, I embrace every opportunity — from tech fests and team projects to spontaneous challenges — that makes the journey both exciting and meaningful.</p>
          <p>
           Off the keyboard,  I’m also an avid footballer and proud goalkeeper which keeps me grounded, builds resilience, and sharpens my instincts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;