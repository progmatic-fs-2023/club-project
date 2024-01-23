import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useAuth } from '../contexts/AuthContext';
import { API_URL } from '../constants';

function Service() {
  const { serviceName } = useParams();
  const [service, setService] = useState([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchServiceByName = async () => {
      try {
        const response = await fetch(`${API_URL}/api/services/${serviceName}`);
        const result = await response.json();
        setService(result);
      } catch (error) {
        // console.error('Error fetching data:', error);
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
        <Image className="w-25 mx-3 d-lg-block d-none" src={service.serviceImg} rounded />
        <div className=" px-3">
          <div className="d-flex flex-column align-items-center">
            <h4 className="fst-italic">{service.category}</h4>
            <h1 className="py-1 fw-bold text-primary border-5 border-bottom border-warning text-center ">
              {service.name}{' '}
            </h1>
          </div>
          <div className="p-3 d-flex justify-content-center">{service.moreDetails}</div>
          <div className="p-3 d-flex justify-content-center flex-wrap">
            <div className="p-3 d-flex align-items-center">
              {isAuthenticated ? (
                <NavLink
                  to={`/booking/${service.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Button className="btn-primary fs-5 max-vw-25 d-flex align-items-center gap-1">
                    BOOKING <MdOutlineCalendarMonth />
                  </Button>
                </NavLink>
              ) : (
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">LOG IN TO BOOK!</Tooltip>}>
                  <span className="d-inline-block">
                    <Button
                      className="btn-primary fs-5 max-vw-25 d-flex align-items-center gap-1"
                      disabled
                      style={{ pointerEvents: 'none' }}
                    >
                      BOOKING <MdOutlineCalendarMonth />
                    </Button>
                  </span>
                </OverlayTrigger>
              )}
            </div>
            <div className="p-3">
              <Nav className="d-flex justify-content-evenly">
                {/*   <Nav.Link as={NavLink} to={`/services/${servicePrev.service.name}`}>
              <Button className="btn-primary fs-5 max-vw-25">Prev</Button>
            </Nav.Link> */}
                <Nav.Link as={NavLink} to="/services">
                  <Button className="btn-primary fs-5 max-vw-25">
                    SERVICES <RiArrowGoBackLine />
                  </Button>
                </Nav.Link>
                {/*     <Nav.Link as={NavLink} to={`/services/${serviceNext.service.name}`}>
              <Button className="btn-primary fs-5 max-vw-25">Next</Button>
            </Nav.Link> */}
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
