import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

interface Professor {
  id: number;
  name: string;
  department: string;
  specialization: string;
  status: string;
  courses: number;
  email: string;
  phone: string;
  joinDate: string;
  publications: number;
  rating: number;
}

const UniversityStaffProfessors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [allProfessors, setAllProfessors] = useState<Professor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample data - in a real application, this would come from an API
  const initialProfessors: Professor[] = [
    { 
      id: 1, 
      name: 'Professor Samir Bounemeur', 
      department: 'Computer Science', 
      specialization: 'AI', 
      status: 'Active', 
      courses: 3,
      email: 's.bounemeur@univ.dz',
      phone: '+213 555 123 456',
      joinDate: '2018-09-01',
      publications: 15,
      rating: 4.7
    },
    { 
      id: 2, 
      name: 'Professor Amina Lakhdar', 
      department: 'Mathematics', 
      specialization: 'Statistics', 
      status: 'Active', 
      courses: 2,
      email: 'a.lakhdar@univ.dz',
      phone: '+213 555 789 012',
      joinDate: '2015-09-01',
      publications: 28,
      rating: 4.9
    },
    { 
      id: 3, 
      name: 'Professor Karim Bouzid', 
      department: 'Physics', 
      specialization: 'Quantum', 
      status: 'Active', 
      courses: 4,
      email: 'k.bouzid@univ.dz',
      phone: '+213 555 345 678',
      joinDate: '2012-09-01',
      publications: 35,
      rating: 4.5
    },
    { 
      id: 4, 
      name: 'Professor Nadia Benmansour', 
      department: 'Computer Science', 
      specialization: 'Networks', 
      status: 'Active', 
      courses: 3,
      email: 'n.benmansour@univ.dz',
      phone: '+213 555 234 567',
      joinDate: '2017-09-01',
      publications: 12,
      rating: 4.6
    },
    { 
      id: 5, 
      name: 'Professor Rachid Hamdani', 
      department: 'Mathematics', 
      specialization: 'Algebra', 
      status: 'Active', 
      courses: 2,
      email: 'r.hamdani@univ.dz',
      phone: '+213 555 876 543',
      joinDate: '2014-09-01',
      publications: 22,
      rating: 4.8
    },
  ];

  const departments = ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Engineering', 'Economics', 'Literature'];
  const specializations = [
    'AI', 'Machine Learning', 'Data Science', 'Networks', 'Cybersecurity', 'Web Development', 'Mobile Development',
    'Statistics', 'Algebra', 'Analysis', 'Geometry', 'Quantum Physics', 'Thermodynamics', 'Mechanics',
    'Organic Chemistry', 'Molecular Biology', 'Genetics', 'Robotics', 'Control Systems', 'Finance', 'Macroeconomics'
  ];
  const statuses = ['Active', 'On Leave', 'Retired', 'Visiting'];

  // Random data generation utilities
  const getRandomElement = <T extends any>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateRandomProfessor = (id: number): Professor => {
    const firstNames = ['Ahmed', 'Mohamed', 'Ali', 'Youssef', 'Omar', 'Karim', 'Amine', 'Hamza', 'Bilal', 'Ibrahim',
      'Fatima', 'Aisha', 'Sara', 'Amina', 'Yasmine', 'Nour', 'Meryem', 'Lina', 'Malak', 'Aya'];
      
    const lastNames = ['Benali', 'Benmoussa', 'Bouaziz', 'Djaballah', 'Zerhouni', 'Mansouri', 'Bouchikhi', 'Hamdaoui', 
      'Kaddour', 'Messaoudi', 'Chaabane', 'Boumediene', 'Taleb', 'Rahmani', 'Boudiaf'];
    
    // Generate professor info
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const name = `Professor ${firstName} ${lastName}`;
    const department = getRandomElement(departments);
    const specialization = getRandomElement(specializations);
    const status = getRandomElement(statuses);
    const courses = getRandomInt(1, 5);
    const publications = getRandomInt(5, 50);
    const rating = Math.round((getRandomInt(30, 50) / 10) * 10) / 10; // Rating between 3.0 and 5.0
    
    // Generate email
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@univ.dz`;
    
    // Generate phone
    const phone = `+213 ${getRandomInt(500, 599)} ${getRandomInt(100, 999)} ${getRandomInt(100, 999)}`;
    
    // Generate join date
    const start = new Date(2000, 0, 1);
    const end = new Date(2022, 0, 1);
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const joinDate = randomDate.toISOString().split('T')[0];
    
    return {
      id,
      name,
      department,
      specialization,
      status,
      courses,
      email,
      phone,
      joinDate,
      publications,
      rating
    };
  };

  const generateProfessors = (count: number): Promise<Professor[]> => {
    // Generate professors in batches to avoid blocking the UI
    const batchSize = 50;
    const totalBatches = Math.ceil(count / batchSize);
    let currentBatch = 0;
    let newProfessors: Professor[] = [];
    
    return new Promise((resolve) => {
      const processBatch = () => {
        if (currentBatch >= totalBatches) {
          resolve(newProfessors);
          return;
        }
        
        const start = currentBatch * batchSize;
        const end = Math.min(start + batchSize, count);
        const startId = initialProfessors.length + newProfessors.length + 1;
        
        for (let i = start; i < end; i++) {
          newProfessors.push(generateRandomProfessor(startId + i));
        }
        
        currentBatch++;
        
        // Process next batch on the next frame to keep UI responsive
        setTimeout(processBatch, 0);
      };
      
      // Start processing
      processBatch();
    });
  };

  useEffect(() => {
    // Load initial professors and then generate more
    const loadProfessors = async () => {
      setIsLoading(true);
      try {
        // Generate 200 professors
        const generatedProfessors = await generateProfessors(200);
        
        // Combine initial and generated professors
        setAllProfessors([...initialProfessors, ...generatedProfessors]);
      } catch (error) {
        console.error("Error generating professors:", error);
        // Fallback to just initial professors if there's an error
        setAllProfessors(initialProfessors);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProfessors();
  }, []); // Empty dependency array means this runs once on mount

  const filteredProfessors = allProfessors.filter(professor => {
    const matchesSearch = professor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          professor.email.toLowerCase().includes(searchTerm.toLowerCase());
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
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Professor Management</h1>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add New Professor
              </button>
            </div>
            
            {/* Professor Count Display */}
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Total Professors: <span className="font-semibold text-gray-900">{allProfessors.length}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Filtered Results: <span className="font-semibold text-gray-900">{filteredProfessors.length}</span>
                </p>
              </div>
            </div>
            
            {/* Filters */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Search</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search by name or email..."
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

            {/* Loading State */}
            {isLoading ? (
              <div className="bg-white p-12 rounded-lg shadow text-center">
                <svg className="animate-spin h-10 w-10 text-indigo-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-lg text-gray-700">Loading professor data...</p>
              </div>
            ) : (
              /* Professor Table */
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
                        Publications
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
                    {filteredProfessors.slice(0, 50).map((professor) => (
                      <tr key={professor.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{professor.name}</div>
                          <div className="text-sm text-gray-500">{professor.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{professor.department}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{professor.specialization}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{professor.courses}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{professor.publications}</td>
                        
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            professor.status === 'Active' ? 'bg-green-100 text-green-800' : 
                            professor.status === 'On Leave' ? 'bg-yellow-100 text-yellow-800' :
                            professor.status === 'Retired' ? 'bg-gray-100 text-gray-800' :
                            'bg-blue-100 text-blue-800'
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
                {filteredProfessors.length > 50 && (
                  <div className="px-6 py-3 bg-gray-50 text-center text-sm text-gray-500">
                    Showing 50 of {filteredProfessors.length} professors. Use search filters to narrow down results.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityStaffProfessors; 