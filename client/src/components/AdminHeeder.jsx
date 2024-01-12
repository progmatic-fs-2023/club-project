import PropTypes from 'prop-types';
import { BsPersonCircle, BsJustify } from 'react-icons/bs';

function AdminHeader({ OpenSidebar }) {
  return (
    <header className="header d-flex justify-content-between align-items-center px-3 text-secondary bg-dark bg-gradient">
      <div className="menu-icon">
        <BsJustify className="m-1 fs-5" onClick={OpenSidebar} />
      </div>
      <div className="d-flex fs-4 text-light end-0">
        <BsPersonCircle className="m-2" />
        <div>Hello,</div>
      </div>
    </header>
  );
}

export default AdminHeader;

AdminHeader.propTypes = {
  OpenSidebar: PropTypes.func.isRequired,
};
