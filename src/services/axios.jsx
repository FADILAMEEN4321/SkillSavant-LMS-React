import axios from 'axios';
import {baseUrl} from './constants';
import jwt_decode from 'jwt-decode';



const axiosInstance = axios.create({
    baseURL: baseUrl,
  });


axiosInstance.interceptors.request.use(
    async (config) => {
      const tokens = JSON.parse(localStorage.getItem('authTokens'));
  
      if (tokens && tokens.access) {
        const decodedToken = jwt_decode(tokens.access);
  
        // Check if the access token is expired
        if (decodedToken.exp * 1000 < Date.now()) {
          // Access token has expired, attempt to refresh
          const response = await axios.post(`${baseUrl}token/refresh/`, {
            refresh: tokens.refresh,
          });
  
          // If refresh is successful, update the tokens
          if (response.status === 200) {
            const newTokens = response.data;
            localStorage.setItem('authTokens', JSON.stringify(newTokens));
            config.headers.Authorization = `Bearer ${newTokens.access}`;
          } else {
            // If refresh fails, redirect to login or handle accordingly
            // You might want to clear tokens and redirect to login page    

          }
        } else {
          // Token is still valid, use it in the request
          config.headers.Authorization = `Bearer ${tokens.access}`;
        }
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );






const axiosAuthorized = axios.create({
    baseURL: baseUrl,
})





export { axiosInstance, axiosAuthorized};