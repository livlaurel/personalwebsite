import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Gallery from './gallery/gallery';
import ImageDetail from './gallery/picture';

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
