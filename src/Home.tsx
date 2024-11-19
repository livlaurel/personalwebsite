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
          <Link to="/gallery">Gallery</Link>
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
    </div>
  );
}

export default Home;
