import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainCarousel from './components/MainCarousel';
import Layout from './components/Layout';
import Services from './pages/Services';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainCarousel />} />
        <Route path="/events" element={<div>EVENTS</div>} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<div>SIGN IN</div>} />
        <Route path="/signup" element={<div>SIGN UP</div>} />
        <Route path="/aboutus" element={<div>ABOUT US</div>} />
        <Route path="/contact" element={<div>CONTACT</div>} />
      </Route>
    </Routes>
  );
}

export default App;
