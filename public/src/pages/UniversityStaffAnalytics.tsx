import React from 'react';
import Navigation from '../components/Navigation';

const UniversityStaffAnalytics: React.FC = () => {
  // Sample data - in a real application, this would come from an API
  const enrollmentData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    values: [1200, 1350, 1500, 1650, 1800]
  };

  const departmentDistribution = [
    { name: 'Computer Science', students: 450 },
    { name: 'Mathematics', students: 300 },
    { name: 'Physics', students: 250 },
    { name: 'Chemistry', students: 200 },
    { name: 'Biology', students: 150 }
  ];

  const performanceMetrics = {
    averageGPA: 3.2,
    graduationRate: 85,
    retentionRate: 92,
    employmentRate: 78
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="university_staff" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-bold mb-6">University Analytics</h1>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Average GPA</h3>
              <p className="mt-2 text-3xl font-bold text-indigo-600">{performanceMetrics.averageGPA}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Graduation Rate</h3>
              <p className="mt-2 text-3xl font-bold text-green-600">{performanceMetrics.graduationRate}%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Retention Rate</h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">{performanceMetrics.retentionRate}%</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">Employment Rate</h3>
              <p className="mt-2 text-3xl font-bold text-purple-600">{performanceMetrics.employmentRate}%</p>
            </div>
          </div>

          {/* Enrollment Trends */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Enrollment Trends</h2>
            <div className="h-64 bg-gray-50 rounded-lg p-4">
              {/* In a real application, this would be a chart component */}
              <div className="flex items-end h-full">
                {enrollmentData.values.map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-indigo-500 rounded-t"
                      style={{ height: `${(value / Math.max(...enrollmentData.values)) * 100}%` }}
                    />
                    <span className="text-xs mt-2">{enrollmentData.labels[index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Department Distribution */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Department Distribution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-64 bg-gray-50 rounded-lg p-4">
                {/* In a real application, this would be a pie chart component */}
                <div className="flex flex-wrap justify-center">
                  {departmentDistribution.map((dept, index) => (
                    <div key={index} className="w-1/2 p-2">
                      <div className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded-full mr-2"
                          style={{ backgroundColor: `hsl(${index * 60}, 70%, 50%)` }}
                        />
                        <span className="text-sm">{dept.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {departmentDistribution.map((dept, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{dept.name}</span>
                      <span className="text-sm text-gray-500">{dept.students} students</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full"
                        style={{ 
                          width: `${(dept.students / Math.max(...departmentDistribution.map(d => d.students))) * 100}%`,
                          backgroundColor: `hsl(${index * 60}, 70%, 50%)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Course Performance</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Advanced Programming</span>
                    <span className="text-sm text-gray-500">85% pass rate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-green-500" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Data Structures</span>
                    <span className="text-sm text-gray-500">78% pass rate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-yellow-500" style={{ width: '78%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Algorithms</span>
                    <span className="text-sm text-gray-500">92% pass rate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-blue-500" style={{ width: '92%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Research Output</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Publications</span>
                    <span className="text-sm text-gray-500">45 papers</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-purple-500" style={{ width: '75%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Citations</span>
                    <span className="text-sm text-gray-500">120 citations</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-red-500" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Research Grants</span>
                    <span className="text-sm text-gray-500">8 active grants</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-indigo-500" style={{ width: '40%' }} />
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

export default UniversityStaffAnalytics; 