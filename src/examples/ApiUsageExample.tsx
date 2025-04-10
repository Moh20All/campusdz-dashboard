import React, { useState, useEffect } from 'react';
import { API_CONFIG, getApiUrl, TIMEOUTS } from '../config';

/**
 * Example component showing how to use the global config for API calls
 * This is just for demonstration purposes and not meant to be used in the actual app
 */
const ApiUsageExample: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Example of using the config to form the API URL
        const response = await fetch(getApiUrl('/api/example'), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // Use timeout from config
          signal: AbortSignal.timeout(TIMEOUTS.DEFAULT_REQUEST),
        });

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">API Configuration Example</h2>
      
      <div className="mb-4">
        <h3 className="text-md font-medium">Server Configuration:</h3>
        <pre className="bg-gray-100 p-2 rounded mt-2">
          {`Server IP: ${API_CONFIG.SERVER_IP}
Server Port: ${API_CONFIG.SERVER_PORT}
Base URL: ${API_CONFIG.BASE_URL}`}
        </pre>
      </div>

      <div className="mb-4">
        <h3 className="text-md font-medium">API Endpoint Example:</h3>
        <p className="text-gray-600 mt-1">
          {`API URL for users endpoint: ${getApiUrl('/api/users')}`}
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-md font-medium">API Request Status:</h3>
        {loading && <p className="text-blue-600">Loading data...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        {data && (
          <div className="bg-gray-100 p-2 rounded mt-2">
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiUsageExample; 