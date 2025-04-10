import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const UniversityStaffProfessors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  // Sample data - in a real application, this would come from an API
  const professors = [
    { id: 1, name: 'Professor 1', department: 'Computer Science', specialization: 'AI', status: 'Active', courses: 3 },
    { id: 2, name: 'Professor 2', department: 'Mathematics', specialization: 'Statistics', status: 'Active', courses: 2 },
    { id: 3, name: 'Professor 3', department: 'Physics', specialization: 'Quantum', status: 'Active', courses: 4 },
    { id: 4, name: 'Professor 4', department: 'Computer Science', specialization: 'Networks', status: 'Active', courses: 3 },
    { id: 5, name: 'Professor 5', department: 'Mathematics', specialization: 'Algebra', status: 'Active', courses: 2 },
  ];

  const departments = ['Computer Science', 'Mathematics', 'Physics'];
  const specializations = ['AI', 'Statistics', 'Quantum', 'Networks', 'Algebra'];

  const filteredProfessors = professors.filter(professor => {
    const matchesSearch = professor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || professor.department === selectedDepartment;
    const matchesSpecialization = selectedSpecialization === 'all' || professor.specialization === selectedSpecialization;
    return matchesSearch && matchesDepartment && matchesSpecialization;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="university_staff" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6">Professor Management</h1>
            
            {/* Filters */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Search</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="all">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Specialization</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={selectedSpecialization}
                  onChange={(e) => setSelectedSpecialization(e.target.value)}
                >
                  <option value="all">All Specializations</option>
                  {specializations.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Professor Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Specialization
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Courses
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredProfessors.map((professor) => (
                    <tr key={professor.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{professor.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{professor.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{professor.specialization}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{professor.courses}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          professor.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {professor.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                        <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Professor Button */}
            <div className="mt-6">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add New Professor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityStaffProfessors; 