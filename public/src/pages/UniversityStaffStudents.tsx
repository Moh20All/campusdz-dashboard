import React, { useState } from 'react';
import Navigation from '../components/Navigation';

interface Student {
  id: number;
  name: string;
  department: string;
  level: string;
  gpa: number;
  status: 'active' | 'inactive' | 'graduated';
  email: string;
  phone: string;
  enrollmentDate: string;
  modules: {
    semester1: Array<{
      name: string;
      code: string;
      credits: number;
      absences: number;
      grade: number;
    }>;
    semester2: Array<{
      name: string;
      code: string;
      credits: number;
      absences: number;
      grade: number;
    }>;
  };
}

const UniversityStaffStudents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // Sample data - in a real application, this would come from an API
  const students: Student[] = [
    {
      id: 1,
      name: 'Ahmed Benali',
      department: 'Computer Science',
      level: 'L3',
      gpa: 3.8,
      status: 'active',
      email: 'ahmed.benali@univ.dz',
      phone: '+213 555 123 456',
      enrollmentDate: '2021-09-01',
      modules: {
        semester1: [
          { name: 'Advanced Programming', code: 'CS301', credits: 4, absences: 2, grade: 18 },
          { name: 'Data Structures', code: 'CS302', credits: 3, absences: 1, grade: 16 },
          { name: 'Database Systems', code: 'CS303', credits: 3, absences: 0, grade: 15 },
          { name: 'Operating Systems', code: 'CS304', credits: 3, absences: 3, grade: 12 },
          { name: 'Computer Networks', code: 'CS305', credits: 3, absences: 1, grade: 14 },
          { name: 'Software Engineering', code: 'CS306', credits: 3, absences: 2, grade: 17 },
          { name: 'Artificial Intelligence', code: 'CS307', credits: 3, absences: 0, grade: 19 },
          { name: 'Web Development', code: 'CS308', credits: 3, absences: 1, grade: 16 },
          { name: 'Mobile Development', code: 'CS309', credits: 3, absences: 2, grade: 13 },
          { name: 'Project Management', code: 'CS310', credits: 3, absences: 1, grade: 15 }
        ],
        semester2: [
          { name: 'Machine Learning', code: 'CS311', credits: 4, absences: 1, grade: 17 },
          { name: 'Cloud Computing', code: 'CS312', credits: 3, absences: 0, grade: 16 },
          { name: 'Cybersecurity', code: 'CS313', credits: 3, absences: 2, grade: 14 },
          { name: 'Big Data', code: 'CS314', credits: 3, absences: 1, grade: 15 },
          { name: 'IoT Systems', code: 'CS315', credits: 3, absences: 0, grade: 18 },
          { name: 'Blockchain', code: 'CS316', credits: 3, absences: 1, grade: 12 },
          { name: 'Computer Vision', code: 'CS317', credits: 3, absences: 2, grade: 11 },
          { name: 'Natural Language Processing', code: 'CS318', credits: 3, absences: 0, grade: 16 },
          { name: 'Game Development', code: 'CS319', credits: 3, absences: 1, grade: 14 },
          { name: 'Research Project', code: 'CS320', credits: 6, absences: 0, grade: 19 }
        ]
      }
    },
    {
      id: 2,
      name: 'Fatima Zohra',
      department: 'Mathematics',
      level: 'M1',
      gpa: 3.9,
      status: 'active',
      email: 'fatima.zohra@univ.dz',
      phone: '+213 555 789 012',
      enrollmentDate: '2020-09-01',
      modules: {
        semester1: [
          { name: 'Advanced Calculus', code: 'MATH401', credits: 4, absences: 1, grade: 18 },
          { name: 'Linear Algebra', code: 'MATH402', credits: 3, absences: 0, grade: 17 },
          { name: 'Differential Equations', code: 'MATH403', credits: 3, absences: 2, grade: 16 },
          { name: 'Number Theory', code: 'MATH404', credits: 3, absences: 1, grade: 19 },
          { name: 'Topology', code: 'MATH405', credits: 3, absences: 0, grade: 15 },
          { name: 'Complex Analysis', code: 'MATH406', credits: 3, absences: 1, grade: 17 },
          { name: 'Algebraic Geometry', code: 'MATH407', credits: 3, absences: 2, grade: 14 },
          { name: 'Mathematical Logic', code: 'MATH408', credits: 3, absences: 0, grade: 18 },
          { name: 'Probability Theory', code: 'MATH409', credits: 3, absences: 1, grade: 16 },
          { name: 'Statistics', code: 'MATH410', credits: 3, absences: 0, grade: 17 }
        ],
        semester2: [
          { name: 'Functional Analysis', code: 'MATH411', credits: 4, absences: 1, grade: 19 },
          { name: 'Partial Differential Equations', code: 'MATH412', credits: 3, absences: 0, grade: 18 },
          { name: 'Group Theory', code: 'MATH413', credits: 3, absences: 2, grade: 17 },
          { name: 'Ring Theory', code: 'MATH414', credits: 3, absences: 1, grade: 16 },
          { name: 'Field Theory', code: 'MATH415', credits: 3, absences: 0, grade: 19 },
          { name: 'Graph Theory', code: 'MATH416', credits: 3, absences: 1, grade: 15 },
          { name: 'Combinatorics', code: 'MATH417', credits: 3, absences: 2, grade: 18 },
          { name: 'Numerical Analysis', code: 'MATH418', credits: 3, absences: 0, grade: 17 },
          { name: 'Mathematical Modeling', code: 'MATH419', credits: 3, absences: 1, grade: 19 },
          { name: 'Research Seminar', code: 'MATH420', credits: 6, absences: 0, grade: 18 }
        ]
      }
    },
    {
      id: 3,
      name: 'Mohamed Amine',
      department: 'Physics',
      level: 'L2',
      gpa: 3.5,
      status: 'active',
      email: 'mohamed.amine@univ.dz',
      phone: '+213 555 345 678',
      enrollmentDate: '2022-09-01',
      modules: {
        semester1: [
          { name: 'Classical Mechanics', code: 'PHY201', credits: 4, absences: 2, grade: 17 },
          { name: 'Electromagnetism', code: 'PHY202', credits: 3, absences: 1, grade: 15 },
          { name: 'Thermodynamics', code: 'PHY203', credits: 3, absences: 0, grade: 16 },
          { name: 'Quantum Mechanics', code: 'PHY204', credits: 3, absences: 3, grade: 14 },
          { name: 'Optics', code: 'PHY205', credits: 3, absences: 1, grade: 18 },
          { name: 'Nuclear Physics', code: 'PHY206', credits: 3, absences: 2, grade: 19 },
          { name: 'Solid State Physics', code: 'PHY207', credits: 3, absences: 0, grade: 17 },
          { name: 'Astrophysics', code: 'PHY208', credits: 3, absences: 1, grade: 16 },
          { name: 'Particle Physics', code: 'PHY209', credits: 3, absences: 2, grade: 15 },
          { name: 'Computational Physics', code: 'PHY210', credits: 3, absences: 1, grade: 18 }
        ],
        semester2: [
          { name: 'Statistical Mechanics', code: 'PHY211', credits: 4, absences: 1, grade: 19 },
          { name: 'Relativity', code: 'PHY212', credits: 3, absences: 0, grade: 18 },
          { name: 'Plasma Physics', code: 'PHY213', credits: 3, absences: 2, grade: 17 },
          { name: 'Condensed Matter Physics', code: 'PHY214', credits: 3, absences: 1, grade: 16 },
          { name: 'Atomic Physics', code: 'PHY215', credits: 3, absences: 0, grade: 19 },
          { name: 'Molecular Physics', code: 'PHY216', credits: 3, absences: 1, grade: 18 },
          { name: 'Biophysics', code: 'PHY217', credits: 3, absences: 2, grade: 17 },
          { name: 'Geophysics', code: 'PHY218', credits: 3, absences: 0, grade: 19 },
          { name: 'Environmental Physics', code: 'PHY219', credits: 3, absences: 1, grade: 18 },
          { name: 'Physics Lab', code: 'PHY220', credits: 6, absences: 0, grade: 17 }
        ]
      }
    }
  ];

  const departments = ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];
  const levels = ['L1', 'L2', 'L3', 'M1', 'M2'];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !selectedDepartment || student.department === selectedDepartment;
    const matchesLevel = !selectedLevel || student.level === selectedLevel;
    return matchesSearch && matchesDepartment && matchesLevel;
  });

  const handleViewStudent = (student: Student) => {
    setSelectedStudent(student);
    setIsViewModalOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-yellow-100 text-yellow-800';
      case 'graduated':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateOverallAverage = (student: Student) => {
    const allModules = [...student.modules.semester1, ...student.modules.semester2];
    const totalCredits = allModules.reduce((sum, module) => sum + module.credits, 0);
    const weightedSum = allModules.reduce((sum, module) => sum + (module.grade * module.credits), 0);
    return totalCredits > 0 ? weightedSum / totalCredits : 0;
  };

  const isModulePassed = (grade: number) => grade >= 10;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="university_staff" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Students</h1>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              Add New Student
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</label>
                <input
                  type="text"
                  id="search"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search by name or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                <select
                  id="department"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="">All Departments</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
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
            </div>
          </div>

          {/* Students Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall Average</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.level}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <span className="font-medium">
                          {calculateOverallAverage(student).toFixed(2)}/20
                        </span>
                        <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          isModulePassed(calculateOverallAverage(student)) 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {isModulePassed(calculateOverallAverage(student)) ? 'Passed' : 'Failed'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(student.status)}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleViewStudent(student)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        View
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* View Student Modal */}
          {isViewModalOpen && selectedStudent && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Student Details</h2>
                </div>
                <div className="p-6 overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Name</h3>
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email</h3>
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.email}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.phone}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Department</h3>
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.department}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Level</h3>
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.level}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Overall Average</h3>
                      <p className="mt-1 text-sm text-gray-900">
                        <span className="font-medium">
                          {calculateOverallAverage(selectedStudent).toFixed(2)}/20
                        </span>
                        <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          isModulePassed(calculateOverallAverage(selectedStudent)) 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {isModulePassed(calculateOverallAverage(selectedStudent)) ? 'Passed' : 'Failed'}
                        </span>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Status</h3>
                      <p className="mt-1">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedStudent.status)}`}>
                          {selectedStudent.status}
                        </span>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Enrollment Date</h3>
                      <p className="mt-1 text-sm text-gray-900">{selectedStudent.enrollmentDate}</p>
                    </div>
                  </div>

                  {/* Modules Section */}
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Modules</h3>
                    
                    {/* Semester 1 */}
                    <div className="mb-6">
                      <h4 className="text-md font-medium text-gray-700 mb-2">Semester 1</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Absences</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {selectedStudent.modules.semester1.map((module, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{module.code}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{module.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{module.credits}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    module.absences > 3 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                                  }`}>
                                    {module.absences}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{module.grade}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Semester 2 */}
                    <div>
                      <h4 className="text-md font-medium text-gray-700 mb-2">Semester 2</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Absences</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {selectedStudent.modules.semester2.map((module, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{module.code}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{module.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{module.credits}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    module.absences > 3 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                                  }`}>
                                    {module.absences}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{module.grade}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                  <button
                    onClick={() => setIsViewModalOpen(false)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityStaffStudents; 