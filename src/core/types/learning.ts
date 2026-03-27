export type Grade = 'UKG' | 'Grade1' | 'Grade2';

export interface Activity {
  id: string;
  title: string;
  type: 'Math' | 'English' | 'EVS';
  points: number;
  estimatedMinutes: number;
}

export interface GradeContent {
  grade: Grade;
  activities: Activity[];
}
