import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { MdOutlineSportsTennis } from 'react-icons/md';
import { LuPartyPopper } from 'react-icons/lu';

function AdminSidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={
        openSidebarToggle
          ? 'h-100 overflow-auto bg-dark bg-gradient d-inline position-absolute z-3'
          : 'h-100 overflow-auto bg-dark bg-gradient'
      }
    >
      <div className="sidebar-title bg-dark d-flex align-items-center justify-content-between text-secondary p-3 px-4 border-bottom border-secondary ">
        <div className="w-25">
          <NavLink as={NavLink} to="/" target="_blank">
            <img
              src="/src/assets/door_logo_w.png"
              alt="door logo"
              className="sidebar-logo h-md-15 w-md-15"
            />
          </NavLink>
        </div>

        <div className="fs-6 fw-bold mt-2 text-white">THE DOOR CLUB</div>
        <span
          className="m-1 fs-5 pe-auto m-3 text-white"
          onClick={OpenSidebar}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              OpenSidebar();
            }
          }}
        >
          {' '}
          X{' '}
        </span>
      </div>

      <ul className="menu-list list-unstyled">
        <Link to="admin/members" className="link-light-gray text-decoration-none">
          <li className="p-4 fs-6 bg-dark m-0">
            {' '}
            <BsPeopleFill className="m-1 fs-5" /> Users
          </li>
        </Link>
        <Link to="admin/finance" className="link-light-gray text-decoration-none">
          <li className="p-4 fs-6 bg-dark m-0">
            {' '}
            <FaMoneyCheckAlt className="m-1 fs-5" /> Finance
          </li>
        </Link>
        <Link to="admin/services" className="link-light-gray text-decoration-none">
          <li className="p-4 fs-6 bg-dark m-0 ">
            <MdOutlineSportsTennis className="m-1 fs-5" /> Services
          </li>
        </Link>
        <Link to="admin/events" className="link-light-gray text-decoration-none">
          <li className="p-4 fs-6 bg-dark">
            <LuPartyPopper className="m-1 fs-5" /> Events
          </li>
        </Link>
        <Link to="admin/gallery" className="link-light-gray text-decoration-none">
          <li className="p-4 fs-6 bg-dark">
            <BsFillGrid3X3GapFill className="m-1 fs-5" /> Gallery
          </li>
        </Link>
      </ul>
    </aside>
  );
}

export default AdminSidebar;

AdminSidebar.propTypes = {
  openSidebarToggle: PropTypes.bool.isRequired,
  OpenSidebar: PropTypes.func.isRequired,
};
