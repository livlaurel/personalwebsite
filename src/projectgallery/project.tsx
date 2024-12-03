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

      <div className="projectframe">
        <Link to="/personal-website">
          <h1>Personal Website</h1>
        </Link>
      </div>
      <div className="projectframe">
        <Link to="/purrrsonality">
          <h1>Purrrsonality</h1>
        </Link>
      </div>
      <div className="projectframe">
        <Link to="/valentines-day">
          <h1>Valentines Day</h1>
        </Link>
      </div>
    </div>
  );
};

export default Projects;