import { Link } from 'react-router-dom';
import './Home.css';
import './blob.css';
import './links.css';
import './circle.css';
import PersProjects from './components/PersProjects/personalpro';

function Home() {
  return (
    <div className="Home">
      
      <div className="circle">
        <div className="anim-typewriter">
          <h2 className="name">Olivia Laurel</h2>
        </div>
      </div>

      <div className="blob top-left-blob"></div>
      <div className="blob two-top-left-blob"></div>
      <div className="blob three-top-left-blob"></div>
      <div className="blob bottom-right-blob"></div>
      <div className="blob two-bottom-right-blob"></div>
      <div className="blob three-bottom-right-blob"></div>

      <header className="Home-header">
        <nav className="header-links">
          <a href="https://github.com/livlaurel" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/olivialaurel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>

      <div className="PersonalProjects">
        <PersProjects />
      </div>

    </div>
  );
}

export default Home;
