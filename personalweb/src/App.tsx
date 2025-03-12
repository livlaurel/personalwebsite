import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import Dev from './pages/dev.tsx';
import Inspire from './pages/inspo.tsx';

function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/inspire" element={<Inspire />} />
      </Routes>
    </HashRouter>
  )
}

export default App;