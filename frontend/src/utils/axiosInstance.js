// axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Your backend URL
  withCredentials: true, // If you use cookies (optional)
});

export default instance;
