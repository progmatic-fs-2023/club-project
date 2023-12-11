import { NavLink, Outlet } from 'react-router-dom';

 function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/services">Services</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
      <footer>Footer...</footer>
    </div>
  );
}

export default Layout

