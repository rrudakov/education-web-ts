import { VideoLesson } from './reducer';
import {
  DeleteLessonAction,
  DELETE_LESSON,
  UpdateLessonsAction,
  UPDATE_LESSONS,
} from './types';

export const updateLessonsActionCreator = (
  lessons: VideoLesson[]
): UpdateLessonsAction => ({
  type: UPDATE_LESSONS,
  payload: lessons,
});

export const deleteLessonActionCreator = (
  lessonId: number
): DeleteLessonAction => ({
  type: DELETE_LESSON,
  payload: lessonId,
});
