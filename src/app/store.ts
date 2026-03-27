import {configureStore} from '@reduxjs/toolkit';

import authReducer from '@modules/auth/authSlice';
import learningReducer from '@modules/learning/learningSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    learning: learningReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
