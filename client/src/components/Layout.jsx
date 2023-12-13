import { NavLink, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
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
        <Container id='container'>
          <Navbar.Brand href="/"> <img
              src="/src/components/doorblue.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="events">Events</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Dropdown as={ButtonGroup} title="Dropdown" id="basic-nav-dropdown">
                <Button variant="" href="services">
                  Services
                </Button>

                <Dropdown.Toggle split variant="" id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="aboutus">About us</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
            <Nav className="">
              <Nav.Link href="signin"><Button>Sign in</Button></Nav.Link>
              <Nav.Link href="signup"><Button>Sign up</Button></Nav.Link>
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
