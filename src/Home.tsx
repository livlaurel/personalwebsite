import { Link } from 'react-router-dom';
import './Home.css';
import PersProjects from './components/PersProjects/personalpro';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="header-box">
          <h2>Olivia Laurel</h2>
          <nav className="header-links">
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <Link to="/blog">Blog</Link> 
          </nav>
        </div>
      </header>
      <div className='PersonalProjects'>
        <PersProjects/>
      </div>  
    </div>
  );
}

export default Home;
