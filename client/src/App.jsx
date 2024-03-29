import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Events from './pages/Events';
import Service from './pages/Service';
import Event from './pages/Event';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AdminMember from './pages/AdminMember';
import Gallery from './pages/Gallery';
import Membership from './pages/Membership';
import AdminLayout from './components/AdminLayout';
import AdminFinance from './components/AdminFinance';
import AdminMembers from './components/AdminMembers';
import AdminEvents from './components/AdminEvents';
import AdminBookings from './components/AdminBookings';
import AdminServiceBookings from './components/AdminServiceBookings';
import Booking from './pages/Booking';
import LandingPage from './pages/LandingPage';
import NewPasswordPage from './pages/NewPasswordPage';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');

    if (storedIsAuthenticated === 'true') {
      login();
    }
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventName" element={<Event />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceName" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/:serviceIdFromParams" element={<Booking />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/newpasswordpage" element={<NewPasswordPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminMembers />} />
          <Route path="/admin/members" element={<AdminMembers />} />
          <Route path="/admin/members/:memberId" element={<AdminMember />} />
          <Route path="/admin/finance" element={<AdminFinance />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/servicebookings" element={<AdminServiceBookings />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
