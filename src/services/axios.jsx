import axios from 'axios';
import {baseUrl} from './constants'

const axiosInstance = axios.create({
    baseURL: baseUrl,
  });
   

const axiosAuthorized = axios.create({
    baseURL: baseUrl,
})


// Axios request interceptor
axiosAuthorized.interceptors.request.use(
  (config) => {
    // Check if an authentication token exists
    const authTokens = JSON.parse(localStorage.getItem('authTokens')); 

    if (authTokens && authTokens.access) {
      // If a token exists, add it to the request headers
      config.headers['Authorization'] = `Bearer ${authTokens.access}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



export { axiosInstance, axiosAuthorized };