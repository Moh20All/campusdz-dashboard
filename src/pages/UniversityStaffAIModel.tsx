import React, { useState } from 'react';
import Navigation from '../components/Navigation';

interface PredictionResult {
  predictedMeals: number;
  confidence: number;
}

const UniversityStaffAIModel: React.FC = () => {
  // Form state
  const [parameters, setParameters] = useState({
    studentCount: 0,
    dayOfWeek: 1, // 1-7 for Monday-Sunday
    isHoliday: false,
    temperature: 25,
    rainfall: 0,
    specialEvent: false,
  });

  // Result state
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHistorical, setShowHistorical] = useState(false);

  // Handle form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setParameters({
        ...parameters,
        [name]: checkbox.checked
      });
    } else {
      setParameters({
        ...parameters,
        [name]: type === 'number' ? Number(value) : value
      });
    }
  };

  // Mock prediction model (linear regression simulation)
  const predictMeals = () => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Simple linear regression model simulation for meal prediction
      // In a real app, this would be an API call to a backend model
      const baseMeals = parameters.studentCount * 0.65; // 65% of students eat at cafeteria on average
      
      // Day of week factor (weekends have fewer students)
      const dayFactor = parameters.dayOfWeek > 5 ? 0.6 : 1.0;
      
      // Weather factors (fewer students on rainy days, more on moderate temperature)
      const tempFactor = parameters.temperature > 30 ? 0.9 : (parameters.temperature < 10 ? 0.85 : 1.0);
      const rainFactor = parameters.rainfall > 0 ? Math.max(0.8, 1 - (parameters.rainfall * 0.05)) : 1.0;
      
      // Special circumstances
      const holidayFactor = parameters.isHoliday ? 0.3 : 1.0;
      const eventFactor = parameters.specialEvent ? 1.2 : 1.0;
      
      // Calculate prediction with some randomness
      const randomVariation = 0.95 + (Math.random() * 0.1); // 0.95 to 1.05
      
      const predictedMeals = Math.round(
        baseMeals * dayFactor * tempFactor * rainFactor * holidayFactor * eventFactor * randomVariation
      );
      
      // Calculate a confidence score (85-98%)
      const confidence = Math.round(85 + (Math.random() * 13));
      
      setPrediction({
        predictedMeals,
        confidence
      });
      
      setIsLoading(false);
    }, 1500);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    predictMeals();
  };

  // Historical data for comparison
  const historicalData = [
    { date: '2023-10-15', actualMeals: 1250, predictedMeals: 1280, accuracy: 97.6 },
    { date: '2023-10-16', actualMeals: 1320, predictedMeals: 1290, accuracy: 97.7 },
    { date: '2023-10-17', actualMeals: 1100, predictedMeals: 1150, accuracy: 95.7 },
    { date: '2023-10-18', actualMeals: 1200, predictedMeals: 1180, accuracy: 98.3 },
    { date: '2023-10-19', actualMeals: 1380, predictedMeals: 1320, accuracy: 95.7 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation role="university_staff" />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-indigo-800">AI Meal Prediction Model</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Prediction Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Enter Parameters for Meal Prediction</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="studentCount" className="block text-sm font-medium text-gray-700 mb-1">
                        Total Student Count
                      </label>
                      <input
                        type="number"
                        id="studentCount"
                        name="studentCount"
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={parameters.studentCount}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="dayOfWeek" className="block text-sm font-medium text-gray-700 mb-1">
                        Day of the Week
                      </label>
                      <select
                        id="dayOfWeek"
                        name="dayOfWeek"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={parameters.dayOfWeek}
                        onChange={handleInputChange}
                        required
                      >
                        <option value={1}>Monday</option>
                        <option value={2}>Tuesday</option>
                        <option value={3}>Wednesday</option>
                        <option value={4}>Thursday</option>
                        <option value={5}>Friday</option>
                        <option value={6}>Saturday</option>
                        <option value={7}>Sunday</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-1">
                        Temperature (°C)
                      </label>
                      <input
                        type="number"
                        id="temperature"
                        name="temperature"
                        min="-10"
                        max="50"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={parameters.temperature}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="rainfall" className="block text-sm font-medium text-gray-700 mb-1">
                        Rainfall (mm)
                      </label>
                      <input
                        type="number"
                        id="rainfall"
                        name="rainfall"
                        min="0"
                        step="0.1"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={parameters.rainfall}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isHoliday"
                        name="isHoliday"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        checked={parameters.isHoliday}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="isHoliday" className="ml-2 block text-sm text-gray-900">
                        Is Holiday/Weekend
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="specialEvent"
                        name="specialEvent"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        checked={parameters.specialEvent}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="specialEvent" className="ml-2 block text-sm text-gray-900">
                        Special Event on Campus
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : "Run Prediction Model"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Prediction Results */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Prediction Results</h2>
                
                {prediction ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600">{prediction.predictedMeals}</div>
                      <div className="text-sm text-gray-500">Predicted Meals</div>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-indigo-700">Model Confidence</span>
                        <span className="text-sm font-medium text-indigo-700">{prediction.confidence}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-indigo-600 h-2.5 rounded-full" 
                          style={{ width: `${prediction.confidence}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="prose prose-sm">
                      <p className="text-gray-700">
                        Based on your input parameters, our AI model predicts that approximately <strong>{prediction.predictedMeals}</strong> meals will be needed.
                      </p>
                      <p className="text-gray-700">
                        This prediction accounts for the day of the week, weather conditions, and special circumstances you've provided.
                      </p>
                      {parameters.rainfall > 0 && (
                        <p className="text-yellow-600">
                          <strong>Note:</strong> Rainfall usually decreases cafeteria attendance.
                        </p>
                      )}
                      {parameters.isHoliday && (
                        <p className="text-yellow-600">
                          <strong>Note:</strong> Holiday periods typically show significantly reduced meal demand.
                        </p>
                      )}
                    </div>
                    
                    <button
                      onClick={() => setShowHistorical(!showHistorical)}
                      className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {showHistorical ? "Hide Historical Data" : "Show Historical Data"}
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <p className="text-gray-500">Enter the parameters and run the prediction model to see results here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Historical Data Comparison */}
          {showHistorical && prediction && (
            <div className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Historical Prediction Accuracy</h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual Meals</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Predicted Meals</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {historicalData.map((record, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.actualMeals}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.predictedMeals}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${record.accuracy > 97 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {record.accuracy}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm text-blue-700">
                        Our linear regression model has maintained an average accuracy of 97% over the past month. 
                        The model is continuously trained with new data to improve predictions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Explanation Section */}
          <div className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">About the AI Model</h2>
              
              <div className="prose prose-indigo max-w-none">
                <p>
                  This linear regression model predicts the number of meals needed at university cafeterias based on six key parameters:
                </p>
                
                <ul>
                  <li><strong>Student Count:</strong> Total number of students enrolled.</li>
                  <li><strong>Day of Week:</strong> Different patterns for weekdays vs weekends.</li>
                  <li><strong>Holiday Flag:</strong> Holidays significantly reduce cafeteria attendance.</li>
                  <li><strong>Temperature:</strong> Weather affects student decisions to stay on campus.</li>
                  <li><strong>Rainfall:</strong> Precipitation typically reduces cafeteria attendance.</li>
                  <li><strong>Special Events:</strong> Campus events can increase meal demand.</li>
                </ul>
                
                <p>
                  The model learns from historical data patterns and adjusts predictions accordingly. 
                  While no prediction is perfect, this model has demonstrated high accuracy in meal planning, helping reduce food waste and ensure adequate supply.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-md my-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>
                          This model is a decision support tool and should be used in conjunction with human oversight. 
                          Always adjust the final meal count based on specific local factors that the model may not account for.
                        </p>
                      </div>
                    </div>
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

export default UniversityStaffAIModel; 