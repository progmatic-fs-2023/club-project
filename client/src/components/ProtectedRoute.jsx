import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute() {
  const { user } = useAuth();

  return user.is_admin === true ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
