import React, { useState } from 'react';
import Navigation from '../components/Navigation';

// Define a Course type
interface Course {
  id: number;
  code: string;
  name: string;
  level: string;
  semester: string;
  students: number;
  schedule: {
    day: string;
    time: string;
    room: string;
  }[];
  materials: {
    id: number;
    title: string;
    type: string;
    uploadDate: string;
  }[];
  assignments: {
    id: number;
    title: string;
    dueDate: string;
    status: 'active' | 'past' | 'draft';
  }[];
}

const TeacherCourses: React.FC = () => {
  // Sample data
  const courses: Course[] = [
    {
      id: 1,
      code: 'CS301',
      name: 'Advanced Programming',
      level: 'L3',
      semester: 'Fall 2023',
      students: 35,
      schedule: [
        { day: 'Monday', time: '08:30 - 10:00', room: 'Lab 3' },
        { day: 'Wednesday', time: '08:30 - 10:00', room: 'Room 201' }
      ],
      materials: [
        { id: 1, title: 'Introduction to Advanced Concepts', type: 'PDF', uploadDate: '2023-09-10' },
        { id: 2, title: 'Design Patterns Examples', type: 'PDF', uploadDate: '2023-09-17' },
        { id: 3, title: 'Project Requirements', type: 'DOCX', uploadDate: '2023-09-25' },
        { id: 4, title: 'Lab 1 Code Samples', type: 'ZIP', uploadDate: '2023-10-05' }
      ],
      assignments: [
        { id: 1, title: 'Assignment 1: Object-Oriented Design', dueDate: '2023-09-20', status: 'past' },
        { id: 2, title: 'Assignment 2: Design Patterns', dueDate: '2023-10-15', status: 'past' },
        { id: 3, title: 'Midterm Project', dueDate: '2023-11-01', status: 'past' },
        { id: 4, title: 'Assignment 3: Advanced Topics', dueDate: '2023-11-20', status: 'active' },
        { id: 5, title: 'Final Project', dueDate: '2023-12-10', status: 'active' }
      ]
    },
    {
      id: 2,
      code: 'CS302',
      name: 'Data Structures',
      level: 'L2',
      semester: 'Fall 2023',
      students: 42,
      schedule: [
        { day: 'Monday', time: '13:00 - 14:30', room: 'Room 201' },
        { day: 'Thursday', time: '10:30 - 12:00', room: 'Lab 4' }
      ],
      materials: [
        { id: 1, title: 'Introduction to Data Structures', type: 'PDF', uploadDate: '2023-09-12' },
        { id: 2, title: 'Trees and Graphs', type: 'PDF', uploadDate: '2023-09-19' },
        { id: 3, title: 'Hash Tables and Sets', type: 'PDF', uploadDate: '2023-10-03' },
        { id: 4, title: 'Lab Materials', type: 'ZIP', uploadDate: '2023-10-10' }
      ],
      assignments: [
        { id: 1, title: 'Assignment 1: Arrays and Lists', dueDate: '2023-09-25', status: 'past' },
        { id: 2, title: 'Assignment 2: Trees Implementation', dueDate: '2023-10-20', status: 'past' },
        { id: 3, title: 'Assignment 3: Graph Algorithms', dueDate: '2023-11-15', status: 'active' },
        { id: 4, title: 'Final Project: Data Structure Application', dueDate: '2023-12-05', status: 'active' }
      ]
    },
    {
      id: 3,
      code: 'CS407',
      name: 'Machine Learning',
      level: 'M1',
      semester: 'Fall 2023',
      students: 25,
      schedule: [
        { day: 'Wednesday', time: '15:00 - 16:30', room: 'Lab 5' },
        { day: 'Friday', time: '13:00 - 14:30', room: 'Room 305' }
      ],
      materials: [
        { id: 1, title: 'Introduction to Machine Learning', type: 'PDF', uploadDate: '2023-09-14' },
        { id: 2, title: 'Supervised Learning', type: 'PDF', uploadDate: '2023-09-28' },
        { id: 3, title: 'Unsupervised Learning', type: 'PDF', uploadDate: '2023-10-12' },
        { id: 4, title: 'Neural Networks', type: 'PDF', uploadDate: '2023-10-26' },
        { id: 5, title: 'Dataset Examples', type: 'ZIP', uploadDate: '2023-11-02' }
      ],
      assignments: [
        { id: 1, title: 'Assignment 1: Data Preprocessing', dueDate: '2023-09-30', status: 'past' },
        { id: 2, title: 'Assignment 2: Linear Regression', dueDate: '2023-10-21', status: 'past' },
        { id: 3, title: 'Assignment 3: Classification Algorithms', dueDate: '2023-11-11', status: 'active' },
        { id: 4, title: 'Research Paper Review', dueDate: '2023-11-25', status: 'active' },
        { id: 5, title: 'Final Project: ML Application', dueDate: '2023-12-15', status: 'draft' }
      ]
    }
  ];
  
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'materials' | 'assignments'>('overview');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'material' | 'assignment' | null>(null);
  
  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setActiveTab('overview');
  };
  
  const openModal = (type: 'material' | 'assignment') => {
    setModalType(type);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
  };
  
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'past':
        return 'bg-gray-100 text-gray-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="teacher" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-indigo-800">My Courses</h1>
            <button 
              className="btn-primary bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-md font-medium hover:from-indigo-600 hover:to-purple-700"
            >
              Add New Course
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Course List */}
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Course List</h2>
                </div>
                <ul className="divide-y divide-gray-200">
                  {courses.map(course => (
                    <li 
                      key={course.id}
                      className={`cursor-pointer hover:bg-gray-50 transition-colors duration-150 ${selectedCourse?.id === course.id ? 'bg-indigo-50' : ''}`}
                      onClick={() => handleCourseClick(course)}
                    >
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="ml-3">
                              <p className="text-sm font-medium text-indigo-600">{course.code}: {course.name}</p>
                              <p className="text-sm text-gray-500">Level: {course.level} | Students: {course.students}</p>
                            </div>
                          </div>
                          <div>
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Course Details */}
            <div className="md:w-2/3">
              {selectedCourse ? (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {selectedCourse.code}: {selectedCourse.name}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs bg-indigo-100 text-indigo-800">
                        {selectedCourse.semester}
                      </span>
                    </div>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Level: {selectedCourse.level} | Students Enrolled: {selectedCourse.students}
                    </p>
                  </div>
                  
                  {/* Tabs */}
                  <div className="border-b border-gray-200">
                    <nav className="flex -mb-px">
                      <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-6 py-3 font-medium text-sm border-b-2 ${
                          activeTab === 'overview'
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        Overview
                      </button>
                      <button
                        onClick={() => setActiveTab('materials')}
                        className={`px-6 py-3 font-medium text-sm border-b-2 ${
                          activeTab === 'materials'
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        Course Materials
                      </button>
                      <button
                        onClick={() => setActiveTab('assignments')}
                        className={`px-6 py-3 font-medium text-sm border-b-2 ${
                          activeTab === 'assignments'
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        Assignments
                      </button>
                    </nav>
                  </div>
                  
                  {/* Tab Content */}
                  <div className="px-4 py-5 sm:p-6">
                    {activeTab === 'overview' && (
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-4">Schedule</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {selectedCourse.schedule.map((slot, index) => (
                                <tr key={index}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{slot.day}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{slot.time}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{slot.room}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-8">
                          <h4 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                              Take Attendance
                            </button>
                            <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
                              Enter Grades
                            </button>
                            <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700">
                              Post Announcement
                            </button>
                            <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700">
                              Generate Reports
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'materials' && (
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-lg font-medium text-gray-900">Course Materials</h4>
                          <button 
                            onClick={() => openModal('material')}
                            className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md text-sm font-medium"
                          >
                            Upload New Material
                          </button>
                        </div>
                        
                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                          <ul className="divide-y divide-gray-200">
                            {selectedCourse.materials.map(material => (
                              <li key={material.id}>
                                <div className="px-4 py-4 flex items-center justify-between sm:px-6">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                                      {material.type === 'PDF' && (
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                      )}
                                      {material.type === 'DOCX' && (
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                      )}
                                      {material.type === 'ZIP' && (
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                      )}
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-indigo-600">{material.title}</div>
                                      <div className="text-sm text-gray-500">{material.type} • Uploaded on {material.uploadDate}</div>
                                    </div>
                                  </div>
                                  <div className="ml-4 flex items-center space-x-2">
                                    <button className="text-indigo-600 hover:text-indigo-900">
                                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                      </svg>
                                    </button>
                                    <button className="text-indigo-600 hover:text-indigo-900">
                                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                      </svg>
                                    </button>
                                    <button className="text-red-600 hover:text-red-900">
                                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'assignments' && (
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-lg font-medium text-gray-900">Assignments</h4>
                          <button 
                            onClick={() => openModal('assignment')}
                            className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md text-sm font-medium"
                          >
                            Create New Assignment
                          </button>
                        </div>
                        
                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                          <ul className="divide-y divide-gray-200">
                            {selectedCourse.assignments.map(assignment => (
                              <li key={assignment.id}>
                                <div className="px-4 py-4 flex items-center justify-between sm:px-6">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                      </svg>
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-indigo-600">{assignment.title}</div>
                                      <div className="text-sm text-gray-500">Due Date: {assignment.dueDate}</div>
                                    </div>
                                  </div>
                                  <div className="ml-4 flex-shrink-0 flex items-center space-x-4">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(assignment.status)}`}>
                                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                                    </span>
                                    <div className="flex space-x-2">
                                      <button className="text-indigo-600 hover:text-indigo-900">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                      </button>
                                      <button className="text-indigo-600 hover:text-indigo-900">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                      </button>
                                      <button className="text-red-600 hover:text-red-900">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow overflow-hidden flex items-center justify-center p-12">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No course selected</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Select a course from the list to view its details.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Upload Material/Create Assignment Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      {modalType === 'material' ? 'Upload Course Material' : 'Create New Assignment'}
                    </h3>
                    <div className="mt-2">
                      <form className="space-y-4">
                        <div>
                          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        
                        {modalType === 'material' ? (
                          <div>
                            <label htmlFor="file" className="block text-sm font-medium text-gray-700">File</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                  >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                  PDF, DOCX, ZIP up to 10MB
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div>
                              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                              <textarea
                                id="description"
                                name="description"
                                rows={3}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              ></textarea>
                            </div>
                            <div>
                              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
                              <input
                                type="date"
                                name="dueDate"
                                id="dueDate"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div>
                              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                              <select
                                id="status"
                                name="status"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                              >
                                <option value="draft">Draft</option>
                                <option value="active">Active</option>
                              </select>
                            </div>
                          </>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button 
                  type="button" 
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {modalType === 'material' ? 'Upload' : 'Create'}
                </button>
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherCourses; 