import './App.css';
import { useEffect, useState } from 'react';
import { API_URL } from './constants';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<div>HOME</div>} />
        <Route path="/events" element={<div>EVENTS</div>} />
        <Route path="/services" element={<div>SERVICES</div>} />
        <Route path="/signin" element={<div>SIGN IN</div>} />
        <Route path="/signup" element={<div>SIGN UP</div>} />
        <Route path="/aboutus" element={<div>ABOUT US</div>} />
        <Route path="/contact" element={<div>CONTACT</div>} />
      </Route>
    </Routes>
  );
}

export default App;
