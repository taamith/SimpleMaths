import gradeContent from '../../assets/content/grade-content.json';
import {Activity, Grade} from '@core/types/learning';

const contentMap = gradeContent as Record<Grade, Activity[]>;

export const learningRepository = {
  async getActivitiesByGrade(grade: Grade): Promise<Activity[]> {
    return Promise.resolve(contentMap[grade] ?? []);
  }
};
