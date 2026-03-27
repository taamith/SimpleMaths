import {useCallback} from 'react';

import {useAppDispatch} from '@shared/hooks/reduxHooks';
import {tokenStorage} from '@core/storage/tokenStorage';

import {authApi} from './authApi';
import {loginSuccess, logout} from './authSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const login = useCallback(async (mobileNumber: string, otp: string) => {
    const response = await authApi.login({mobileNumber, otp});
    await tokenStorage.setTokens(response.accessToken, response.refreshToken);
    dispatch(loginSuccess(response.profile));
  }, [dispatch]);

  const signOut = useCallback(async () => {
    await tokenStorage.clear();
    dispatch(logout());
  }, [dispatch]);

  return {login, signOut};
};
