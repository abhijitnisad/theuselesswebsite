import axios from 'axios';

// Use environment variable for backend URL, fallback to local
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRandomWebsite = async () => {
  try {
    const response = await api.get('/random');
    return response.data;
  } catch (error) {
    console.error('API Error fetching random website:', error);
    throw error;
  }
};

export const addUselessWebsite = async (url) => {
  try {
    const response = await api.post('/random', { url });
    return response.data;
  } catch (error) {
    console.error('API Error adding website:', error);
    throw error;
  }
};

export default api;
