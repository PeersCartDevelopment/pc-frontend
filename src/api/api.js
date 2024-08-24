import axios from 'axios';

// Set the base URL dynamically using an environment variable
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api', // Fallback to '/api' if the environment variable is not set
});

export const fetchSomething = () => API.get('/');