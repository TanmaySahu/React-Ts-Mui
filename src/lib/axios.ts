import axios from 'axios';
//import AxiosMockAdapter from 'axios-mock-adapter';

const axiosInstance = axios.create({
  // baseURL: 'http://ec2-13-58-162-31.us-east-2.compute.amazonaws.com:3000/' //'http://quoteonhome.com:3000/',
  //baseURL: 'http://dev2.quoteonhome.com/'
  baseURL: 'http://localhost:3000/'
  // baseURL: 'https://api.cheapestringless.com/'
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((
    error.response && error.response.data
  ) || 'Something went wrong')
);

// export const mock = new AxiosMockAdapter(axiosInstance, { delayResponse: 0 });

export default axiosInstance;
