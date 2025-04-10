import React from 'react';
import Navigation from '../components/Navigation';

const SuperAdminAnalytics: React.FC = () => {
  // Sample data - in a real application, this would come from an API
  const universityStats = {
    totalUniversities: 45,
    totalStudents: 500000,
    totalProfessors: 15000,
    averageGraduationRate: 85
  };

  const regionalDistribution = [
    { region: 'North', universities: 25, students: 300000 },
    { region: 'Center', universities: 12, students: 120000 },
    { region: 'South', universities: 8, students: 80000 }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="super_admin" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-bold mb-6">National Education Analytics</h1>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Total Universities</h3>
              <p className="mt-2 text-3xl font-bold text-indigo-600">{universityStats.totalUniversities}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Total Students</h3>
              <p className="mt-2 text-3xl font-bold text-green-600">{universityStats.totalStudents.toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Total Professors</h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">{universityStats.totalProfessors.toLocaleString()}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Average Graduation Rate</h3>
              <p className="mt-2 text-3xl font-bold text-purple-600">{universityStats.averageGraduationRate}%</p>
            </div>
          </div>

          {/* Regional Distribution */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Regional Distribution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {regionalDistribution.map((region, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900">{region.region}</h3>
                  <div className="mt-2 space-y-2">
                    <div>
                      <span className="text-sm text-gray-500">Universities: </span>
                      <span className="font-medium">{region.universities}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Students: </span>
                      <span className="font-medium">{region.students.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-indigo-500"
                        style={{ width: `${(region.students / Math.max(...regionalDistribution.map(r => r.students))) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Research Output</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Publications</span>
                    <span className="text-sm text-gray-500">1,200 papers</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-green-500" style={{ width: '75%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Citations</span>
                    <span className="text-sm text-gray-500">5,000 citations</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-blue-500" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">International Collaboration</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Exchange Programs</span>
                    <span className="text-sm text-gray-500">45 programs</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-purple-500" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">International Students</span>
                    <span className="text-sm text-gray-500">2,500 students</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-yellow-500" style={{ width: '40%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminAnalytics; 