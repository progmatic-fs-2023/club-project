import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../constants';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

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
        setUser(data.user);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(data.user));
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

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false');
    // console.log('User logged out');
  };

  useEffect(() => {
    // Oldalbetöltéskor ellenőrizzük a bejelentkezési állapotot
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
    const storedUser = JSON.parse(localStorage.getItem('user'));

    setIsAuthenticated(storedIsAuthenticated === 'true');
    setUser(storedUser);
    setLoading(false);
  }, []);

  const contextValue = useMemo(
    () => ({ user, isAuthenticated, authenticateUser, login, logout }),
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
