import React from 'react';
import './purrr.css';
import laptop from './laptop.jpg';
import mockImage from './figplan.jpeg';
import catdes from "./catdesigns.png";
import plan from "./plan.png";

const Purrr: React.FC = () => {
  return (
    <div className="purrrcontainer">
      <div className="purrr">
        <div className="title-container">
          <a href="https://www.purrrsonality.com" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>Purrrsonality</h1>
          </a>
          <h2>/ᐠ - ˕ -マ</h2>
        </div>
        <div className="laptop-container">
          <img src={laptop} alt="Laptop" className="laptop-image" />
        </div>
        <div className="content-container">
          <p>! Purrrsonality is currently under construction ! </p>
          <p>Purrrsonality is a personality game that tells you what kind of cat you are! Currently there are 4 options (Ragdoll, Bombay, British Short Hair, Calico). Play to see which one you are!</p>
        </div>
      </div>
      <div className="how-it-works">
        <h2>How It's Made:</h2>
        <div className="tools-used">
          <h3>Tools</h3>
          <ul>
            <li>Visual Studio Code (VSCode)</li>
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
            <img src={mockImage} alt="Figma" className="figma-image" />
            <img src={catdes} alt="Cat Designs" className="cat-image" />
            <img src={plan} alt="Plan" className="plan-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purrr;