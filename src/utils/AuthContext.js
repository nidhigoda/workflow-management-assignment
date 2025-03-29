import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthContext provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check localStorage for stored user credentials when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Retrieve the user object from localStorage
    const storedAuth = localStorage.getItem('isAuthenticated');
    
    if (storedUser && storedAuth) {
      setUser(JSON.parse(storedUser)); // Parse and set the user data (email and password)
      setIsAuthenticated(JSON.parse(storedAuth)); // Set the authentication state
    }
  }, []);

  // Simulate login (you would call an API for real authentication)
  const login = (userDetails) => {
    setUser(userDetails); // Set user details (email and password object)
    setIsAuthenticated(true); // Set the user as authenticated
    // Save to localStorage to persist the session
    localStorage.setItem('user', JSON.stringify(userDetails)); // Save user object to localStorage
    localStorage.setItem('isAuthenticated', true); // Save the authentication state
  };

  // Simulate logout
  const logout = () => {
    setUser(null); // Clear user details
    setIsAuthenticated(false); // Set authentication state to false
    // Clear from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
