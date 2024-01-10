import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Events from './pages/Events';
import Service from './pages/Service';
import Event from './pages/Event';
import Home from './pages/Home';
import AdminMember from './pages/AdminMember';
import Gallery from './pages/Gallery';
import Membership from './pages/Membership';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './components/AdminDashboard';
import AdminFinance from './components/AdminFinance';
import AdminMembers from './components/AdminMembers';
import AdminGallery from './components/AdminGallery';
import AdminServices from './components/AdminServices';
import AdminEvents from './components/AdminEvents';
import LandingPage from './pages/LandingPage';

function App() {
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
        <Route path="/profile" element={<div>PROFILE</div>} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route
          path="/admin"
          element={<AdminDashboard eventsList={eventsList} servicesList={servicesList} />}
        />
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard eventsList={eventsList} servicesList={servicesList} />}
        />
        <Route path="/admin/members" element={<AdminMembers members={members} />} />
        <Route path="/admin/members/:memberId" element={<AdminMember members={members} />} />
        <Route
          path="/admin/finance"
          element={<AdminFinance eventsList={eventsList} servicesList={servicesList} />}
        />
        <Route path="/admin/services" element={<AdminServices servicesList={servicesList} />} />
        <Route path="/admin/events" element={<AdminEvents eventsList={eventsList} />} />
        <Route
          path="/admin/gallery"
          element={<AdminGallery eventsList={eventsList} servicesList={servicesList} />}
        />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/members" element={<AdminMembers />} />
        <Route path="/admin/members/:memberId" element={<AdminMember />} />
        <Route path="/admin/finance" element={<AdminFinance />} />
        <Route path="/admin/services" element={<AdminServices />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin/gallery" element={<AdminGallery />} />
      </Route>
    </Routes>
  );
}

export default App;
