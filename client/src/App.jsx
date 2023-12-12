import './App.css';
import { useEffect, useState } from 'react';
import { API_URL } from './constants';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default App;
