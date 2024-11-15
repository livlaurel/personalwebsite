import { Link } from 'react-router-dom';
import './Home.css';
import './links.css';
import './type.css';
import PersProjects from './components/PersProjects/personalpro';

function Home() {
  return (
    <div className="Home">
       <div className="anim-typewriter">
        <h2 className="name">Olivia Laurel</h2>
      </div>

      <header className="Home-header">
        <nav className="header-links">
          <a href="https://github.com/livlaurel" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/olivialaurel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
    </div>
  );
}

export default Home;
