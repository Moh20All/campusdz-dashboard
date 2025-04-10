import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement,
  Title, 
  Tooltip, 
  Legend, 
  ArcElement,
  RadialLinearScale,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  Filler
);

interface University {
  id: number;
  name: string;
  location: string;
  students: number;
  status: 'Active' | 'Inactive' | 'Under Review';
  region: string;
  foundedYear: number;
  studentGrowth: number[];
  departmentData: {
    labels: string[];
    data: number[];
  };
  academicMetrics: {
    graduationRate: number;
    researchOutput: number;
    employmentRate: number;
    internationalRanking: number;
  };
}

const SuperAdminUniversities: React.FC = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

  // Comprehensive list of Algerian universities with data
  const universities: University[] = [
    {
      id: 1,
      name: 'University of Algiers (Benyoucef Benkhedda University)',
      location: 'Algiers',
      students: 40000,
      status: 'Active',
      region: 'Central',
      foundedYear: 1909,
      studentGrowth: [37000, 38200, 39000, 39500, 40000],
      departmentData: {
        labels: ['Science', 'Medicine', 'Law', 'Arts', 'Economics', 'Political Science'],
        data: [30, 25, 15, 12, 10, 8]
      },
      academicMetrics: {
        graduationRate: 87,
        researchOutput: 420,
        employmentRate: 78,
        internationalRanking: 650
      }
    },
    {
      id: 2,
      name: 'University of Science and Technology Houari Boumediene',
      location: 'Algiers',
      students: 35000,
      status: 'Active',
      region: 'Central',
      foundedYear: 1974,
      studentGrowth: [31000, 32500, 33400, 34200, 35000],
      departmentData: {
        labels: ['Engineering', 'Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology'],
        data: [32, 28, 12, 11, 9, 8]
      },
      academicMetrics: {
        graduationRate: 85,
        researchOutput: 580,
        employmentRate: 82,
        internationalRanking: 520
      }
    },
    {
      id: 3,
      name: 'University of Oran 1 (Ahmed Ben Bella)',
      location: 'Oran',
      students: 32000,
      status: 'Active',
      region: 'West',
      foundedYear: 1967,
      studentGrowth: [28000, 29200, 30000, 31200, 32000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Medicine', 'Arts', 'Business', 'Law'],
        data: [24, 30, 18, 10, 12, 6]
      },
      academicMetrics: {
        graduationRate: 85,
        researchOutput: 320,
        employmentRate: 76,
        internationalRanking: 720
      }
    },
    {
      id: 4,
      name: 'University of Constantine 1 (Frères Mentouri)',
      location: 'Constantine',
      students: 30000,
      status: 'Active',
      region: 'East',
      foundedYear: 1969,
      studentGrowth: [26000, 27200, 28000, 29500, 30000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Medicine', 'Arts', 'Business', 'Law'],
        data: [26, 22, 22, 14, 10, 6]
      },
      academicMetrics: {
        graduationRate: 82,
        researchOutput: 280,
        employmentRate: 74,
        internationalRanking: 810
      }
    },
    {
      id: 5,
      name: 'University of Batna 1 (Hadj Lakhdar)',
      location: 'Batna',
      students: 28000,
      status: 'Active',
      region: 'East',
      foundedYear: 1977,
      studentGrowth: [24000, 25500, 26200, 27500, 28000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Medicine', 'Arts', 'Agriculture', 'Law'],
        data: [22, 26, 20, 12, 10, 10]
      },
      academicMetrics: {
        graduationRate: 81,
        researchOutput: 240,
        employmentRate: 71,
        internationalRanking: 1200
      }
    },
    {
      id: 6,
      name: 'University of Annaba (Badji Mokhtar)',
      location: 'Annaba',
      students: 25000,
      status: 'Active',
      region: 'East',
      foundedYear: 1975,
      studentGrowth: [21000, 22500, 23200, 24000, 25000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Medicine', 'Arts', 'Business', 'Marine Science'],
        data: [25, 22, 18, 15, 10, 10]
      },
      academicMetrics: {
        graduationRate: 79,
        researchOutput: 265,
        employmentRate: 73,
        internationalRanking: 950
      }
    },
    {
      id: 7,
      name: 'University of Tlemcen (Abou Bekr Belkaïd)',
      location: 'Tlemcen',
      students: 22000,
      status: 'Active',
      region: 'West',
      foundedYear: 1974,
      studentGrowth: [18000, 19200, 20100, 21000, 22000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Medicine', 'Arts', 'Business', 'Law'],
        data: [20, 24, 21, 15, 10, 10]
      },
      academicMetrics: {
        graduationRate: 83,
        researchOutput: 230,
        employmentRate: 75,
        internationalRanking: 1100
      }
    },
    {
      id: 8,
      name: 'University of Sétif 1 (Ferhat Abbas)',
      location: 'Sétif',
      students: 26000,
      status: 'Active',
      region: 'East',
      foundedYear: 1978,
      studentGrowth: [22000, 23200, 24100, 25000, 26000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Medicine', 'Arts', 'Business', 'Law'],
        data: [28, 22, 16, 14, 12, 8]
      },
      academicMetrics: {
        graduationRate: 80,
        researchOutput: 245,
        employmentRate: 72,
        internationalRanking: 1050
      }
    },
    {
      id: 9,
      name: 'University of Blida 1 (Saad Dahlab)',
      location: 'Blida',
      students: 23000,
      status: 'Active',
      region: 'Central',
      foundedYear: 1981,
      studentGrowth: [19000, 20200, 21000, 22000, 23000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Agriculture', 'Medicine', 'Technology', 'Life Sciences'],
        data: [20, 30, 15, 15, 10, 10]
      },
      academicMetrics: {
        graduationRate: 82,
        researchOutput: 210,
        employmentRate: 77,
        internationalRanking: 1300
      }
    },
    {
      id: 10,
      name: 'University of Béjaïa (Abderrahmane Mira)',
      location: 'Béjaïa',
      students: 21000,
      status: 'Active',
      region: 'North',
      foundedYear: 1983,
      studentGrowth: [17000, 18200, 19100, 20000, 21000],
      departmentData: {
        labels: ['Technology', 'Science', 'Medicine', 'Arts', 'Economics', 'Law'],
        data: [25, 22, 18, 15, 10, 10]
      },
      academicMetrics: {
        graduationRate: 78,
        researchOutput: 195,
        employmentRate: 70,
        internationalRanking: 1400
      }
    },
    {
      id: 11,
      name: 'University of Mostaganem (Abdelhamid Ibn Badis)',
      location: 'Mostaganem',
      students: 19000,
      status: 'Active',
      region: 'West',
      foundedYear: 1978,
      studentGrowth: [15000, 16200, 17100, 18000, 19000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Medicine', 'Arts', 'Business', 'Agriculture'],
        data: [22, 20, 18, 15, 15, 10]
      },
      academicMetrics: {
        graduationRate: 79,
        researchOutput: 180,
        employmentRate: 69,
        internationalRanking: 1500
      }
    },
    {
      id: 12,
      name: 'University of Biskra (Mohamed Khider)',
      location: 'Biskra',
      students: 20000,
      status: 'Active',
      region: 'South East',
      foundedYear: 1992,
      studentGrowth: [16000, 17200, 18100, 19000, 20000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Economics', 'Arts', 'Agricultural Sciences', 'Law'],
        data: [26, 24, 18, 12, 10, 10]
      },
      academicMetrics: {
        graduationRate: 77,
        researchOutput: 175,
        employmentRate: 68,
        internationalRanking: 1600
      }
    },
    {
      id: 13,
      name: 'University of Skikda (20 August 1955)',
      location: 'Skikda',
      students: 18000,
      status: 'Active',
      region: 'East',
      foundedYear: 2001,
      studentGrowth: [14000, 15500, 16200, 17000, 18000],
      departmentData: {
        labels: ['Technology', 'Science', 'Economics', 'Arts', 'Social Sciences', 'Law'],
        data: [28, 22, 18, 12, 10, 10]
      },
      academicMetrics: {
        graduationRate: 76,
        researchOutput: 160,
        employmentRate: 67,
        internationalRanking: 1800
      }
    },
    {
      id: 14,
      name: 'University of Jijel (Mohammed Seddik Ben Yahia)',
      location: 'Jijel',
      students: 17000,
      status: 'Active',
      region: 'East',
      foundedYear: 1998,
      studentGrowth: [13000, 14200, 15100, 16000, 17000],
      departmentData: {
        labels: ['Science', 'Technology', 'Life Sciences', 'Arts', 'Economics', 'Law'],
        data: [25, 25, 18, 12, 10, 10]
      },
      academicMetrics: {
        graduationRate: 75,
        researchOutput: 150,
        employmentRate: 66,
        internationalRanking: 1900
      }
    },
    {
      id: 15,
      name: 'University of Ouargla (Kasdi Merbah)',
      location: 'Ouargla',
      students: 16000,
      status: 'Active',
      region: 'South',
      foundedYear: 1988,
      studentGrowth: [12000, 13200, 14100, 15000, 16000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Petroleum Studies', 'Economics', 'Arts', 'Law'],
        data: [25, 20, 20, 15, 10, 10]
      },
      academicMetrics: {
        graduationRate: 74,
        researchOutput: 140,
        employmentRate: 65,
        internationalRanking: 2000
      }
    },
    {
      id: 16,
      name: 'University of Boumerdès (M\'hamed Bougara)',
      location: 'Boumerdès',
      students: 19000,
      status: 'Active',
      region: 'Central',
      foundedYear: 1998,
      studentGrowth: [15000, 16200, 17100, 18000, 19000],
      departmentData: {
        labels: ['Technology', 'Engineering', 'Hydrocarbon', 'Chemistry', 'Economics', 'Science'],
        data: [30, 25, 15, 10, 10, 10]
      },
      academicMetrics: {
        graduationRate: 81,
        researchOutput: 200,
        employmentRate: 72,
        internationalRanking: 1350
      }
    },
    {
      id: 17,
      name: 'University of Adrar (Ahmed Draia)',
      location: 'Adrar',
      students: 12000,
      status: 'Active',
      region: 'South West',
      foundedYear: 2001,
      studentGrowth: [8000, 9200, 10100, 11000, 12000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Islamic Studies', 'Economics', 'Arts', 'Law'],
        data: [25, 20, 20, 15, 10, 10]
      },
      academicMetrics: {
        graduationRate: 73,
        researchOutput: 95,
        employmentRate: 62,
        internationalRanking: 2500
      }
    },
    {
      id: 18,
      name: 'University of Chlef (Hassiba Benbouali)',
      location: 'Chlef',
      students: 15000,
      status: 'Active',
      region: 'West',
      foundedYear: 2001,
      studentGrowth: [11000, 12200, 13100, 14000, 15000],
      departmentData: {
        labels: ['Civil Engineering', 'Science', 'Technology', 'Economics', 'Arts', 'Law'],
        data: [25, 22, 18, 15, 10, 10]
      },
      academicMetrics: {
        graduationRate: 75,
        researchOutput: 130,
        employmentRate: 64,
        internationalRanking: 2100
      }
    },
    {
      id: 19,
      name: 'University of Khenchela (Abbas Laghrour)',
      location: 'Khenchela',
      students: 14000,
      status: 'Active',
      region: 'East',
      foundedYear: 2001,
      studentGrowth: [10000, 11200, 12100, 13000, 14000],
      departmentData: {
        labels: ['Science', 'Technology', 'Economics', 'Arts', 'Law', 'Languages'],
        data: [24, 23, 18, 15, 10, 10]
      },
      academicMetrics: {
        graduationRate: 74,
        researchOutput: 105,
        employmentRate: 62,
        internationalRanking: 2400
      }
    },
    {
      id: 20,
      name: 'University of Ghardaïa',
      location: 'Ghardaïa',
      students: 13000,
      status: 'Active',
      region: 'South',
      foundedYear: 2012,
      studentGrowth: [9000, 10200, 11100, 12000, 13000],
      departmentData: {
        labels: ['Science', 'Engineering', 'Economics', 'Islamic Studies', 'Arts', 'Law'],
        data: [24, 20, 18, 18, 10, 10]
      },
      academicMetrics: {
        graduationRate: 72,
        researchOutput: 85,
        employmentRate: 61,
        internationalRanking: 2600
      }
    },
    {
      id: 21,
      name: 'University of Bouira (Akli Mohand Oulhadj)',
      location: 'Bouira',
      students: 15000,
      status: 'Active',
      region: 'Central',
      foundedYear: 2012,
      studentGrowth: [11000, 12200, 13100, 14000, 15000],
      departmentData: {
        labels: ['Science', 'Technology', 'Economics', 'Arts', 'Law', 'Languages'],
        data: [24, 22, 18, 16, 10, 10]
      },
      academicMetrics: {
        graduationRate: 76,
        researchOutput: 110,
        employmentRate: 63,
        internationalRanking: 2300
      }
    },
    {
      id: 22,
      name: 'University of Mascara (Mustapha Stambouli)',
      location: 'Mascara',
      students: 14000,
      status: 'Active',
      region: 'West',
      foundedYear: 2009,
      studentGrowth: [10000, 11200, 12100, 13000, 14000],
      departmentData: {
        labels: ['Science', 'Technology', 'Agronomy', 'Economics', 'Arts', 'Law'],
        data: [22, 22, 20, 16, 10, 10]
      },
      academicMetrics: {
        graduationRate: 74,
        researchOutput: 100,
        employmentRate: 62,
        internationalRanking: 2450
      }
    },
    {
      id: 23,
      name: 'University of Médéa (Yahia Farès)',
      location: 'Médéa',
      students: 15000,
      status: 'Active',
      region: 'Central',
      foundedYear: 2009,
      studentGrowth: [11000, 12200, 13100, 14000, 15000],
      departmentData: {
        labels: ['Science', 'Technology', 'Economics', 'Arts', 'Law', 'Languages'],
        data: [23, 23, 18, 16, 10, 10]
      },
      academicMetrics: {
        graduationRate: 75,
        researchOutput: 115,
        employmentRate: 64,
        internationalRanking: 2200
      }
    },
    {
      id: 24,
      name: 'University of El Tarf (Chadli Bendjedid)',
      location: 'El Tarf',
      students: 11000,
      status: 'Active',
      region: 'East',
      foundedYear: 2012,
      studentGrowth: [7000, 8200, 9100, 10000, 11000],
      departmentData: {
        labels: ['Science', 'Agriculture', 'Marine Studies', 'Economics', 'Arts', 'Law'],
        data: [22, 22, 20, 16, 10, 10]
      },
      academicMetrics: {
        graduationRate: 70,
        researchOutput: 90,
        employmentRate: 60,
        internationalRanking: 2550
      }
    },
    {
      id: 25,
      name: 'University of El Oued (Hamma Lakhdar)',
      location: 'El Oued',
      students: 15000,
      status: 'Active',
      region: 'South East',
      foundedYear: 2001,
      studentGrowth: [11000, 12200, 13100, 14000, 15000],
      departmentData: {
        labels: ['Science', 'Technology', 'Desert Agriculture', 'Economics', 'Saharan Studies', 'Law'],
        data: [24, 22, 20, 14, 10, 10]
      },
      academicMetrics: {
        graduationRate: 75,
        researchOutput: 120,
        employmentRate: 68,
        internationalRanking: 2200
      }
    }
  ];

  const viewUniversityStats = (university: University) => {
    setSelectedUniversity(university);
    setIsStatsModalOpen(true);
  };

  const closeStatsModal = () => {
    setIsStatsModalOpen(false);
    setSelectedUniversity(null);
  };

  // Chart configuration for selected university
  const getStudentGrowthChartData = (university: University | null) => {
    if (!university) return null;
    
    return {
      labels: ['2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Student Enrollment',
          data: university.studentGrowth,
          borderColor: 'rgba(79, 70, 229, 1)',
          backgroundColor: 'rgba(79, 70, 229, 0.2)',
          fill: true,
          tension: 0.4
        }
      ]
    };
  };

  const getDepartmentDistributionData = (university: University | null) => {
    if (!university) return null;
    
    return {
      labels: university.departmentData.labels,
      datasets: [{
        data: university.departmentData.data,
        backgroundColor: [
          'rgba(79, 70, 229, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ],
        borderWidth: 1
      }]
    };
  };

  const getPerformanceData = (university: University | null) => {
    if (!university) return null;
    
    const { graduationRate, employmentRate, researchOutput } = university.academicMetrics;
    
    return {
      labels: ['Graduation Rate', 'Employment Rate', 'Research Output (scaled)'],
      datasets: [{
        label: 'Performance Metrics',
        data: [graduationRate, employmentRate, researchOutput / 5], // Scale research output to fit
        backgroundColor: [
          'rgba(79, 70, 229, 0.6)',
          'rgba(16, 185, 129, 0.6)',
          'rgba(245, 158, 11, 0.6)'
        ],
        borderColor: 'white',
        borderWidth: 1
      }]
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="super_admin" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-bold mb-6">Universities Management</h1>
          
          {/* Add University Button */}
          <div className="mb-6">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              Add New University
            </button>
          </div>

          {/* Universities Table */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    University Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Region
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
                {universities.map((university) => (
                  <tr key={university.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {university.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {university.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {university.students.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {university.region}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        university.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        university.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {university.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => viewUniversityStats(university)}
                        className="text-indigo-600 hover:text-indigo-900 mr-3 px-2 py-1 rounded border border-indigo-600 hover:bg-indigo-50"
                      >
                        View Stats
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* University Statistics Modal */}
      {isStatsModalOpen && selectedUniversity && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 sm:px-6 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {selectedUniversity.name} - Statistics Dashboard
                </h3>
                <button onClick={closeStatsModal} className="text-gray-500 hover:text-gray-700">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* University Information */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500">Founded</h4>
                    <p className="mt-1 text-xl font-semibold text-indigo-700">{selectedUniversity.foundedYear}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500">Total Students</h4>
                    <p className="mt-1 text-xl font-semibold text-green-700">{selectedUniversity.students.toLocaleString()}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500">Graduation Rate</h4>
                    <p className="mt-1 text-xl font-semibold text-yellow-700">{selectedUniversity.academicMetrics.graduationRate}%</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500">Global Ranking</h4>
                    <p className="mt-1 text-xl font-semibold text-blue-700">#{selectedUniversity.academicMetrics.internationalRanking}</p>
                  </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Student Growth Trend */}
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="text-md font-medium text-gray-700 mb-2">Student Growth Trend</h4>
                    <div className="h-64">
                      <Line 
                        options={chartOptions}
                        data={getStudentGrowthChartData(selectedUniversity) || {labels: [], datasets: []}} 
                      />
                    </div>
                  </div>

                  {/* Department Distribution */}
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="text-md font-medium text-gray-700 mb-2">Department Distribution (%)</h4>
                    <div className="h-64">
                      <Doughnut 
                        options={doughnutOptions}
                        data={getDepartmentDistributionData(selectedUniversity) || {labels: [], datasets: []}} 
                      />
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="text-md font-medium text-gray-700 mb-2">Performance Metrics</h4>
                    <div className="h-64">
                      <Bar 
                        options={chartOptions}
                        data={getPerformanceData(selectedUniversity) || {labels: [], datasets: []}} 
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-md font-medium text-gray-700 mb-4">Key Performance Indicators</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <h5 className="text-sm text-gray-500">Employment Rate</h5>
                      <div className="mt-1 relative pt-1">
                        <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
                          <div style={{ width: `${selectedUniversity.academicMetrics.employmentRate}%` }} 
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500">
                          </div>
                        </div>
                        <span className="text-xs font-semibold inline-block text-indigo-600">
                          {selectedUniversity.academicMetrics.employmentRate}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm text-gray-500">Research Output</h5>
                      <p className="text-md font-medium">{selectedUniversity.academicMetrics.researchOutput} <span className="text-xs text-gray-500">publications</span></p>
                    </div>
                    <div>
                      <h5 className="text-sm text-gray-500">Student-Faculty Ratio</h5>
                      <p className="text-md font-medium">18:1</p>
                    </div>
                    <div>
                      <h5 className="text-sm text-gray-500">International Students</h5>
                      <p className="text-md font-medium">12%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button 
                  type="button" 
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeStatsModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminUniversities; 