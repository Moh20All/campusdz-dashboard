/**
 * Global configuration settings for the application
 */

// API Server configuration
export const API_CONFIG = {
  SERVER_IP: '192.168.76.96',
  SERVER_PORT: 5000,
  BASE_URL: 'http://192.168.76.96:5000',
};

// Helper function to get the full API URL for a specific endpoint
export const getApiUrl = (endpoint: string): string => {
  // Add leading slash if not present
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_CONFIG.BASE_URL}${normalizedEndpoint}`;
};

// Various timeouts for API calls (in milliseconds)
export const TIMEOUTS = {
  DEFAULT_REQUEST: 10000, // 10 seconds
  LONG_REQUEST: 30000,    // 30 seconds
};

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_ROLE: 'user_role',
  USER_INFO: 'user_info',
};

export default API_CONFIG; 