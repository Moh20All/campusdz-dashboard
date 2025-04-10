import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationProps {
  role: 'university_staff' | 'super_admin';
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
    const baseClasses = "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium";
    return isActive(path)
      ? `${baseClasses} border-indigo-500 text-gray-900`
      : `${baseClasses} border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700`;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">
                {role === 'university_staff' ? 'University Dashboard' : 'Ministry Dashboard'}
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
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
                <span className="text-gray-700 text-sm">
                  {role === 'university_staff' ? 'University Staff' : 'Super Admin'}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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