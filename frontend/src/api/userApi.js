
import axios from "axios";

const API = axios.create({
  baseURL: "https://book-bazaar-a-peer-to-peer-book-exc-one.vercel.app/", 
});

// Automatically attach token if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});


export const getUserProfile = async () => {
  const { data } = await API.get("/users/profile");
  return data;
};
