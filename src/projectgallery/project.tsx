import React from 'react';
import { Link } from 'react-router-dom';
import './project.css';

const Projects: React.FC = () => {
  return (
    <div className='container'>
      <div className="projects">
        <h1>
          <span className="word">Create</span>
          <span className="word">Design</span>
          <span className="word">Code</span>
        </h1>
        <p>Heres where I store my current projects! I'm pretty proud of them and I hope you like them too! Have fun exploring :P </p>
      </div>

      <Link to="/personal-website" className="projectframe">Personal Website</Link>
      <Link to="/purrrsonality" className="projectframe">Purrrsonality</Link>
      <Link to="/valentines-day" className="projectframe">Valentines Day</Link>
      </div>
  );
};

export default Projects;