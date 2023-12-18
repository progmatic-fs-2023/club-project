import { NavLink, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RegistrationModal from './RegistrationModal';
import LoginModal from './LoginModal';
import './Layout.css';

function Layout() {
  return (
    <div>
      <Navbar
      variant="dark"
        collapseOnSelect
        expand="xxl"
        className="bg-dark bg-opacity-75 fs-4"
        style={{ height: 'auto' }}
        fixed="top"
      >
        <Container className="min-vw-100 mx-auto p-4">
          <Navbar.Brand as={NavLink} to="/">
            {' '}
            <img
              src="/src/assets/door_logo_w.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Club logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
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
              <LoginModal />
              <RegistrationModal />
            </Nav.Link >
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>

      <footer className="bg-dark">
        <Container>
          <Row className="p-5">
            <Col md={3} className="d-flex justify-content-center p-4">
              <Navbar.Brand href="/">
                {' '}
                <img
                  src="/src/assets/door_logo_w.png"
                  width="120"
                  height="120"
                  className="d-inline-block align-center"
                  alt="club logo"
                />
              </Navbar.Brand>
            </Col>
            <Col md={3} className="d-flex justify-content-center">
              <ul>
                <h5 className="footer-color">Pages</h5>
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
            </Col>
            <Col md={3} className="d-flex justify-content-center">
              <ul className="footer-color footer-list">
                <h5>Customer service</h5>
                <li>☎️: +36708536957</li>
                <li>✉️: door@gmail.com</li>
                <hr />
                <li>
                  <a href="privacy" className="footer-color">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="conditions" className="footer-color">
                    Conditions of use
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} className="d-flex justify-content-center">
              <ul className="footer-color footer-list">
                <h5>Follow us!</h5>
                <SocialIcon
                  style={{ height: 40, width: 40, margin: '5px 0' }}
                  url="https://www.facebook.com/"
                />
                <SocialIcon
                  className="mx-2"
                  style={{ height: 40, width: 40, margin: '5px 0' }}
                  url="https://twitter.com/"
                />
                <SocialIcon
                  style={{ height: 40, width: 40, margin: '5px 0' }}
                  url="https://www.instagram.com/"
                />
                <hr />
                <Button variant="secondary" size="sm" style={{ marginTop: '15px' }}>
                  Admin page
                </Button>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Layout;
