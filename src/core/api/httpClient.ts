import axios from 'axios';

import {env} from '@core/config/env';
import {tokenStorage} from '@core/storage/tokenStorage';

export const httpClient = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 15000
});

httpClient.interceptors.request.use(async config => {
  const token = await tokenStorage.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
