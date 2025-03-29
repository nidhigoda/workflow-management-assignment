// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';  // Import the AuthProvider
import Layout from './Layouts/Layout';
import WorkflowLayout from './Layouts/WorkflowLayout';
import CreateProcessLayout from './Layouts/CreateProcessLayout';
import ProtectedRoute from './Components/ProtectedRoute';  // Import the ProtectedRoute component

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/workflow" element={<ProtectedRoute element={WorkflowLayout} />} />
            <Route path="/create-process" element={<ProtectedRoute element={CreateProcessLayout} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
