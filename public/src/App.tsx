import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import UniversityStaffDashboard from './pages/UniversityStaffDashboard';
import UniversityStaffStudents from './pages/UniversityStaffStudents';
import UniversityStaffProfessors from './pages/UniversityStaffProfessors';
import UniversityStaffAnalytics from './pages/UniversityStaffAnalytics';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import SuperAdminUniversities from './pages/SuperAdminUniversities';
import SuperAdminAnalytics from './pages/SuperAdminAnalytics';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/university-staff"
            element={
              <ProtectedRoute role="university_staff">
                <UniversityStaffDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/university-staff/students"
            element={
              <ProtectedRoute role="university_staff">
                <UniversityStaffStudents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/university-staff/professors"
            element={
              <ProtectedRoute role="university_staff">
                <UniversityStaffProfessors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/university-staff/analytics"
            element={
              <ProtectedRoute role="university_staff">
                <UniversityStaffAnalytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/super-admin"
            element={
              <ProtectedRoute role="super_admin">
                <SuperAdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/super-admin/universities"
            element={
              <ProtectedRoute role="super_admin">
                <SuperAdminUniversities />
              </ProtectedRoute>
            }
          />
          <Route
            path="/super-admin/analytics"
            element={
              <ProtectedRoute role="super_admin">
                <SuperAdminAnalytics />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
