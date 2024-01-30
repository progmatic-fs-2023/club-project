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
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchServiceByName = async () => {
      try {
        const response = await fetch(`${API_URL}/api/services/${serviceName}`);
        const result = await response.json();
        setService(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // console.error('Error fetching data:', error);
      }
    };

    fetchServiceByName();
  }, [serviceName]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 w-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const syncBookingButtonWithMembership = () => {
    if (user) {
      if (user.membership === 'silver' && service.membership === 'silver') {
        return true;
      }
      if (user.membership === 'gold' && service.membership === 'platinum') {
        return false;
      }
      if (
        user.membership === 'gold' &&
        (service.membership === 'silver' || service.membership === 'gold')
      ) {
        return true;
      }
      if (user.membership === 'platinum') {
        return true;
      }
      return false;
    }
    return false;
  };

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
              {isAuthenticated && syncBookingButtonWithMembership() ? (
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
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      {' '}
                      {isAuthenticated ? 'UPGRADE YOUR MEMBERSHIP' : 'LOG IN TO BOOK!'}
                    </Tooltip>
                  }
                >
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
                <Nav.Link as={NavLink} to="/services">
                  <Button className="btn-primary fs-5 max-vw-25">
                    SERVICES <RiArrowGoBackLine />
                  </Button>
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
