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

const UniversityStaffAnalytics: React.FC = () => {
  // Color palette for charts
  const colorPalette = {
    primary: '#6366f1',
    secondary: '#ec4899',
    accent: '#f59e0b',
    success: '#10b981',
    danger: '#ef4444',
    info: '#06b6d4',
    warning: '#f97316',
    purple: '#8b5cf6',
    indigo: '#4f46e5',
    fuchsia: '#d946ef',
    gradient: {
      blue: ['rgba(37, 99, 235, 0.7)', 'rgba(37, 99, 235, 1)'],
      purple: ['rgba(139, 92, 246, 0.7)', 'rgba(139, 92, 246, 1)'],
      pink: ['rgba(236, 72, 153, 0.7)', 'rgba(236, 72, 153, 1)'],
      orange: ['rgba(249, 115, 22, 0.7)', 'rgba(249, 115, 22, 1)'],
      teal: ['rgba(20, 184, 166, 0.7)', 'rgba(20, 184, 166, 1)'],
      indigo: ['rgba(99, 102, 241, 0.7)', 'rgba(99, 102, 241, 1)'],
      red: ['rgba(239, 68, 68, 0.7)', 'rgba(239, 68, 68, 1)'],
      amber: ['rgba(245, 158, 11, 0.7)', 'rgba(245, 158, 11, 1)'],
      emerald: ['rgba(16, 185, 129, 0.7)', 'rgba(16, 185, 129, 1)'],
      fuchsia: ['rgba(217, 70, 239, 0.7)', 'rgba(217, 70, 239, 1)']
    }
  };

  // Enrollment data over the years
  const enrollmentData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Undergraduate Students',
        data: [12500, 13200, 14100, 15300, 16500, 17800],
        borderColor: colorPalette.primary,
        backgroundColor: 'rgba(99, 102, 241, 0.3)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Graduate Students',
        data: [4200, 4500, 4900, 5300, 5800, 6200],
        borderColor: colorPalette.secondary,
        backgroundColor: 'rgba(236, 72, 153, 0.3)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'PhD Students',
        data: [850, 920, 1050, 1150, 1250, 1350],
        borderColor: colorPalette.accent,
        backgroundColor: 'rgba(245, 158, 11, 0.3)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const enrollmentOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Student Enrollment Trends 2018-2023',
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

  // Department distribution data
  const departmentDistribution = {
    labels: [
      'Computer Science', 
      'Mathematics', 
      'Physics', 
      'Chemistry', 
      'Biology', 
      'Engineering',
      'Medicine',
      'Law',
      'Business',
      'Arts'
    ],
    datasets: [{
      data: [2350, 1800, 1450, 1200, 950, 2800, 2100, 1700, 2500, 1300],
      backgroundColor: [
        colorPalette.primary,
        colorPalette.secondary,
        colorPalette.accent,
        colorPalette.success,
        colorPalette.danger,
        colorPalette.info,
        colorPalette.warning,
        colorPalette.purple,
        colorPalette.indigo,
        colorPalette.fuchsia
      ],
      borderColor: '#ffffff',
      borderWidth: 2
    }]
  };

  const deptOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Student Distribution by Department',
        font: {
          size: 16
        }
      }
    }
  };

  // Geographic distribution data
  const geoDistributionData = {
    labels: [
      'Algiers', 'Oran', 'Constantine', 'Annaba', 'Blida', 
      'Setif', 'Batna', 'Tlemcen', 'Sidi Bel Abbes', 'Mostaganem',
      'Tizi Ouzou', 'Bejaïa', 'Biskra', 'Ouargla'
    ],
    datasets: [
      {
        label: 'Student Distribution by Region',
        data: [5800, 3900, 2700, 1900, 1600, 1400, 1250, 1100, 950, 900, 850, 830, 810, 790],
        backgroundColor: [
          colorPalette.gradient.blue[0],
          colorPalette.gradient.purple[0],
          colorPalette.gradient.pink[0],
          colorPalette.gradient.orange[0],
          colorPalette.gradient.teal[0],
          colorPalette.gradient.indigo[0],
          colorPalette.gradient.red[0],
          colorPalette.gradient.amber[0],
          colorPalette.gradient.emerald[0],
          colorPalette.gradient.fuchsia[0],
          'rgba(147, 51, 234, 0.7)',
          'rgba(22, 163, 74, 0.7)',
          'rgba(251, 113, 133, 0.7)',
          'rgba(2, 132, 199, 0.7)'
        ]
      }
    ]
  };

  const geoOptions = {
    responsive: true,
    indexAxis: 'y' as const,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Geographic Distribution of Students',
        font: {
          size: 16
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
      }
    }
  };

  // Skills assessment data
  const skillsData = {
    labels: ['Critical Thinking', 'Research Methodology', 'Technical Expertise', 'Communication', 'Problem Solving', 'Data Analysis', 'Team Collaboration', 'Digital Literacy', 'Project Management', 'Innovation'],
    datasets: [
      {
        label: 'Average Student Proficiency (0-100)',
        data: [78, 82, 75, 68, 80, 73, 85, 77, 72, 69],
        backgroundColor: colorPalette.gradient.purple[0],
        borderColor: colorPalette.gradient.purple[1],
        pointBackgroundColor: colorPalette.gradient.purple[1],
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: colorPalette.gradient.purple[1]
      }
    ]
  };

  const skillsOptions = {
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
        text: 'Skills Assessment of Graduates',
        font: {
          size: 16
        }
      }
    }
  };

  // Performance metrics data
  const performanceData = {
    labels: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Engineering', 'Medicine', 'Law', 'Business', 'Arts'],
    datasets: [
      {
        label: 'Pass Rate (%)',
        data: [88, 82, 85, 79, 90, 84, 92, 86, 89, 94],
        backgroundColor: colorPalette.success,
        barPercentage: 0.6,
        categoryPercentage: 0.8
      },
      {
        label: 'Average GPA (0-4)',
        data: [3.2, 3.1, 3.0, 2.9, 3.3, 3.1, 3.5, 3.0, 3.2, 3.4].map(val => val * 25), // Scale to match other metrics
        backgroundColor: colorPalette.primary,
        barPercentage: 0.6,
        categoryPercentage: 0.8
      },
      {
        label: 'Course Completion Rate (%)',
        data: [92, 88, 90, 85, 94, 89, 95, 87, 91, 93],
        backgroundColor: colorPalette.info,
        barPercentage: 0.6,
        categoryPercentage: 0.8
      },
      {
        label: 'Research Publications per Faculty',
        data: [5.2, 4.8, 6.1, 5.5, 4.9, 7.2, 8.5, 3.2, 4.1, 3.8].map(val => val * 10), // Scale to match other metrics
        backgroundColor: colorPalette.secondary,
        barPercentage: 0.6,
        categoryPercentage: 0.8
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
        text: 'Academic Performance by Department',
        font: {
          size: 16
        }
      }
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Performance Metrics (Scaled)'
        }
      }
    }
  };

  // Research funding data
  const researchFundingData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Government Grants (Million DZD)',
        data: [125, 142, 156, 183, 212, 248],
        backgroundColor: colorPalette.gradient.blue[0],
        borderColor: colorPalette.gradient.blue[1],
        borderWidth: 2
      },
      {
        label: 'International Funding (Million DZD)',
        data: [85, 98, 112, 135, 157, 183],
        backgroundColor: colorPalette.gradient.purple[0],
        borderColor: colorPalette.gradient.purple[1],
        borderWidth: 2
      },
      {
        label: 'Industry Partnerships (Million DZD)',
        data: [42, 58, 73, 95, 129, 167],
        backgroundColor: colorPalette.gradient.pink[0],
        borderColor: colorPalette.gradient.pink[1],
        borderWidth: 2
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
        text: 'Research Funding Trends',
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
          text: 'Funding (Million DZD)'
        }
      }
    }
  };

  // Key performance metrics
  const performanceMetrics = {
    averageGPA: 12.53,
    graduationRate: 85,
    retentionRate: 92,
    employmentRate: 78,
    internationalStudents: 12,
    facultyStudentRatio: '1:18',
    researchOutput: 420,
    facultySatisfaction: 88
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="university_staff" />
      
      <div className="max-w-full lg:max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="px-1 sm:px-0">
          <h1 className="text-2xl font-bold mb-4 sm:mb-6 text-indigo-800">University Analytics Dashboard</h1>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Average Score</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-indigo-600">{performanceMetrics.averageGPA}</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Graduation Rate</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-pink-600">{performanceMetrics.graduationRate}%</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Retention Rate</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-amber-600">{performanceMetrics.retentionRate}%</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Employment Rate</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-emerald-600">{performanceMetrics.employmentRate}%</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">International Students</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-purple-600">{performanceMetrics.internationalStudents}%</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Faculty-Student Ratio</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-blue-600">{performanceMetrics.facultyStudentRatio}</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Research Publications</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-orange-600">{performanceMetrics.researchOutput}</p>
            </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h3 className="text-sm sm:text-lg font-medium text-gray-900">Faculty Satisfaction</h3>
              <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-teal-600">{performanceMetrics.facultySatisfaction}%</p>
            </div>
          </div>

          {/* Enrollment Trends Chart */}
          <div className="bg-white p-3 sm:p-6 rounded-lg shadow mb-4 sm:mb-6">
            <div className="h-64 sm:h-80 w-full">
              <Line options={{
                ...enrollmentOptions,
                maintainAspectRatio: false,
                responsive: true
              }} data={enrollmentData} />
            </div>
          </div>

          {/* Department and Geographic Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <div className="h-64 sm:h-80 w-full">
                <Doughnut options={{
                  ...deptOptions,
                  maintainAspectRatio: false,
                  responsive: true
                }} data={departmentDistribution} />
              </div>
                  </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <div className="h-64 sm:h-80 w-full">
                <Bar options={{
                  ...geoOptions,
                  maintainAspectRatio: false,
                  responsive: true
                }} data={geoDistributionData} />
              </div>
            </div>
          </div>

          {/* Performance Metrics and Skills Assessment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <div className="h-64 sm:h-80 w-full">
                <Bar options={{
                  ...performanceOptions,
                  maintainAspectRatio: false,
                  responsive: true
                }} data={performanceData} />
              </div>
                    </div>
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <div className="h-64 sm:h-80 w-full">
                <Radar options={{
                  ...skillsOptions,
                  maintainAspectRatio: false,
                  responsive: true
                }} data={skillsData} />
              </div>
            </div>
          </div>

          {/* Research Funding */}
          <div className="bg-white p-3 sm:p-6 rounded-lg shadow mb-4 sm:mb-6">
            <div className="h-64 sm:h-80 w-full">
              <Line options={{
                ...fundingOptions,
                maintainAspectRatio: false,
                responsive: true
              }} data={researchFundingData} />
            </div>
          </div>

          {/* Additional Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-indigo-700">Course Performance</h2>
              <div className="space-y-2 sm:space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Advanced Programming</span>
                    <span className="text-sm text-gray-500">85% pass rate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-indigo-500" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Data Structures</span>
                    <span className="text-sm text-gray-500">78% pass rate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-pink-500" style={{ width: '78%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Algorithms</span>
                    <span className="text-sm text-gray-500">92% pass rate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-purple-500" style={{ width: '92%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Artificial Intelligence</span>
                    <span className="text-sm text-gray-500">80% pass rate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-amber-500" style={{ width: '80%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Machine Learning</span>
                    <span className="text-sm text-gray-500">75% pass rate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-teal-500" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-lg shadow">
              <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-pink-700">Research Output</h2>
              <div className="space-y-2 sm:space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Publications</span>
                    <span className="text-sm text-gray-500">420 papers</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-pink-500" style={{ width: '84%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Citations</span>
                    <span className="text-sm text-gray-500">3,850 citations</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-indigo-500" style={{ width: '77%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Research Grants</span>
                    <span className="text-sm text-gray-500">56 active grants</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-purple-500" style={{ width: '68%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Patents</span>
                    <span className="text-sm text-gray-500">18 patents</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-amber-500" style={{ width: '45%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">International Collaborations</span>
                    <span className="text-sm text-gray-500">32 institutions</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="h-2.5 rounded-full bg-emerald-500" style={{ width: '62%' }} />
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

export default UniversityStaffAnalytics; 