import { useParams, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PropTypes from 'prop-types';

function Service({ servicesList }) {
  const { serviceName } = useParams();

  const service = servicesList.find((item) => item.service.name === serviceName);

  let servicePrev = [];

  if (service.id === 1) {
    servicePrev = servicesList.find((item) => item.id === servicesList.length);
  } else {
    servicePrev = servicesList.find((item) => item.id === service.id - 1);
  }

  let serviceNext = [];

  if (service.id === servicesList.length) {
    serviceNext = servicesList.find((item) => item.id === 1);
  } else {
    serviceNext = servicesList.find((item) => item.id === service.id + 1);
  }

  return (
    <>
      <Image
        className="header-image w-100 object-fit-cover"
        src={service.service.headerImg}
        fluid
      />
      <div className="bg-secondary bg-opacity-25 p-5 d-flex flex-column align-items-center">
        <h4 className="fst-italic">{service.category}</h4>
        <h1 className="py-1 fw-bold border-5 border-bottom border-warning" style={{ color: '#0d2241'}}>
          {service.service.name}{' '}
        </h1>
        <div className="d-flex justify-content-evenly p-3">
          <Image
            className="w-25 h-25 mx-3 object-fit-cover"
            src={service.service.serviceImg}
            fluid
            rounded
          />
          <div className="px-3">
            <Tabs defaultActiveKey="moreDetails" className="mb-3">
              <Tab eventKey="moreDetails" title="More details">
                {service.service.moreDetails}
              </Tab>
              <Tab eventKey="moreDetails1" title="More details">
                {service.service.moreDetails}
              </Tab>
              <Tab eventKey="moreDetails2" title="More details">
                {service.service.moreDetails}
              </Tab>
            </Tabs>
            <div className="p-3 d-flex justify-content-center">IDŐPONT FOGLALÁS</div>
            <Nav className="d-flex justify-content-evenly">
              <Nav.Link as={NavLink} to={`/services/${servicePrev.service.name}`}>
                <Button className="fs-5 max-vw-25 navyblue-btn" variant="outline-light">
                  Prev
                </Button>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services">
                <Button className="fs-5 max-vw-25 navyblue-btn" variant="outline-light">
                  Services
                </Button>
              </Nav.Link>
              <Nav.Link as={NavLink} to={`/services/${serviceNext.service.name}`}>
                <Button className="fs-5 max-vw-25 navyblue-btn" variant="outline-light">
                  Next
                </Button>
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </div>
    </>
  );
}

Service.propTypes = {
  servicesList: PropTypes.string.isRequired,
};

export default Service;
