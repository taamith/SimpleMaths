import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Activity, Grade} from '@core/types/learning';

interface LearningState {
  selectedGrade: Grade;
  todaysActivities: Activity[];
}

const initialState: LearningState = {
  selectedGrade: 'UKG',
  todaysActivities: []
};

const learningSlice = createSlice({
  name: 'learning',
  initialState,
  reducers: {
    setGrade(state, action: PayloadAction<Grade>) {
      state.selectedGrade = action.payload;
    },
    setTodaysActivities(state, action: PayloadAction<Activity[]>) {
      state.todaysActivities = action.payload;
    }
  }
});

export const {setGrade, setTodaysActivities} = learningSlice.actions;
export default learningSlice.reducer;
