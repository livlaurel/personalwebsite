import React from 'react';
import './about.css';
import pfp from './pfp.png';

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="about-container">
        <h1>About Me</h1>
        <p>Hello! I'm Olivia Laurel!</p>
        <p>I'm currently an undergrad CS major and I hope to go into web design. I love to draw in my free time (check out the art gallery ;p). I made this website as a way to document my work and growth in software dev!</p>
      </div>

      <div className="pic-container">
        <div className="picframe">
          <img src={pfp} alt="Olivia" />
        </div>
      </div>
    </div>
  );
};

export default About;