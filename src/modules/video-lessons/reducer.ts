import { DELETE_LESSON, UPDATE_LESSONS, VideoLessonsActionType } from './types';

export interface VideoLesson {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  screenshots: string[];
  price: string;
  created_on: string;
  updated_on: string;
}

export interface VideoLessonsState {
  lessons: VideoLesson[];
}

export const initialState: VideoLessonsState = {
  lessons: [],
};

export const videoLessonsReducer = (
  state: VideoLessonsState = initialState,
  action: VideoLessonsActionType
): VideoLessonsState => {
  switch (action.type) {
    case UPDATE_LESSONS:
      return { ...state, lessons: action.payload };
    case DELETE_LESSON:
      return {
        ...state,
        lessons: state.lessons.filter((l) => l.id !== action.payload),
      };
    default:
      return state;
  }
};
