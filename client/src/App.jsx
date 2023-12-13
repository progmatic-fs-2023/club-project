import './App.css';
import { useEffect, useState } from 'react';
import { API_URL } from './constants';
import { Routes, Route } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

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
      <Carousel data-bs-theme="dark" interval="5000" wrap="true" pause="false">
        <Carousel.Item>
          <img className="d-block w-100" src=".\src\assets\golf_1.webp" alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="buttons">
              <Button variant="secondary" size="lg">
                Secondary
              </Button>{' '}
              <div className="secondary-buttons">
                <Button variant="outline-light">Light</Button>{' '}
                <Button variant="outline-light">Light</Button>{' '}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src=".\src\assets\golf_2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="buttons">
              <Button variant="secondary" size="lg">
                Secondary
              </Button>{' '}
              <div className="secondary-buttons">
                <Button variant="outline-light">Light</Button>{' '}
                <Button variant="outline-light">Light</Button>{' '}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src=".\src\assets\golf_3.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <div className="buttons">
              <Button variant="secondary" size="lg">
                Secondary
              </Button>{' '}
              <div className="secondary-buttons">
                <Button variant="outline-light">Light</Button>{' '}
                <Button variant="outline-light">Light</Button>{' '}
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default App;
