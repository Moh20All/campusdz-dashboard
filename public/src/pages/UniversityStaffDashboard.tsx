import React from 'react';
import Navigation from '../components/Navigation';

const UniversityStaffDashboard: React.FC = () => {
  // Sample data - in a real application, this would come from an API
  const stats = {
    totalStudents: 25000,
    totalProfessors: 850,
    activeCourses: 120,
    upcomingEvents: 5
  };

  const recentActivities = [
    {
      id: 1,
      type: 'enrollment',
      title: 'New Student Enrollment',
      description: '50 new students enrolled in Computer Science department',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'course',
      title: 'Course Update',
      description: 'Advanced Programming course schedule updated',
      time: '4 hours ago'
    },
    {
      id: 3,
      type: 'exam',
      title: 'Exam Results',
      description: 'Final exam results for Data Structures published',
      time: '1 day ago'
    }
  ];

  const importantNotifications = [
    {
      id: 1,
      title: 'Registration Deadline',
      description: 'Last day for course registration is tomorrow',
      priority: 'high'
    },
    {
      id: 2,
      title: 'System Maintenance',
      description: 'Scheduled maintenance this weekend',
      priority: 'medium'
    }
  ];

  // AI Prediction Data
  const performancePredictions = {
    currentSemester: 75,
    nextSemester: 78,
    trend: 'up',
    confidence: 85
  };

  const enrollmentPredictions = {
    currentYear: 25000,
    nextYear: 26500,
    trend: 'up',
    confidence: 90
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="university_staff" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">University Dashboard</h1>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                Generate Report
              </button>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium border border-indigo-600 hover:bg-indigo-50">
                Export Data
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-indigo-100">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Total Students</h3>
                  <p className="text-3xl font-bold text-indigo-600">{stats.totalStudents.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Professors</h3>
                  <p className="text-3xl font-bold text-green-600">{stats.totalProfessors.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Active Courses</h3>
                  <p className="text-3xl font-bold text-blue-600">{stats.activeCourses}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Upcoming Events</h3>
                  <p className="text-3xl font-bold text-purple-600">{stats.upcomingEvents}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Recent Activities</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="p-2 rounded-full bg-gray-100">
                            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                          <p className="text-sm text-gray-500">{activity.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notifications */}
            <div>
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Important Notifications</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {importantNotifications.map((notification) => (
                      <div key={notification.id} className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className={`p-2 rounded-full ${
                            notification.priority === 'high' ? 'bg-red-100' : 'bg-yellow-100'
                          }`}>
                            <svg className={`h-5 w-5 ${
                              notification.priority === 'high' ? 'text-red-600' : 'text-yellow-600'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-gray-900">{notification.title}</h3>
                          <p className="text-sm text-gray-500">{notification.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
                  {/* Student Performance Prediction */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">Student Performance</h3>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">Confidence:</span>
                        <span className="text-sm font-medium text-indigo-600">{performancePredictions.confidence}%</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Current Semester</span>
                        <span className="text-lg font-medium text-gray-900">{performancePredictions.currentSemester}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Next Semester Prediction</span>
                        <div className="flex items-center">
                          <span className="text-lg font-medium text-gray-900">{performancePredictions.nextSemester}%</span>
                          <svg 
                            className={`h-5 w-5 ml-2 ${
                              performancePredictions.trend === 'up' ? 'text-green-500' : 'text-red-500'
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d={performancePredictions.trend === 'up' 
                                ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                                : "M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                              } 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-indigo-500"
                          style={{ width: `${performancePredictions.nextSemester}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Enrollment Prediction */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">Enrollment Trends</h3>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">Confidence:</span>
                        <span className="text-sm font-medium text-indigo-600">{enrollmentPredictions.confidence}%</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Current Year</span>
                        <span className="text-lg font-medium text-gray-900">{enrollmentPredictions.currentYear.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Next Year Prediction</span>
                        <div className="flex items-center">
                          <span className="text-lg font-medium text-gray-900">{enrollmentPredictions.nextYear.toLocaleString()}</span>
                          <svg 
                            className={`h-5 w-5 ml-2 ${
                              enrollmentPredictions.trend === 'up' ? 'text-green-500' : 'text-red-500'
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d={enrollmentPredictions.trend === 'up' 
                                ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                                : "M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                              } 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-indigo-500"
                          style={{ width: `${(enrollmentPredictions.nextYear / enrollmentPredictions.currentYear) * 100}%` }}
                        />
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

export default UniversityStaffDashboard; 