import { NavLink, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Layout() {
  return (
    <div>
      <Navbar expand="lg" className="bg-transparent" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            {' '}
            <img
              src="/src/assets/door_logo_w.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="club logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto p-2">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="events">
                Events
              </Nav.Link>
              <Nav.Link as={NavLink} to="services">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="aboutus">
                About us
              </Nav.Link>
              <Nav.Link as={NavLink} to="contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="">
              <Nav.Link as={NavLink} to="signin">
                <Button>Sign in</Button>
              </Nav.Link>
              <Nav.Link as={NavLink} to="signup">
                <Button>Sign up</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
      <footer>Footer...</footer>
    </div>
  );
}

export default Layout;
