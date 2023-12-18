import React, { useState } from 'react';
import AllServices from '../components/AllServices';
import ServiceSearchBar from '../components/ServiceSearchBar';
import Container from 'react-bootstrap/Container';

function Services() {
  return (
    <Container>
      <div className="mt-5">
        <ServiceSearchBar />
        <AllServices />
      </div>
    </Container>
  );
}

export default Services;
