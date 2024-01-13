import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import AdminHeader from './AdminHeeder';
import AdminSidebar from './AdminSidebar';

function AdminLayout() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className="bg-light">
      <div className="grid-container min-vh-100">
        <AdminHeader OpenSidebar={OpenSidebar} />
        <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
