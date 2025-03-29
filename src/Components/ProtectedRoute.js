// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate
import { useAuth } from '../utils/AuthContext'; // Access authentication state

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuth(); // Get the authentication status

  // Return either the protected component or redirect to login
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
