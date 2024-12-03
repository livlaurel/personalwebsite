import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Gallery from './gallery/gallery';
import ImageDetail from './gallery/picture';
import About from './about/about';
import Projects from './projectgallery/project';
import PersWeb from './projectgallery/projectdesc/persweb/persweb';
import Purrr from './projectgallery/projectdesc/purrr/purrr';
import Val from './projectgallery/projectdesc/valentines/val';

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<ImageDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/personal-website" element={<PersWeb />} />
        <Route path="/personal-website" element={<Purrr />} />
        <Route path="/personal-website" element={<Val />} />
      </Routes>
    </Router>
  );
}

export default App;
