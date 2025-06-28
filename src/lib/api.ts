import axios from 'axios';
import { useAuthStore } from '../modules/auth/hooks/useAuthStore';

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

api.interceptors.response.use(
  response => response,
  error => {
    if (
      error.response?.status === 401 &&
      error.response?.data?.error === 'Not valid token'
    ) {
      localStorage.removeItem('token');
      useAuthStore.getState().setUser(null);
    }
    return Promise.reject(error);
  }
);
