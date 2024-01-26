import { NavLink, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdPin } from 'react-icons/io';
import RegistrationModal from './RegistrationModal';
import LoginModal from './LoginModal';
import { useAuth } from '../contexts/AuthContext';

function Layout() {
  const { user, isAuthenticated, logout } = useAuth();
  const [show, setShow] = useState(isAuthenticated ? 'none' : 'inline-block');
  const [isAdmin, setIsAdmin] = useState();

  const handleCloseButton = () => setShow('none');
  const handleLogoutButton = () => {
    setShow('inline-block');
    logout();
  };
  const adminRole = user.id === null ? false : user.is_admin;

  useEffect(() => {
    // Oldalbetöltéskor ellenőrizzük a bejelentkezési állapotot
    if (isAuthenticated) {
      setShow('none');
    } else {
      setShow('inline-block');
    }

    if (isAuthenticated && adminRole) {
      setIsAdmin('inline-block');
    } else {
      setIsAdmin('none');
    }
  }, [isAuthenticated]);

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar
        variant="dark"
        collapseOnSelect
        expand="xl"
        className="bg-primary fs-4 py-0 h-auto"
        fixed="top"
      >
        <Container className="min-vw-100 mx-auto py-1 px-4">
          <Navbar.Brand as={NavLink} to="/">
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
                <img
                  src="/src/assets/manager.png"
                  className="user-icon d-inline-block align-top"
                  alt="profile logo"
                />
              </Navbar.Brand>
              <Button
                as={NavLink}
                to="/admin"
                style={{ display: `${isAdmin === 'inline-block' ? 'inline-block' : 'none'}` }}
                className="mx-3 max-vw-25 fs-5"
                variant="outline-light"
              >
                ADMIN
              </Button>
              {!adminRole && (
                <Button
                  as={NavLink}
                  to="/booking"
                  style={{ display: `${show === 'inline-block' ? 'none' : 'inline-block'}` }}
                  className="mx-3 max-vw-25 fs-5"
                  variant="outline-light"
                >
                  Booking
                </Button>
              )}
              <Button
                as={NavLink}
                to="/"
                style={{ display: `${show === 'inline-block' ? 'none' : 'inline-block'}` }}
                className="mx-3 max-vw-25 fs-5"
                variant="outline-light"
                onClick={() => {
                  handleLogoutButton();
                }}
              >
                Log out
              </Button>
              <LoginModal
                showButton={show}
                setShowButton={handleCloseButton}
                setShowButtonNone={handleLogoutButton}
              />
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
          <Row className="p-4 pb-3">
            <Col
              md={3}
              className="d-flex flex-column justify-content-center align-items-center text-white p-3"
            >
              <div className="d-flex justify-content-center">
                <Navbar.Brand href="/">
                  <img src="/src/assets/door_logo_w.png" className="footer-logo " alt="club logo" />
                </Navbar.Brand>
              </div>
              <Nav.Link as={NavLink} to="/contact">
                <div className="text-start py-3 d-flex flex-row justify-content-center align-items-start">
                  <div>
                    <IoMdPin className="fs-1 p-1" fill="crimson" />
                  </div>
                  <div>
                    Székesfehérvár-Feketehegy
                    <p>Új Csóri út 156</p>
                  </div>
                </div>
              </Nav.Link>
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
                  <li>✉️: door8projekt@gmail.com</li>
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
