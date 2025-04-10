import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationProps {
  role: 'university_staff' | 'super_admin' | 'teacher';
}

const Navigation: React.FC<NavigationProps> = ({ role }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getButtonClasses = (path: string) => {
    const baseClasses = "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200";
    return isActive(path)
      ? `${baseClasses} bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md`
      : `${baseClasses} text-gray-600 hover:bg-gray-100 hover:text-gray-900`;
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  CompusDZ
                </span>
                <span className="text-xs text-indigo-100">
                  All campus, one app
                </span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4 items-center">
              {role === 'university_staff' ? (
                <>
                  <button
                    onClick={() => navigate('/university-staff')}
                    className={getButtonClasses('/university-staff')}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => navigate('/university-staff/students')}
                    className={getButtonClasses('/university-staff/students')}
                  >
                    Students
                  </button>
                  <button
                    onClick={() => navigate('/university-staff/professors')}
                    className={getButtonClasses('/university-staff/professors')}
                  >
                    Professors
                  </button>
                  <button
                    onClick={() => navigate('/university-staff/analytics')}
                    className={getButtonClasses('/university-staff/analytics')}
                  >
                    Analytics
                  </button>
                  <button
                    onClick={() => navigate('/university-staff/ai-model')}
                    className={getButtonClasses('/university-staff/ai-model')}
                  >
                    AI Meal Prediction
                  </button>
                </>
              ) : role === 'teacher' ? (
                <>
                  <button
                    onClick={() => navigate('/teacher')}
                    className={getButtonClasses('/teacher')}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => navigate('/teacher/courses')}
                    className={getButtonClasses('/teacher/courses')}
                  >
                    My Courses
                  </button>
                  <button
                    onClick={() => navigate('/teacher/students')}
                    className={getButtonClasses('/teacher/students')}
                  >
                    My Students
                  </button>
                  <button
                    onClick={() => navigate('/teacher/schedule')}
                    className={getButtonClasses('/teacher/schedule')}
                  >
                    Schedule
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate('/super-admin')}
                    className={getButtonClasses('/super-admin')}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => navigate('/super-admin/universities')}
                    className={getButtonClasses('/super-admin/universities')}
                  >
                    Universities
                  </button>
                  <button
                    onClick={() => navigate('/super-admin/analytics')}
                    className={getButtonClasses('/super-admin/analytics')}
                  >
                    Analytics
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative">
              <div className="flex items-center space-x-4">
                <span className="text-white text-sm font-medium bg-indigo-700 px-3 py-1 rounded-full">
                  {role === 'university_staff' 
                    ? 'University Staff' 
                    : role === 'teacher' 
                      ? 'Teacher' 
                      : 'Super Admin'}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-white text-indigo-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 transition-all duration-200 shadow-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 