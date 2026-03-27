import {useCallback} from 'react';

import {useAppDispatch, useAppSelector} from '@shared/hooks/reduxHooks';

import {learningRepository} from './learningRepository';
import {setGrade, setTodaysActivities} from './learningSlice';

export const useLearning = () => {
  const dispatch = useAppDispatch();
  const selectedGrade = useAppSelector(state => state.learning.selectedGrade);
  const todaysActivities = useAppSelector(state => state.learning.todaysActivities);

  const refreshActivities = useCallback(async () => {
    const activities = await learningRepository.getActivitiesByGrade(selectedGrade);
    dispatch(setTodaysActivities(activities));
  }, [dispatch, selectedGrade]);

  const updateGrade = useCallback((grade: 'UKG' | 'Grade1' | 'Grade2') => {
    dispatch(setGrade(grade));
  }, [dispatch]);

  return {selectedGrade, todaysActivities, refreshActivities, updateGrade};
};
