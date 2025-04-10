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
  }
};

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'university_staff' | 'super_admin'>('university_staff');
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
      
      if (role === 'university_staff') {
        navigate('/university-staff');
      } else {
        navigate('/super-admin');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={role}
              onChange={(e) => setRole(e.target.value as 'university_staff' | 'super_admin')}
            >
              <option value="university_staff">University Staff</option>
              <option value="super_admin">Super Admin</option>
            </select>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>

          <div className="text-sm text-center text-gray-600">
            <p>Test Accounts:</p>
            <p>University Staff: staff@university.dz / staff123</p>
            <p>Super Admin: admin@ministry.dz / admin123</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 