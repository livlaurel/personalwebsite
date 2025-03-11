import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import Dev from './pages/dev.tsx';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;