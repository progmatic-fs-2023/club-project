import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Layout.css';

function Layout() {
  return (
    <div>
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/services">Services</NavLink>
      </nav> */}
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top" id="navbar">
        <Container id="container">
          <Navbar.Brand href="/">
            {' '}
            <img
              src="/src/components/door_logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="events">Events</Nav.Link>
              <Nav.Link href="services">Services</Nav.Link>
              <Nav.Link href="aboutus">About us</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
            <Nav className="">
              <Nav.Link href="signin">
                <Button>Sign in</Button>
              </Nav.Link>
              <Nav.Link href="signup">
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
