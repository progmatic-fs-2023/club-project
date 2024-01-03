import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainCarousel from './components/MainCarousel';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainCarousel />} />
        <Route path="/events" element={<div>EVENTS</div>} />
        <Route path="/services" element={<div>SERVICES</div>} />
        <Route path="/signin" element={<div>SIGN IN</div>} />
        <Route path="/signup" element={<div>SIGN UP</div>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
