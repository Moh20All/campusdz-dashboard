import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Test accounts
const TEST_ACCOUNTS = {
  university_staff: {
    email: 'staff@university.dz',
    password: 'staff123',
    role: 'university_staff'
  },
  super_admin: {
    email: 'admin@ministry.dz',
    password: 'admin123',
    role: 'super_admin'
  },
  teacher: {
    email: 'teacher@university.dz',
    password: 'teacher123',
    role: 'teacher'
  }
};

interface LoginProps {
  onLoginSuccess?: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'university_staff' | 'super_admin' | 'teacher'>('university_staff');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check if the credentials match any test account
    const account = TEST_ACCOUNTS[role];
    if (email === account.email && password === account.password) {
      // Store authentication state (in a real app, this would be a token)
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', role);
      
      // Call the onLoginSuccess callback if provided
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      
      if (role === 'university_staff') {
        navigate('/university-staff');
      } else if (role === 'teacher') {
        navigate('/teacher');
      } else {
        navigate('/super-admin');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 rounded-xl shadow-2xl p-8">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600 flex items-center justify-center">
            <svg className="h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-gray-900 tracking-tight">
            CompusDZ
          </h1>
          <p className="mt-2 text-center text-sm text-indigo-600 font-medium">
            All campus, one app
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={role}
              onChange={(e) => setRole(e.target.value as 'university_staff' | 'super_admin' | 'teacher')}
            >
              <option value="university_staff">University Staff</option>
              <option value="super_admin">Super Admin</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    {error}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        
        {/* Test Accounts Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Test Accounts</h3>
          <div className="space-y-4">
            <div className="bg-indigo-50 p-3 rounded-md">
              <h4 className="text-xs font-semibold text-indigo-800 uppercase">University Staff</h4>
              <div className="mt-2 grid grid-cols-2 gap-1">
                <div className="text-xs text-gray-500">Email:</div>
                <div className="text-xs font-medium text-gray-700">{TEST_ACCOUNTS.university_staff.email}</div>
                <div className="text-xs text-gray-500">Password:</div>
                <div className="text-xs font-medium text-gray-700">{TEST_ACCOUNTS.university_staff.password}</div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-md">
              <h4 className="text-xs font-semibold text-purple-800 uppercase">Super Admin</h4>
              <div className="mt-2 grid grid-cols-2 gap-1">
                <div className="text-xs text-gray-500">Email:</div>
                <div className="text-xs font-medium text-gray-700">{TEST_ACCOUNTS.super_admin.email}</div>
                <div className="text-xs text-gray-500">Password:</div>
                <div className="text-xs font-medium text-gray-700">{TEST_ACCOUNTS.super_admin.password}</div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-md">
              <h4 className="text-xs font-semibold text-blue-800 uppercase">Teacher</h4>
              <div className="mt-2 grid grid-cols-2 gap-1">
                <div className="text-xs text-gray-500">Email:</div>
                <div className="text-xs font-medium text-gray-700">{TEST_ACCOUNTS.teacher.email}</div>
                <div className="text-xs text-gray-500">Password:</div>
                <div className="text-xs font-medium text-gray-700">{TEST_ACCOUNTS.teacher.password}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 