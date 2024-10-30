import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Blog from './blog/blog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
