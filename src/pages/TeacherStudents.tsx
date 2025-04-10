import React, { useState } from 'react';
import Navigation from '../components/Navigation';

// Interface for student data
interface Student {
  id: number;
  name: string;
  email: string;
  studentId: string;
  department: string;
  level: string;
  courseName: string;
  courseId: string;
  attendance: number; // percentage
  midtermGrade?: number;
  assignmentsGrade?: number;
  finalGrade?: number;
  overallGrade?: number;
  status: 'active' | 'inactive' | 'at_risk' | 'excellent';
}

const TeacherStudents: React.FC = () => {
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showGradeModal, setShowGradeModal] = useState(false);
  
  // Sample data - in a real app, this would come from an API
  const courses = [
    { id: 'CS301', name: 'Advanced Programming' },
    { id: 'CS302', name: 'Data Structures' },
    { id: 'CS407', name: 'Machine Learning' }
  ];
  
  const levels = ['L1', 'L2', 'L3', 'M1', 'M2'];
  
  const students: Student[] = [
    {
      id: 1,
      name: 'Ahmed Benali',
      email: 'ahmed.benali@univ.dz',
      studentId: 'S201912345',
      department: 'Computer Science',
      level: 'L3',
      courseName: 'Advanced Programming',
      courseId: 'CS301',
      attendance: 92,
      midtermGrade: 16,
      assignmentsGrade: 17,
      finalGrade: 15,
      overallGrade: 16,
      status: 'excellent'
    },
    {
      id: 2,
      name: 'Fatima Zohra',
      email: 'fatima.zohra@univ.dz',
      studentId: 'S201912346',
      department: 'Computer Science',
      level: 'L3',
      courseName: 'Advanced Programming',
      courseId: 'CS301',
      attendance: 88,
      midtermGrade: 14,
      assignmentsGrade: 16,
      finalGrade: 15,
      overallGrade: 15,
      status: 'active'
    },
    {
      id: 3,
      name: 'Mohamed Amine',
      email: 'mohamed.amine@univ.dz',
      studentId: 'S201912347',
      department: 'Computer Science',
      level: 'L3',
      courseName: 'Advanced Programming',
      courseId: 'CS301',
      attendance: 65,
      midtermGrade: 8,
      assignmentsGrade: 10,
      finalGrade: undefined,
      overallGrade: 9,
      status: 'at_risk'
    },
    {
      id: 4,
      name: 'Amina Zaidi',
      email: 'amina.zaidi@univ.dz',
      studentId: 'S201912348',
      department: 'Computer Science',
      level: 'L2',
      courseName: 'Data Structures',
      courseId: 'CS302',
      attendance: 95,
      midtermGrade: 18,
      assignmentsGrade: 19,
      finalGrade: undefined,
      overallGrade: 18.5,
      status: 'excellent'
    },
    {
      id: 5,
      name: 'Karim Lakhdari',
      email: 'karim.lakhdari@univ.dz',
      studentId: 'S201912349',
      department: 'Computer Science',
      level: 'L2',
      courseName: 'Data Structures',
      courseId: 'CS302',
      attendance: 78,
      midtermGrade: 12,
      assignmentsGrade: 13,
      finalGrade: undefined,
      overallGrade: 12.5,
      status: 'active'
    },
    {
      id: 6,
      name: 'Soraya Messaoudi',
      email: 'soraya.messaoudi@univ.dz',
      studentId: 'S201912350',
      department: 'Computer Science',
      level: 'M1',
      courseName: 'Machine Learning',
      courseId: 'CS407',
      attendance: 82,
      midtermGrade: 15,
      assignmentsGrade: 14,
      finalGrade: undefined,
      overallGrade: 14.5,
      status: 'active'
    },
    {
      id: 7,
      name: 'Yacine Benali',
      email: 'yacine.benali@univ.dz',
      studentId: 'S201912351',
      department: 'Computer Science',
      level: 'L2',
      courseName: 'Data Structures',
      courseId: 'CS302',
      attendance: 50,
      midtermGrade: 7,
      assignmentsGrade: 8,
      finalGrade: undefined,
      overallGrade: 7.5,
      status: 'at_risk'
    }
  ];
  
  // Filter students based on search and filter criteria
  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCourse = selectedCourse ? student.courseId === selectedCourse : true;
    const matchesLevel = selectedLevel ? student.level === selectedLevel : true;
    const matchesStatus = selectedStatus ? student.status === selectedStatus : true;
    
    return matchesSearch && matchesCourse && matchesLevel && matchesStatus;
  });
  
  const handleEditGrades = (student: Student) => {
    setSelectedStudent(student);
    setShowGradeModal(true);
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-100 text-green-800';
      case 'active':
        return 'bg-blue-100 text-blue-800';
      case 'at_risk':
        return 'bg-red-100 text-red-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 90) return 'text-green-600';
    if (attendance >= 75) return 'text-blue-600';
    if (attendance >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const getGradeColor = (grade: number | undefined) => {
    if (!grade) return 'text-gray-500';
    if (grade >= 16) return 'text-green-600';
    if (grade >= 13) return 'text-blue-600';
    if (grade >= 10) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="teacher" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-indigo-800">My Students</h1>
            <div className="flex space-x-2">
              <button 
                className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export
              </button>
              <button 
                className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Generate Report
              </button>
            </div>
          </div>
          
          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</label>
                <input
                  type="text"
                  id="search"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search by name, email, or ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
                <select
                  id="course"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                >
                  <option value="">All Courses</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level</label>
                <select
                  id="level"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="">All Levels</option>
                  {levels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  id="status"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="">All Status</option>
                  <option value="excellent">Excellent</option>
                  <option value="active">Active</option>
                  <option value="at_risk">At Risk</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Students Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Midterm</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignments</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Final</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                            <span className="text-indigo-700 font-medium">{student.name.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                            <div className="text-sm text-gray-500">{student.email}</div>
                            <div className="text-xs text-gray-500">{student.studentId}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.courseName}</div>
                        <div className="text-sm text-gray-500">{student.level} - {student.department}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${getAttendanceColor(student.attendance)}`}>
                          {student.attendance}%
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${getGradeColor(student.midtermGrade)}`}>
                          {student.midtermGrade !== undefined ? student.midtermGrade : '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${getGradeColor(student.assignmentsGrade)}`}>
                          {student.assignmentsGrade !== undefined ? student.assignmentsGrade : '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${getGradeColor(student.finalGrade)}`}>
                          {student.finalGrade !== undefined ? student.finalGrade : '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${getGradeColor(student.overallGrade)}`}>
                          {student.overallGrade !== undefined ? student.overallGrade : '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(student.status)}`}>
                          {student.status.replace('_', ' ').charAt(0).toUpperCase() + student.status.replace('_', ' ').slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEditGrades(student)}
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          Edit Grades
                        </button>
                        <button className="text-indigo-600 hover:text-indigo-900">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredStudents.length === 0 && (
              <div className="px-6 py-10 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No students found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Grade Edit Modal */}
      {showGradeModal && selectedStudent && (
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
                      Edit Grades for {selectedStudent.name}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mb-4">
                        Course: {selectedStudent.courseName} ({selectedStudent.courseId})
                      </p>
                      
                      <form className="space-y-4">
                        <div>
                          <label htmlFor="midterm" className="block text-sm font-medium text-gray-700">Midterm Grade (0-20)</label>
                          <input
                            type="number"
                            name="midterm"
                            id="midterm"
                            min="0"
                            max="20"
                            step="0.5"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={selectedStudent.midtermGrade}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="assignments" className="block text-sm font-medium text-gray-700">Assignments Grade (0-20)</label>
                          <input
                            type="number"
                            name="assignments"
                            id="assignments"
                            min="0"
                            max="20"
                            step="0.5"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={selectedStudent.assignmentsGrade}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="final" className="block text-sm font-medium text-gray-700">Final Exam Grade (0-20)</label>
                          <input
                            type="number"
                            name="final"
                            id="final"
                            min="0"
                            max="20"
                            step="0.5"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={selectedStudent.finalGrade}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="attendance" className="block text-sm font-medium text-gray-700">Attendance (%)</label>
                          <input
                            type="number"
                            name="attendance"
                            id="attendance"
                            min="0"
                            max="100"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            defaultValue={selectedStudent.attendance}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                          <select
                            id="status"
                            name="status"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            defaultValue={selectedStudent.status}
                          >
                            <option value="excellent">Excellent</option>
                            <option value="active">Active</option>
                            <option value="at_risk">At Risk</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>
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
                  Save Changes
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowGradeModal(false)}
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

export default TeacherStudents; 