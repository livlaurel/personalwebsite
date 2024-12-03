import React from 'react';
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
        <h1>Project 1</h1>
    </div>
    <div className="projectframe">
        <h1>Project 2</h1>
    </div>
    <div className="projectframe">
        <h1>Project 3</h1>
    </div>
    </div>
  );
};

export default Projects;