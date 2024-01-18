import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

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

    setIsAuthenticated(storedIsAuthenticated === 'true');
    setLoading(false);
  }, []);

  const contextValue = useMemo(() => ({ isAuthenticated, login, logout }), [isAuthenticated]);

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
  children: PropTypes.string.isRequired,
};
