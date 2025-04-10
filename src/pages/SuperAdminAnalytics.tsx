import React from 'react';
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
import { Line, Bar, Pie, Radar, Doughnut } from 'react-chartjs-2';

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

const SuperAdminAnalytics: React.FC = () => {
  // Color palette for charts
  const colorPalette = {
    primary: '#4f46e5',
    secondary: '#ec4899',
    accent: '#f59e0b',
    success: '#10b981',
    danger: '#ef4444',
    info: '#06b6d4',
    warning: '#f97316',
    purple: '#8b5cf6',
    indigo: '#6366f1',
    fuchsia: '#d946ef',
    gradient: {
      blue: ['rgba(37, 99, 235, 0.7)', 'rgba(37, 99, 235, 1)'],
      purple: ['rgba(139, 92, 246, 0.7)', 'rgba(139, 92, 246, 1)'],
      pink: ['rgba(236, 72, 153, 0.7)', 'rgba(236, 72, 153, 1)'],
      orange: ['rgba(249, 115, 22, 0.7)', 'rgba(249, 115, 22, 1)'],
      green: ['rgba(16, 185, 129, 0.7)', 'rgba(16, 185, 129, 1)']
    }
  };

  // Sample data - in a real application, this would come from an API
  const universityStats = {
    totalUniversities: 45,
    totalStudents: 500000,
    totalProfessors: 15000,
    averageGraduationRate: 85,
    internationalPartnerships: 120,
    researchFunding: 250, // in million DZD
    nationalRanking: 3, // regional ranking in Africa
    digitalTransformationScore: 72 // percentage of digital adoption
  };

  // Regional distribution data
  const regionalDistribution = [
    { region: 'North', universities: 15, students: 180000, professors: 5500, graduationRate: 87 },
    { region: 'South', universities: 8, students: 80000, professors: 2000, graduationRate: 81 },
    { region: 'Center', universities: 12, students: 120000, professors: 4000, graduationRate: 83 },
    { region: 'West', universities: 7, students: 75000, professors: 2300, graduationRate: 84 },
    { region: 'East', universities: 3, students: 45000, professors: 1200, graduationRate: 82 }
  ];

  // Student Growth Trends data (5 years)
  const studentGrowthData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Total Students',
        data: [420000, 445000, 465000, 480000, 500000],
        borderColor: colorPalette.primary,
        backgroundColor: 'rgba(79, 70, 229, 0.3)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'International Students',
        data: [8400, 9800, 11000, 13000, 15000],
        borderColor: colorPalette.secondary,
        backgroundColor: 'rgba(236, 72, 153, 0.3)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Graduate Students',
        data: [80000, 85000, 90000, 95000, 102000],
        borderColor: colorPalette.accent,
        backgroundColor: 'rgba(245, 158, 11, 0.3)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const growthOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'National Student Growth Trends',
        font: {
          size: 16
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Students'
        }
      }
    }
  };

  // University distribution by type
  const universityTypeData = {
    labels: ['Public', 'Private', 'Mixed', 'Research Institutes', 'Technical Schools'],
    datasets: [{
      data: [32, 8, 2, 10, 15],
      backgroundColor: [
        colorPalette.primary,
        colorPalette.secondary,
        colorPalette.accent,
        colorPalette.success,
        colorPalette.warning
      ],
      borderColor: '#ffffff',
      borderWidth: 2
    }]
  };

  const typeOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'University Distribution by Type',
        font: {
          size: 16
        }
      }
    }
  };

  // Regional student performance
  const regionalPerformanceData = {
    labels: ['North', 'South', 'Center', 'West', 'East'],
    datasets: [
      {
        label: 'Graduation Rate (%)',
        data: regionalDistribution.map(region => region.graduationRate),
        backgroundColor: colorPalette.success,
        barPercentage: 0.7,
      },
      {
        label: 'Employment Rate (%)',
        data: [78, 72, 68, 74, 70],
        backgroundColor: colorPalette.primary,
        barPercentage: 0.7,
      },
      {
        label: 'Research Output Score',
        data: [65, 60, 70, 63, 58],
        backgroundColor: colorPalette.secondary,
        barPercentage: 0.7,
      },
      {
        label: 'International Collaboration Score',
        data: [58, 40, 48, 45, 42],
        backgroundColor: colorPalette.accent,
        barPercentage: 0.7,
      }
    ]
  };

  const performanceOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Regional Performance Metrics',
        font: {
          size: 16
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Score'
        }
      }
    }
  };

  // Field of study distribution
  const fieldDistributionData = {
    labels: [
      'Engineering & Technology', 
      'Natural Sciences', 
      'Medicine & Health',
      'Social Sciences', 
      'Business & Economics',
      'Arts & Humanities',
      'Education',
      'Law',
      'Agriculture',
      'Other'
    ],
    datasets: [
      {
        label: 'Students by Field of Study (%)',
        data: [25, 15, 12, 10, 18, 8, 5, 3, 2, 2],
        backgroundColor: [
          colorPalette.gradient.blue[0],
          colorPalette.gradient.purple[0],
          colorPalette.gradient.pink[0],
          colorPalette.gradient.orange[0],
          colorPalette.gradient.green[0],
          'rgba(6, 182, 212, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(249, 115, 22, 0.7)',
          'rgba(236, 72, 153, 0.7)',
          'rgba(107, 114, 128, 0.7)'
        ],
        borderWidth: 1,
        borderColor: '#ffffff'
      }
    ]
  };

  const fieldOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        display: true
      },
      title: {
        display: true,
        text: 'Student Distribution by Field of Study',
        font: {
          size: 16
        }
      }
    }
  };

  // Research funding trends
  const researchFundingData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Government Funding',
        data: [150, 165, 180, 210, 230],
        backgroundColor: colorPalette.primary,
        stack: 'Stack 0',
      },
      {
        label: 'International Grants',
        data: [50, 60, 75, 95, 110],
        backgroundColor: colorPalette.secondary,
        stack: 'Stack 0',
      },
      {
        label: 'Industry Partnerships',
        data: [20, 35, 45, 65, 80],
        backgroundColor: colorPalette.accent,
        stack: 'Stack 0',
      },
      {
        label: 'University Self-Funding',
        data: [15, 20, 25, 35, 40],
        backgroundColor: colorPalette.success,
        stack: 'Stack 0',
      }
    ]
  };

  const fundingOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Research Funding Trends (Million DZD)',
        font: {
          size: 16
        }
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Million DZD'
        }
      }
    }
  };

  // National education achievement metrics
  const achievementData = {
    labels: ['Research Output', 'Teaching Quality', 'Infrastructure', 'Innovation', 'Industry Connection', 'International Visibility', 'Digitalization', 'Accessibility'],
    datasets: [
      {
        label: 'National Average Score (0-100)',
        data: [72, 68, 65, 58, 62, 55, 70, 80],
        backgroundColor: 'rgba(139, 92, 246, 0.5)',
        borderColor: 'rgba(139, 92, 246, 1)',
        pointBackgroundColor: 'rgba(139, 92, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(139, 92, 246, 1)'
      }
    ]
  };

  const achievementOptions = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'National Education Achievement Metrics',
        font: {
          size: 16
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="super_admin" />
      
      <div className="max-w-full lg:max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="px-1 sm:px-0">
          <h1 className="text-2xl font-bold mb-4 sm:mb-6 text-indigo-800">National Education Analytics</h1>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Total Universities</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-indigo-600">{universityStats.totalUniversities}</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Total Students</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-green-600">{universityStats.totalStudents.toLocaleString()}</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Total Professors</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-blue-600">{universityStats.totalProfessors.toLocaleString()}</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Graduation Rate</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-purple-600">{universityStats.averageGraduationRate}%</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">International Partners</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-pink-600">{universityStats.internationalPartnerships}</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Research Funding</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-orange-600">{universityStats.researchFunding}M DZD</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">African Ranking</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-amber-600">#{universityStats.nationalRanking}</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Digital Transformation</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-teal-600">{universityStats.digitalTransformationScore}%</p>
            </div>
          </div>

          {/* Student Growth Trends */}
          <div className="bg-white p-3 sm:p-6 rounded-lg shadow mb-4 sm:mb-6">
            <div className="h-64 sm:h-80 w-full">
              <Line options={{
                ...growthOptions,
                maintainAspectRatio: false,
                responsive: true
              }} data={studentGrowthData} />
            </div>
          </div>

          {/* University Type and Field Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <div className="h-64 sm:h-80 w-full">
                <Doughnut options={{
                  ...typeOptions,
                  maintainAspectRatio: false,
                  responsive: true
                }} data={universityTypeData} />
              </div>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <div className="h-64 sm:h-80 w-full">
                <Pie options={{
                  ...fieldOptions,
                  maintainAspectRatio: false,
                  responsive: true
                }} data={fieldDistributionData} />
              </div>
            </div>
          </div>

          {/* Research Funding and Regional Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <div className="h-64 sm:h-80 w-full">
                <Bar options={{
                  ...fundingOptions,
                  maintainAspectRatio: false,
                  responsive: true
                }} data={researchFundingData} />
              </div>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <div className="h-64 sm:h-80 w-full">
                <Bar options={{
                  ...performanceOptions,
                  maintainAspectRatio: false,
                  responsive: true
                }} data={regionalPerformanceData} />
              </div>
            </div>
          </div>

          {/* National Achievement Metrics */}
          <div className="bg-white p-3 sm:p-6 rounded-lg shadow mb-4 sm:mb-6">
            <div className="h-64 sm:h-80 w-full">
              <Radar options={{
                ...achievementOptions,
                maintainAspectRatio: false,
                responsive: true
              }} data={achievementData} />
            </div>
          </div>

          {/* Regional Distribution */}
          <div className="bg-white p-3 sm:p-6 rounded-lg shadow mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-indigo-700">Regional Distribution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
              {regionalDistribution.map((region, index) => (
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
                    <div>
                      <span className="text-sm text-gray-500">Professors: </span>
                      <span className="font-medium">{region.professors.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Graduation Rate: </span>
                      <span className="font-medium">{region.graduationRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-indigo-500"
                        style={{ width: `${(region.students / Math.max(...regionalDistribution.map(r => r.students))) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-indigo-700">Research Output</h2>
              <div className="space-y-2 sm:space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Publications</span>
                    <span className="text-sm text-gray-500">12,500 papers</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-green-500" style={{ width: '75%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Citations</span>
                    <span className="text-sm text-gray-500">85,000 citations</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-blue-500" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Patents</span>
                    <span className="text-sm text-gray-500">320 patents</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-purple-500" style={{ width: '45%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Research Projects</span>
                    <span className="text-sm text-gray-500">1,850 active projects</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-pink-500" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-pink-700">International Collaboration</h2>
              <div className="space-y-2 sm:space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Exchange Programs</span>
                    <span className="text-sm text-gray-500">145 programs</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-purple-500" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">International Students</span>
                    <span className="text-sm text-gray-500">15,000 students</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-yellow-500" style={{ width: '65%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Joint Research Projects</span>
                    <span className="text-sm text-gray-500">280 projects</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-indigo-500" style={{ width: '55%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Foreign Faculty</span>
                    <span className="text-sm text-gray-500">650 professors</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-teal-500" style={{ width: '40%' }} />
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

export default SuperAdminAnalytics; 