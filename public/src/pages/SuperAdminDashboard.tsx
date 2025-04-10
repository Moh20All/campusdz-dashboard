import React from 'react';
import Navigation from '../components/Navigation';

const SuperAdminDashboard: React.FC = () => {
  // Sample data - in a real application, this would come from an API
  const nationalStats = {
    totalUniversities: 45,
    totalStudents: 500000,
    totalProfessors: 15000,
    averageGraduationRate: 85
  };

  const regionalStats = [
    { region: 'North', universities: 25, students: 300000 },
    { region: 'Center', universities: 12, students: 120000 },
    { region: 'South', universities: 8, students: 80000 }
  ];

  const recentUpdates = [
    {
      id: 1,
      type: 'policy',
      title: 'New Education Policy',
      description: 'Ministry announces new higher education reforms',
      time: '2 days ago'
    },
    {
      id: 2,
      type: 'funding',
      title: 'Research Funding',
      description: 'New research grants available for universities',
      time: '3 days ago'
    },
    {
      id: 3,
      type: 'event',
      title: 'National Conference',
      description: 'Annual higher education conference next month',
      time: '1 week ago'
    }
  ];

  const systemAlerts = [
    {
      id: 1,
      title: 'System Update Required',
      description: 'Critical security update available',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Data Backup',
      description: 'Scheduled backup this weekend',
      priority: 'medium'
    }
  ];

  // AI Prediction Data
  const nationalTrends = {
    graduationRate: {
      current: 85,
      predicted: 87,
      trend: 'up',
      confidence: 88
    },
    researchOutput: {
      current: 1200,
      predicted: 1350,
      trend: 'up',
      confidence: 82
    }
  };

  const universityPerformance = {
    topPerforming: [
      { name: 'University of Algiers', score: 92, trend: 'up' },
      { name: 'USTHB', score: 89, trend: 'up' },
      { name: 'University of Oran', score: 85, trend: 'stable' }
    ],
    improvementNeeded: [
      { name: 'University of Constantine', score: 68, trend: 'down' },
      { name: 'University of Annaba', score: 72, trend: 'stable' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="super_admin" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Ministry Dashboard</h1>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                Generate Report
              </button>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium border border-indigo-600 hover:bg-indigo-50">
                Export Data
              </button>
            </div>
          </div>

          {/* National Education Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-indigo-100">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Total Universities</h3>
                  <p className="text-3xl font-bold text-indigo-600">{nationalStats.totalUniversities}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Total Students</h3>
                  <p className="text-3xl font-bold text-green-600">{nationalStats.totalStudents.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Total Professors</h3>
                  <p className="text-3xl font-bold text-blue-600">{nationalStats.totalProfessors.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Graduation Rate</h3>
                  <p className="text-3xl font-bold text-purple-600">{nationalStats.averageGraduationRate}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Regional Distribution */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Regional Distribution</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {regionalStats.map((region, index) => (
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
                              style={{ width: `${(region.students / Math.max(...regionalStats.map(r => r.students))) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Updates */}
            <div>
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Recent Updates</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentUpdates.map((update) => (
                      <div key={update.id} className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="p-2 rounded-full bg-gray-100">
                            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-gray-900">{update.title}</h3>
                          <p className="text-sm text-gray-500">{update.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{update.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Alerts */}
          <div className="mt-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">System Alerts</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className={`p-2 rounded-full ${
                          alert.priority === 'high' ? 'bg-red-100' : 'bg-yellow-100'
                        }`}>
                          <svg className={`h-5 w-5 ${
                            alert.priority === 'high' ? 'text-red-600' : 'text-yellow-600'
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{alert.title}</h3>
                        <p className="text-sm text-gray-500">{alert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Predictions Section */}
          <div className="mt-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">AI Predictions</h2>
                <p className="text-sm text-gray-500 mt-1">Powered by Linear Regression Models</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* National Trends */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">National Education Trends</h3>
                    
                    {/* Graduation Rate Prediction */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">Graduation Rate</span>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-2">Confidence:</span>
                          <span className="text-sm font-medium text-indigo-600">{nationalTrends.graduationRate.confidence}%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Current</span>
                        <span className="text-lg font-medium text-gray-900">{nationalTrends.graduationRate.current}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Next Year Prediction</span>
                        <div className="flex items-center">
                          <span className="text-lg font-medium text-gray-900">{nationalTrends.graduationRate.predicted}%</span>
                          <svg 
                            className={`h-5 w-5 ml-2 ${
                              nationalTrends.graduationRate.trend === 'up' ? 'text-green-500' : 'text-red-500'
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d={nationalTrends.graduationRate.trend === 'up' 
                                ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                                : "M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                              } 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Research Output Prediction */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">Research Output</span>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-2">Confidence:</span>
                          <span className="text-sm font-medium text-indigo-600">{nationalTrends.researchOutput.confidence}%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Current</span>
                        <span className="text-lg font-medium text-gray-900">{nationalTrends.researchOutput.current}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Next Year Prediction</span>
                        <div className="flex items-center">
                          <span className="text-lg font-medium text-gray-900">{nationalTrends.researchOutput.predicted}</span>
                          <svg 
                            className={`h-5 w-5 ml-2 ${
                              nationalTrends.researchOutput.trend === 'up' ? 'text-green-500' : 'text-red-500'
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d={nationalTrends.researchOutput.trend === 'up' 
                                ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                                : "M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                              } 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* University Performance */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">University Performance</h3>
                    
                    {/* Top Performing Universities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Top Performing</h4>
                      <div className="space-y-2">
                        {universityPerformance.topPerforming.map((uni, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{uni.name}</span>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-900 mr-2">{uni.score}</span>
                              <svg 
                                className={`h-4 w-4 ${
                                  uni.trend === 'up' ? 'text-green-500' : uni.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                                }`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth="2" 
                                  d={uni.trend === 'up' 
                                    ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                                    : uni.trend === 'down'
                                    ? "M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                                    : "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  } 
                                />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Improvement Needed */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Improvement Needed</h4>
                      <div className="space-y-2">
                        {universityPerformance.improvementNeeded.map((uni, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{uni.name}</span>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-900 mr-2">{uni.score}</span>
                              <svg 
                                className={`h-4 w-4 ${
                                  uni.trend === 'up' ? 'text-green-500' : uni.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                                }`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth="2" 
                                  d={uni.trend === 'up' 
                                    ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                                    : uni.trend === 'down'
                                    ? "M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                                    : "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  } 
                                />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-500">
                  <p>Predictions are based on historical data and linear regression analysis. Models are updated monthly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard; 