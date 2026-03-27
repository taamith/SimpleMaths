import {httpClient} from '@core/api/httpClient';

interface LoginRequest {
  mobileNumber: string;
  otp: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  profile: {
    id: string;
    name: string;
    role: 'Parent' | 'Teacher' | 'Student';
  };
}

export const authApi = {
  async login(payload: LoginRequest) {
    const {data} = await httpClient.post<LoginResponse>('/v1/auth/login', payload);
    return data;
  }
};
