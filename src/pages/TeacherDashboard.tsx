import React, { useState, useRef } from 'react';
import Navigation from '../components/Navigation';

const TeacherDashboard: React.FC = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sample data for a teacher's dashboard
  const teacherInfo = {
    name: "Dr. Karim Bensalah",
    department: "Computer Science",
    position: "Associate Professor",
    email: "karim.bensalah@univ.dz",
    phone: "+213 555 678 901",
    office: "Building B, Room 405",
    officeHours: "Monday & Wednesday 14:00-16:00"
  };
  
  const upcomingClasses = [
    { id: 1, course: "Advanced Programming", day: "Monday", time: "08:30 - 10:00", room: "Lab 3", students: 35 },
    { id: 2, course: "Data Structures", day: "Monday", time: "13:00 - 14:30", room: "Room 201", students: 42 },
    { id: 3, course: "Algorithms", day: "Tuesday", time: "10:30 - 12:00", room: "Room 305", students: 38 },
    { id: 4, course: "Machine Learning", day: "Wednesday", time: "15:00 - 16:30", room: "Lab 5", students: 25 },
  ];
  
  const pendingTasks = [
    { id: 1, task: "Grade midterm exams for Advanced Programming", deadline: "2023-11-15", priority: "High" },
    { id: 2, task: "Prepare lab materials for Data Structures", deadline: "2023-11-14", priority: "Medium" },
    { id: 3, task: "Submit research paper review", deadline: "2023-11-20", priority: "Medium" },
    { id: 4, task: "Update course syllabus for next semester", deadline: "2023-12-05", priority: "Low" },
  ];
  
  const recentAnnouncements = [
    { id: 1, title: "Midterm Exam Results", date: "2023-11-10", course: "Advanced Programming" },
    { id: 2, title: "Lab Assignment Postponed", date: "2023-11-08", course: "Data Structures" },
    { id: 3, title: "Guest Lecture Announcement", date: "2023-11-05", course: "Machine Learning" },
  ];

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  const saveProfileImage = () => {
    setProfileImage(previewImage);
    setShowProfileModal(false);
  };

  const cancelProfileImageChange = () => {
    setPreviewImage(profileImage);
    setShowProfileModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="teacher" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-indigo-800">Teacher Dashboard</h1>
            <div className="text-sm text-gray-500">
              <span>Today's Date: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
          
          {/* Teacher Info Card */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="flex items-center">
                  <div className="h-20 w-20 rounded-full flex items-center justify-center text-indigo-500 overflow-hidden relative cursor-pointer group" 
                       onClick={() => setShowProfileModal(true)}
                       style={{
                        backgroundColor: profileImage ? 'transparent' : '#e0e7ff',
                        border: '2px solid #e0e7ff'
                       }}
                  >
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="h-full w-full object-cover" 
                      />
                    ) : (
                      <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                    <div className="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-200">
                      <svg className="h-6 w-6 text-white opacity-0 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900">{teacherInfo.name}</h2>
                    <p className="text-indigo-600">{teacherInfo.position}</p>
                    <p className="text-gray-500">{teacherInfo.department}</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="mt-1 text-sm text-gray-900">{teacherInfo.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <p className="mt-1 text-sm text-gray-900">{teacherInfo.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Office</h3>
                    <p className="mt-1 text-sm text-gray-900">{teacherInfo.office}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Office Hours</h3>
                    <p className="mt-1 text-sm text-gray-900">{teacherInfo.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Picture Modal */}
          {showProfileModal && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full">
                <div className="px-6 py-4 bg-indigo-700 text-white">
                  <h3 className="text-lg font-medium">Change Profile Picture</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-indigo-100">
                      {previewImage ? (
                        <img 
                          src={previewImage} 
                          alt="Profile Preview" 
                          className="h-full w-full object-cover" 
                        />
                      ) : profileImage ? (
                        <img 
                          src={profileImage} 
                          alt="Current Profile" 
                          className="h-full w-full object-cover" 
                        />
                      ) : (
                        <div className="h-full w-full bg-indigo-100 flex items-center justify-center">
                          <svg className="h-16 w-16 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />

                  <div className="flex flex-col space-y-3 mb-4">
                    <button
                      onClick={openFileSelector}
                      className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Select Image
                    </button>
                    
                    {previewImage && (
                      <button
                        onClick={() => setPreviewImage(null)}
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Remove Image
                      </button>
                    )}
                  </div>
                  
                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      onClick={cancelProfileImageChange}
                      className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={saveProfileImage}
                      className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Upcoming Classes */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Classes</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {upcomingClasses.map((cls) => (
                      <tr key={cls.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{cls.course}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.day}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.room}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.students}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Pending Tasks */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Pending Tasks</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pendingTasks.map((task) => (
                      <tr key={task.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{task.task}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.deadline}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityClass(task.priority)}`}>
                            {task.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Recent Announcements */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Recent Announcements</h2>
              <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                Post New Announcement
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              {recentAnnouncements.map((announcement) => (
                <div key={announcement.id} className="py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{announcement.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">Course: {announcement.course}</p>
                    </div>
                    <div className="text-xs text-gray-500">{announcement.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="bg-indigo-600 shadow-lg rounded-lg p-5 text-white text-center hover:bg-indigo-700 transition duration-200 cursor-pointer">
              <svg className="h-8 w-8 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="text-sm font-medium">Upload Course Materials</h3>
            </div>
            <div className="bg-pink-600 shadow-lg rounded-lg p-5 text-white text-center hover:bg-pink-700 transition duration-200 cursor-pointer">
              <svg className="h-8 w-8 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-sm font-medium">Mark Attendance</h3>
            </div>
            <div className="bg-purple-600 shadow-lg rounded-lg p-5 text-white text-center hover:bg-purple-700 transition duration-200 cursor-pointer">
              <svg className="h-8 w-8 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <h3 className="text-sm font-medium">Enter Grades</h3>
            </div>
            <div className="bg-orange-600 shadow-lg rounded-lg p-5 text-white text-center hover:bg-orange-700 transition duration-200 cursor-pointer">
              <svg className="h-8 w-8 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-sm font-medium">Message Students</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard; 