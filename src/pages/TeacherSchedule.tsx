import React, { useState } from 'react';
import Navigation from '../components/Navigation';

interface ScheduleEvent {
  id: number;
  course: string;
  type: 'lecture' | 'practical' | 'exam' | 'office-hours';
  day: string;
  startTime: string;
  endTime: string;
  room: string;
  recurring: boolean;
}

interface WeeklySchedule {
  [key: string]: ScheduleEvent[];
}

const TeacherSchedule: React.FC = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  
  // Sample data for a teacher's schedule
  const [scheduleEvents, setScheduleEvents] = useState<ScheduleEvent[]>([
    { id: 1, course: 'CS301: Advanced Programming', type: 'lecture', day: 'Monday', startTime: '08:30', endTime: '10:00', room: 'Lab 3', recurring: true },
    { id: 2, course: 'CS301: Advanced Programming', type: 'practical', day: 'Wednesday', startTime: '08:30', endTime: '10:00', room: 'Room 201', recurring: true },
    { id: 3, course: 'CS302: Data Structures', type: 'lecture', day: 'Monday', startTime: '13:00', endTime: '14:30', room: 'Room 201', recurring: true },
    { id: 4, course: 'CS302: Data Structures', type: 'practical', day: 'Thursday', startTime: '10:30', endTime: '12:00', room: 'Lab 4', recurring: true },
    { id: 5, course: 'CS407: Machine Learning', type: 'lecture', day: 'Wednesday', startTime: '15:00', endTime: '16:30', room: 'Lab 5', recurring: true },
    { id: 6, course: 'CS407: Machine Learning', type: 'practical', day: 'Friday', startTime: '13:00', endTime: '14:30', room: 'Room 305', recurring: true },
    { id: 7, course: 'Office Hours', type: 'office-hours', day: 'Monday', startTime: '14:00', endTime: '16:00', room: 'Building B, Room 405', recurring: true },
    { id: 8, course: 'Office Hours', type: 'office-hours', day: 'Wednesday', startTime: '14:00', endTime: '16:00', room: 'Building B, Room 405', recurring: true },
    { id: 9, course: 'CS301: Midterm Exam', type: 'exam', day: 'Tuesday', startTime: '09:00', endTime: '11:00', room: 'Room 201', recurring: false },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null);
  const [view, setView] = useState<'weekly' | 'list'>('weekly');

  // Organize events by day for weekly view
  const getWeeklySchedule = (): WeeklySchedule => {
    const weeklySchedule: WeeklySchedule = {};
    
    daysOfWeek.forEach(day => {
      weeklySchedule[day] = scheduleEvents.filter(event => event.day === day);
    });
    
    return weeklySchedule;
  };

  const weeklySchedule = getWeeklySchedule();

  // Calculate position and height for an event in the schedule grid
  const getEventStyle = (event: ScheduleEvent) => {
    const startHour = parseInt(event.startTime.split(':')[0]);
    const startMinute = parseInt(event.startTime.split(':')[1]);
    const endHour = parseInt(event.endTime.split(':')[0]);
    const endMinute = parseInt(event.endTime.split(':')[1]);
    
    const startPosition = startHour - 8 + startMinute / 60;
    const duration = (endHour - startHour) + (endMinute - startMinute) / 60;
    
    return {
      top: `${startPosition * 4}rem`,
      height: `${duration * 4}rem`,
    };
  };

  const getEventTypeClass = (type: string) => {
    switch (type) {
      case 'lecture':
        return 'bg-blue-100 border-blue-400 text-blue-800';
      case 'practical':
        return 'bg-green-100 border-green-400 text-green-800';
      case 'exam':
        return 'bg-red-100 border-red-400 text-red-800';
      case 'office-hours':
        return 'bg-purple-100 border-purple-400 text-purple-800';
      default:
        return 'bg-gray-100 border-gray-400 text-gray-800';
    }
  };

  const handleEventClick = (event: ScheduleEvent) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="teacher" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-indigo-800">My Teaching Schedule</h1>
            <div className="flex space-x-3">
              <button 
                className={`px-4 py-2 rounded-md font-medium ${view === 'weekly' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border border-indigo-600'}`}
                onClick={() => setView('weekly')}
              >
                Weekly View
              </button>
              <button 
                className={`px-4 py-2 rounded-md font-medium ${view === 'list' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border border-indigo-600'}`}
                onClick={() => setView('list')}
              >
                List View
              </button>
              <button 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-md font-medium hover:from-indigo-600 hover:to-purple-700"
                onClick={() => {
                  setSelectedEvent(null);
                  setShowModal(true);
                }}
              >
                Add Event
              </button>
            </div>
          </div>
          
          {view === 'weekly' ? (
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="grid grid-cols-7 gap-4">
                {/* Time column */}
                <div className="col-span-1">
                  <div className="h-12"></div> {/* Empty header cell */}
                  {timeSlots.map((time, index) => (
                    <div key={index} className="h-16 border-t border-gray-200 text-xs text-gray-500 pr-2 text-right">
                      {time}
                    </div>
                  ))}
                </div>
                
                {/* Days columns */}
                {daysOfWeek.map((day, dayIndex) => (
                  <div key={dayIndex} className="col-span-1 relative">
                    <div className="h-12 text-center font-medium text-gray-700 border-b border-gray-300">
                      {day}
                    </div>
                    {/* Time slots background */}
                    {timeSlots.map((_, index) => (
                      <div key={index} className="h-16 border-t border-gray-200"></div>
                    ))}
                    
                    {/* Events */}
                    {weeklySchedule[day]?.map((event) => (
                      <div
                        key={event.id}
                        className={`absolute w-full px-2 py-1 border-l-4 rounded-r-md shadow-sm cursor-pointer ${getEventTypeClass(event.type)}`}
                        style={getEventStyle(event)}
                        onClick={() => handleEventClick(event)}
                      >
                        <div className="text-xs font-semibold truncate">{event.course}</div>
                        <div className="text-xs truncate">{event.startTime} - {event.endTime}</div>
                        <div className="text-xs truncate">{event.room}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recurring</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {scheduleEvents.map((event) => (
                      <tr 
                        key={event.id} 
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleEventClick(event)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{event.course}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getEventTypeClass(event.type)}`}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1).replace('-', ' ')}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.day}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.startTime} - {event.endTime}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.room}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {event.recurring ? (
                            <span className="text-green-500">✓</span>
                          ) : (
                            <span className="text-red-500">✗</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Weekly Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Total Teaching Hours:</span>
                  <span className="text-sm font-medium">12 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Courses:</span>
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Office Hours:</span>
                  <span className="text-sm font-medium">4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Special Events:</span>
                  <span className="text-sm font-medium">1 exam</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Today's Schedule</h2>
              <div className="space-y-3">
                {scheduleEvents
                  .filter(event => event.day === daysOfWeek[new Date().getDay() - 1])
                  .map(event => (
                    <div key={event.id} className="flex items-start p-2 rounded-md hover:bg-gray-50">
                      <div className={`w-3 h-3 mt-1 rounded-full ${event.type === 'lecture' ? 'bg-blue-500' : event.type === 'practical' ? 'bg-green-500' : event.type === 'exam' ? 'bg-red-500' : 'bg-purple-500'}`}></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{event.course}</p>
                        <p className="text-xs text-gray-500">{event.startTime} - {event.endTime} | {event.room}</p>
                      </div>
                    </div>
                  ))}
                {scheduleEvents.filter(event => event.day === daysOfWeek[new Date().getDay() - 1]).length === 0 && (
                  <p className="text-sm text-gray-500 italic">No events scheduled for today.</p>
                )}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Exams</h2>
              <div className="space-y-3">
                {scheduleEvents
                  .filter(event => event.type === 'exam')
                  .map(event => (
                    <div key={event.id} className="flex items-start p-2 rounded-md hover:bg-gray-50">
                      <div className="w-3 h-3 mt-1 rounded-full bg-red-500"></div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{event.course}</p>
                        <p className="text-xs text-gray-500">{event.day} | {event.startTime} - {event.endTime} | {event.room}</p>
                      </div>
                    </div>
                  ))}
                {scheduleEvents.filter(event => event.type === 'exam').length === 0 && (
                  <p className="text-sm text-gray-500 italic">No exams scheduled.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal for event details or adding new events */}
      {showModal && (
        <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">{selectedEvent ? 'Event Details' : 'Add New Event'}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {selectedEvent ? (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                  <p className="text-sm text-gray-900">{selectedEvent.course}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                    <p className="text-sm text-gray-900">{selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1).replace('-', ' ')}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Day</label>
                    <p className="text-sm text-gray-900">{selectedEvent.day}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                    <p className="text-sm text-gray-900">{selectedEvent.startTime}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                    <p className="text-sm text-gray-900">{selectedEvent.endTime}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Room</label>
                  <p className="text-sm text-gray-900">{selectedEvent.room}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Recurring</label>
                  <p className="text-sm text-gray-900">{selectedEvent.recurring ? 'Yes' : 'No'}</p>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                  >
                    Delete Event
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    Edit Event
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Course name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                      <option value="lecture">Lecture</option>
                      <option value="practical">Practical</option>
                      <option value="exam">Exam</option>
                      <option value="office-hours">Office Hours</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Day</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                      {daysOfWeek.map((day, index) => (
                        <option key={index} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Room</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Room name or number"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <input
                    id="recurring"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="recurring" className="ml-2 block text-sm text-gray-900">
                    Recurring event (weekly)
                  </label>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    Save Event
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherSchedule; 