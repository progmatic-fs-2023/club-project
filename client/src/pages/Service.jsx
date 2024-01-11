import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { API_URL } from '../constants';

function Service() {
  const { serviceName } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    const fetchServiceByName = async () => {
      try {
        const response = await fetch(`${API_URL}/api/services/${serviceName}`);
        const result = await response.json();

        setService(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchServiceByName();
  }, [serviceName]);

  /* let servicePrev = [];

  if (service.id === 1) {
    servicePrev = services.find((item) => item.id === services.length);
  } else {
    servicePrev = services.find((item) => item.id === service.id - 1);
  }

  let serviceNext = [];

  if (service.id === services.length) {
    serviceNext = services.find((item) => item.id === 1);
  } else {
    serviceNext = services.find((item) => item.id === service.id + 1);
  } */

  return (
    <div className="d-flex flex-column">
      <Image className="header-image w-100 object-fit-cover" src={service.headerImg} />
      <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start p-5">
        <Image className="w-25 mx-3" src={service.serviceImg} rounded />
        <div className=" px-3">
          <div className="d-flex flex-column align-items-center">
            <h4 className="fst-italic">{service.category}</h4>
            <h1 className="py-1 fw-bold text-primary border-5 border-bottom border-warning text-center ">
              {service.name}{' '}
            </h1>
          </div>
          <Tabs defaultActiveKey="moreDetails" className="mb-3">
            <Tab eventKey="moreDetails" title="More details">
              {service.moreDetails}
            </Tab>
            <Tab eventKey="moreDetails1" title="More details">
              {service.moreDetails}
            </Tab>
            <Tab eventKey="moreDetails2" title="More details">
              {service.moreDetails}
            </Tab>
          </Tabs>
          <div className="p-3 d-flex justify-content-center">IDŐPONT FOGLALÁS</div>
          <Nav className="d-flex justify-content-evenly">
            {/*   <Nav.Link as={NavLink} to={`/services/${servicePrev.service.name}`}>
              <Button className="btn-primary fs-5 max-vw-25">Prev</Button>
            </Nav.Link> */}
            <Nav.Link as={NavLink} to="/services">
              <Button className="btn-primary fs-5 max-vw-25">BACK TO SERVICES</Button>
            </Nav.Link>
            {/*     <Nav.Link as={NavLink} to={`/services/${serviceNext.service.name}`}>
              <Button className="btn-primary fs-5 max-vw-25">Next</Button>
            </Nav.Link> */}
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default Service;
