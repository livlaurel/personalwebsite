import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import Dev from './pages/dev.tsx';
import Inspiration from './pages/inspo.tsx';
import CalmKeys from './pages/calmkeys.tsx';
import Purrr from './pages/purrr.tsx';
import Web from './pages/web.tsx';
import Booth from './pages/booth.tsx'
import Sprint from './pages/sprint.tsx'
import PyTexas from './pages/pytexas.tsx'
import ApartmentPosters from './pages/poster.tsx'
import ClickSpark from './components/clickspark.tsx';
import Ishi from './pages/ishi.tsx';

function App(){
  return(
    <HashRouter>
      <ClickSpark />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/calmkeys" element={<CalmKeys />} />
        <Route path="/purrrsonality" element={<Purrr />} />
        <Route path="/website" element={<Web />} />
        <Route path="/boothbuddy" element={<Booth />} />
        <Route path="/sprint" element={<Sprint />} />
        <Route path="/pytexas" element={<PyTexas />} />
        <Route path="/posters" element={<ApartmentPosters />} />
        <Route path="/ishi" element={<Ishi />} />
      </Routes>
    </HashRouter>
  )
}

export default App;