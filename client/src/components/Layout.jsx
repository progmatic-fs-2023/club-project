import { NavLink, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RegistrationModal from './RegistrationModal';
import LoginModal from './LoginModal';

function Layout() {
  const [show, setShow] = useState('inline-block');

  const handleCloseButton = () => setShow('none');

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar
        variant="dark"
        collapseOnSelect
        expand="xl"
        className="bg-primary navbar fs-4 py-0 h-auto"
        fixed="top"
      >
        <Container className="min-vw-100 mx-auto py-1 px-4">
          <Navbar.Brand as={NavLink} to="/">
            {' '}
            <img
              src="/src/assets/door_logo_w.png"
              className="logo d-inline-block align-top"
              alt="Club logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto p-2 d-flex flex-wrap">
              <Nav.Link as={NavLink} to="/" href="#home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="events" href="#events">
                Events
              </Nav.Link>
              <Nav.Link as={NavLink} to="services" href="#services">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="gallery" href="#gallery">
                Gallery
              </Nav.Link>
              <Nav.Link as={NavLink} to="membership" href="#membership">
                Membership
              </Nav.Link>
              <Nav.Link as={NavLink} to="aboutus" href="#aboutus">
                About us
              </Nav.Link>
              <Nav.Link as={NavLink} to="contact" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav.Link className="" href="#login&signup">
              <Navbar.Brand
                as={NavLink}
                to="/profile"
                style={{ display: `${show === 'inline-block' ? 'none' : 'inline-block'}` }}
              >
                {' '}
                <img
                  src="/src/assets/manager.png"
                  className="user-icon d-inline-block align-top"
                  alt="profile logo"
                />
              </Navbar.Brand>
              <LoginModal showButton={show} setShowButton={handleCloseButton} />
              <RegistrationModal showButton={show} />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="bg-services flex-grow-1">
        <Outlet />
      </div>

      <footer className="bg-dark bottom-0">
        <Container>
          <Row className="p-5 pb-3">
            <Col md={3} className="d-flex justify-content-center p-4">
              <Navbar.Brand href="/">
                {' '}
                <img
                  src="/src/assets/door_logo_w.png"
                  className="footer-logo d-inline-block align-center"
                  alt="club logo"
                />
              </Navbar.Brand>
            </Col>
            <Col md={3} className="d-flex flex-column align-items-center text-white">
              <div className="footer-menu">
                <h5 className="text-secondary">Pages</h5>
                <ul className="list-unstyled text-white">
                  <Nav.Link as={NavLink} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="events">
                    Events
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/services">
                    Services
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/aboutus">
                    About us
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/contact">
                    Contact
                  </Nav.Link>
                </ul>
              </div>
            </Col>
            <Col md={3} className="d-flex justify-content-center">
              <div className="footer-contact">
                <h5 className="text-secondary">Customer service</h5>
                <ul className="list-unstyled text-white">
                  <li>☎️: +36708536957</li>
                  <li>✉️: info@doorclub.com</li>
                  <hr />
                  <li>
                    <a href="privacy" className="text-secondary">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="conditions" className="text-secondary">
                      Terms of use
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} className="d-flex justify-content-center">
              <div className="footer-follow-us">
                <h5 className="text-secondary">Follow us!</h5>
                <ul className="list-unstyled d-flex">
                  <SocialIcon className="h-30 w-30 my-1" url="https://www.facebook.com/" />
                  <SocialIcon className="mx-3 h-30 w-30 my-1" url="https://twitter.com/" />
                  <SocialIcon className="h-30 w-30 my-1" url="https://www.instagram.com/" />
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center p-2 bg-secondary opacity-25">
          <span className="text-white">© 2023-24 Copyright: The Club Project Team</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
