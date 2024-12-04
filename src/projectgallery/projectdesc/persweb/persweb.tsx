import React from 'react';
import './persweb.css';
import macbook from './macbook.jpg';
import mockImage from './mock.jpeg';
import abVideo from './ab.mp4';
import designPG from './designpage.jpg'

const PersWeb: React.FC = () => {
  return (
    <div className="pwcontainer">
      <div className="persweb">
        <div className="title-container">
          <h1>Personal Website</h1>
        </div>
        <div className="macbook-container">
            <img src={macbook} alt="MacBook" className="macbook-image" />
        </div>
        <div className="content-container">
          <p>My personal website is my own little space where I can share my art/projects to help document my growth as a designer and software engineer!</p>
        </div>
      </div>
      <div className="how-it-works">
        <h2>How It's Made:</h2>
        <div className="tools-used">
          <h3>Tools</h3>
          <ul>
            <li>Visual Studio Code (VSCode)</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>PorkBun</li>
          </ul>
        </div>
        <div className="languages-used">
          <h3>Languages/Frameworks</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="planning-images">
          <h3>Planning/Blueprint Images</h3>
          <div className="scroll-container">
            <img src={mockImage} alt="Mock Image" />
            <img src={designPG} alt="Design Image" />
            <video controls>
              <source src={abVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersWeb;