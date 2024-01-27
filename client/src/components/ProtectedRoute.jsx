import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute() {
  const { user } = useAuth();

  if (user.id === null) {
    return <Navigate to="/" />;
  }
  return user.isAdmin === true ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
