import axios from 'axios';

console.log(import.meta.env.VITE_API_URL);

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.auth_token = token;
  }
  return config;
});
