import React from 'react';
import bgImage from '../assets/bg.jpg';
import { TypeAnimation } from 'react-type-animation';
import '../styles/home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-name">Hi, I'm <span>Suryaprakash J</span></h1>
          <h2 className="home-roles">
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Software Developer', 2000,
                'Aspirant Programmer', 2000,
                'Tech Enthusiast', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typewriter"
            />
          </h2>
          <p className="home-description">Passionate about building scalable software and exploring AI innovations.</p>
          <p className="home-description">Dedicated to learning, problem-solving, and making impactful digital solutions.</p>
          <a href="/resume.pdf" download className="home-btn">Download Resume</a>
        </div>
        <div className="home-image">
          <img src={bgImage} alt="Tam" />
        </div>
      </div>
    </section>
  );
};

export default Home;
