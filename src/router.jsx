
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Publications from './pages/Publications';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/team' element={<Team />} />
      <Route path='/publications' element={<Publications />} />
    </Routes>
  );
}
