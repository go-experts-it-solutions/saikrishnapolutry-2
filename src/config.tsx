// src/config.js

const config = {
  API_URL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000',
};

export default config;
