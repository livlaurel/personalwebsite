import React from 'react';
import './persweb.css';
import macbook from './macbook.jpg';

const PersWeb: React.FC = () => {
  return (
    <div className="pwcontainer">
      <div className="persweb">
        <div className="title-container">
          <h1>Personal Website</h1>
          <div className="macbook-container">
            <img src={macbook} alt="MacBook" className="macbook-image" />
          </div>
        </div>
        <div className="content-container">
          <p>This project is a personal website built using React and TypeScript. It showcases my skills, projects, and interests. The layout is designed to be responsive and visually appealing, with a focus on simplicity and ease of navigation.</p>
        </div>
      </div>
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="tools-used">
          <h3>Tools Used</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>CSS</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
        <div className="languages-used">
          <h3>Languages Used</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="planning-images">
          <h3>Planning/Blueprint Images</h3>
          <img src="path/to/planning-image1.jpg" alt="Planning Image 1" />
          <img src="path/to/planning-image2.jpg" alt="Planning Image 2" />
        </div>
        <div className="other-stuff">
          <h3>Other Stuff</h3>
          <p>Additional information about the project can be added here.</p>
        </div>
      </div>
    </div>
  );
};

export default PersWeb;