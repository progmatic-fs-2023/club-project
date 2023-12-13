import './App.css';
import { useEffect, useState } from 'react';
import { API_URL } from './constants';
import { Routes, Route } from 'react-router-dom';
import MainCarousel from './components/MainCarousel.jsx';
import Layout from './components/Layout.jsx';
import NavBar from './components/NavBar.jsx';


function App() {
  return (
    /*     <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<div>HOME</div>} />
        <Route path="/events" element={<div>EVENTS</div>} />
        <Route path="/services" element={<div>SERVICES</div>} />
      </Route>
    </Routes> */
    <>
    <NavBar />
    < MainCarousel />
    </>
  );
}

export default App;
