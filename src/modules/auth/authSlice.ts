import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserProfile {
  id: string;
  name: string;
  role: 'Parent' | 'Teacher' | 'Student';
}

interface AuthState {
  isAuthenticated: boolean;
  profile?: UserProfile;
}

const initialState: AuthState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<UserProfile>) {
      state.isAuthenticated = true;
      state.profile = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.profile = undefined;
    }
  }
});

export const {loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;
