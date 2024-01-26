import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../constants';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    id: null,
    firstName: null,
    lastName: null,
    username: null,
    gender: null,
    email: null,
    memberImg: null,
    membership: null,
    membershipStartTime: null,
    membershipEndTime: null,
    newsletter: null,
    isVerified: null,
    isPayed: null,
    isAdmin: null,
    password: null,
    phone: null,
  });
  // console.log(user)

  const resetUser = {
    id: null,
    firstName: null,
    lastName: null,
    username: null,
    gender: null,
    email: null,
    memberImg: null,
    membership: null,
    membershipStartTime: null,
    membershipEndTime: null,
    newsletter: null,
    isVerified: null,
    isPayed: null,
    isAdmin: null,
    password: null,
    phone: null,
  };

  const token = localStorage.getItem('token');
  // console.log(`token: ${token}`);

  // console.log(localStorage.user)

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.setItem('user', JSON.stringify(resetUser));
    localStorage.removeItem('token');

    // console.log('User logged out');
  };

  let timeoutId;

  function setupAutoLogout(timeoutMinutes) {
    const timeoutMilliseconds = timeoutMinutes * 60 * 1000; // Átváltás percről milliszekundumra

    // Az automatikus kijelentkezés
    function logoutAut() {
      logout();

      // console.log('Automatikus kijelentkezés');
    }

    // Figyeljük a felhasználói interakciót
    function resetLogoutTimer() {
      clearTimeout(timeoutId); // Töröljük az előző időzítőt
      timeoutId = setTimeout(logoutAut, timeoutMilliseconds); // Állítsunk be egy új időzítőt
    }

    // Az oldalon való tevékenység figyelése
    document.addEventListener('mousemove', resetLogoutTimer);
    document.addEventListener('mousedown', resetLogoutTimer);
    document.addEventListener('keypress', resetLogoutTimer);
    document.addEventListener('touchmove', resetLogoutTimer);
    document.addEventListener('scroll', resetLogoutTimer);

    // Az időzítő inicializálása az oldal betöltésekor
    resetLogoutTimer();
  }

  // Tesztelés: 15 perces automatikus kijelentkezés
  setupAutoLogout(10);

  const authenticateUser = async (values) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (!response.ok || (data.success !== undefined && !data.success)) {
        throw new Error('Login failed');
      }

      if (response.ok) {
        setIsAuthenticated(true);
        setUser({
          id: data.user.id,
          firstName: data.user.first_name,
          lastName: data.user.last_name,
          username: data.user.username,
          gender: data.user.gender,
          email: data.user.email,
          memberImg: data.user.member_img,
          membership: data.user.membership,
          membershipStartTime: data.user.membership_start_time,
          membershipEndTime: data.user.membership_end_time,
          newsletter: data.user.newsletter,
          isVerified: data.user.is_verified,
          isPayed: data.user.is_payed,
          isAdmin: data.user.is_admin,
          password: data.user.password,
          phone: data.user.phone,
        });
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.user.id);
        // const token = localStorage.getItem('token');
        // console.log(`token: ${token}`);
      } else {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.setItem('isAuthenticated', 'false');
        localStorage.removeItem('user');
        // console.log('Unsuccessful login:', data);
      }
    } catch (error) {
      // console.error('Error during authentication:', error);
      setIsAuthenticated(false);
      localStorage.setItem('isAuthenticated', 'false');
      localStorage.removeItem('user');
      setUser(null);
      throw error;
    }
  };

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    // console.log('User logged in');
  };

  if (user.id != null || user !== null) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${API_URL}/api/updateUsers`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }

          const data = await response.json();
          setUser(data); // Felhasználó adatainak frissítése
        } catch (error) {
          // console.error('Error fetching user data:', error);
        }
      };

      // Oldalbetöltéskor és minden 60 másodpercben frissítjük a felhasználó adatait
      fetchData();
      // const interval = setInterval(fetchData, 60000);

      // return () => clearInterval(interval); // Időzítő leállítása a komponens megszűnésekor
    }, []);
  }

  useEffect(() => {
    // console.log(user)
    // Oldalbetöltéskor ellenőrizzük a bejelentkezési állapotot
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    // console.log(storedUser)
    setIsAuthenticated(storedIsAuthenticated === 'true');
    if (user.id != null) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const contextValue = useMemo(
    () => ({ user, isAuthenticated, authenticateUser, login, logout, setUser }),
    [isAuthenticated, user],
  );

  return (
    <AuthContext.Provider value={contextValue}>{loading ? null : children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
