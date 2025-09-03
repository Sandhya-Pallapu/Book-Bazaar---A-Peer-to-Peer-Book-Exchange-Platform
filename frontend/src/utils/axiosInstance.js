// axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://book-bazaar-a-peer-to-peer-book-exc-one.vercel.app/', 
  withCredentials: true, 
});

export default instance;
