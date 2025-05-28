import React from 'react';
import dpImage from '../assets/dp.png';
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
          <p className="home-description">Passionate about building scalable software, exploring bold ideas, and solving real-world problems — whether it’s through code, design, or pure curiosity. </p>
          <p className="home-description">  Outside of tech, I'm a spirited college student who thrives on creativity, teamwork, and making the most of every moment.
          </p>
         
          <a href="/resume.pdf" download className="home-btn">Download Resume</a>
        </div>
        <div className="home-image">
          <img src={dpImage} alt="SURYAPRAKASHJ" />
          
        </div>
      </div>
    </section>
  );
};

export default Home;
