import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainCarousel from './components/MainCarousel';
import Layout from './components/Layout';
import Services from './pages/Services';
import Events from './pages/Events';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainCarousel />} />
        <Route path="/events" element={<Events />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<div>GALLERY</div>} />
        <Route path="/membership" element={<div>MEMBERSHIP</div>} />
        <Route path="/aboutus" element={<div>ABOUT US</div>} />
        <Route path="/contact" element={<div>CONTACT</div>} />
        <Route path="/profile" element={<div>PROFILE</div>} />
      </Route>
    </Routes>
  );
}

export default App;
