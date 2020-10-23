import { VideoLesson } from './reducer';

export const UPDATE_LESSONS = 'UPDATE_LESSONS/VIDEO_LESSONS';
export const DELETE_LESSON = 'DELETE_LESSON/VIDEO_LESSONS';

export interface UpdateLessonsAction {
  type: typeof UPDATE_LESSONS;
  payload: VideoLesson[];
}

export interface DeleteLessonAction {
  type: typeof DELETE_LESSON;
  payload: number;
}

export type VideoLessonsActionType = UpdateLessonsAction | DeleteLessonAction;
