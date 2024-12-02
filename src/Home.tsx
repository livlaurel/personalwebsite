import { Link } from 'react-router-dom';
import './Home.css';
import './links.css';
import './type.css';
import './searchbar.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <nav className="header-links">
          <a href="https://github.com/livlaurel" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/olivialaurel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </header>
      <div className="searchbar-container">
        <div className="searchbar">
          <i className="fas fa-search icon"></i>
          <div className="anim-typewriter">
            <h2 className="name">Olivia Laurel</h2>
          </div>
        </div>
      </div>
      <div className="info-boxes">
        <Link to="/gallery" className="info-box">Art Gallery</Link>
        <Link to="/about" className="info-box">About Me</Link>
        <Link to="/projects" className="info-box">My Projects</Link>
      </div>
    </div>
  );
}

export default Home;
