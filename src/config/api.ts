import axios from 'axios';
import { AppError } from '../utils/AppError';
import { APP_CONFIG } from './app-config';

const api = axios.create({
  baseURL: `${APP_CONFIG.apiBaseUrl}`,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    }

    return Promise.reject(error);
  },
);

export { api };
