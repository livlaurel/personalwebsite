import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import Dev from './pages/dev.tsx';
import Inspire from './pages/inspo.tsx';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/inspire" element={<Inspire />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;