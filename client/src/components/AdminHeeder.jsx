import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsPersonCircle, BsJustify } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

function AdminHeader({ OpenSidebar }) {
  const { user, logout } = useAuth();

  const handleLogoutButton = () => {
    logout();
  };

  return (
    <header className="header d-flex justify-content-between align-items-center px-3 text-secondary bg-dark bg-gradient">
      <div className="menu-icon">
        <BsJustify className="m-1 fs-5" onClick={OpenSidebar} />
      </div>
      <div className="d-flex justify-content-end justify-content-lg-between fs-5 text-light end-0 w-100">
        <div className="d-flex align-items-center pe-4 text-light end-0">
          <BsPersonCircle className="m-2" />
          <div>{`Hello, ${user.first_name}`}</div>
        </div>
        <NavLink to="/" target="_blank" className="text-white">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>LOG OUT</Tooltip>}>
            <div
              className="mx-3 max-vw-25 fs-5"
              onClick={() => {
                handleLogoutButton();
              }}
              role="button"
              aria-label="Logout"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleLogoutButton();
                }
              }}
            >
              <MdLogout className="mx-2" />
            </div>
          </OverlayTrigger>
        </NavLink>
      </div>
    </header>
  );
}

export default AdminHeader;

AdminHeader.propTypes = {
  OpenSidebar: PropTypes.func.isRequired,
};
