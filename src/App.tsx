import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import UniversityStaffDashboard from './pages/UniversityStaffDashboard';
import UniversityStaffStudents from './pages/UniversityStaffStudents';
import UniversityStaffProfessors from './pages/UniversityStaffProfessors';
import UniversityStaffAnalytics from './pages/UniversityStaffAnalytics';
import UniversityStaffAIModel from './pages/UniversityStaffAIModel';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import SuperAdminUniversities from './pages/SuperAdminUniversities';
import SuperAdminAnalytics from './pages/SuperAdminAnalytics';
import TeacherDashboard from './pages/TeacherDashboard';
import TeacherCourses from './pages/TeacherCourses';
import TeacherStudents from './pages/TeacherStudents';
import TeacherSchedule from './pages/TeacherSchedule';
import ProtectedRoute from './components/ProtectedRoute';
import SponsorBanner from './components/SponsorBanner';

function App() {
  const [showBanner, setShowBanner] = useState(false);
  
  // Check session storage on component mount
  useEffect(() => {
    const hasShownBanner = sessionStorage.getItem('hasShownSponsorBanner');
    if (hasShownBanner !== 'true') {
      // Show banner when user is authenticated
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (isAuthenticated === 'true') {
        setShowBanner(true);
        // Mark as shown for this session
        sessionStorage.setItem('hasShownSponsorBanner', 'true');
      }
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {showBanner && <SponsorBanner onClose={() => setShowBanner(false)} />}
        <Routes>
          <Route path="/login" element={<Login onLoginSuccess={() => setShowBanner(true)} />} />
          
          {/* University Staff Routes */}
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
            path="/university-staff/ai-model"
            element={
              <ProtectedRoute role="university_staff">
                <UniversityStaffAIModel />
              </ProtectedRoute>
            }
          />
          
          {/* Super Admin Routes */}
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
          
          {/* Teacher Routes */}
          <Route
            path="/teacher"
            element={
              <ProtectedRoute role="teacher">
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/courses"
            element={
              <ProtectedRoute role="teacher">
                <TeacherCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/students"
            element={
              <ProtectedRoute role="teacher">
                <TeacherStudents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher/schedule"
            element={
              <ProtectedRoute role="teacher">
                <TeacherSchedule />
              </ProtectedRoute>
            }
          />
          
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
