import {
  ADD_SCREENSHOT,
  DELETE_LESSON,
  DELETE_SCREENSHOT,
  SET_UPLOAD_DIALOG_OPEN,
  UPDATE_DESCRIPTION,
  UPDATE_LESSONS,
  UPDATE_PRICE,
  UPDATE_SUBTITLE,
  UPDATE_TITLE,
  VideoLessonsActionType,
} from './types';

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

export interface VideoLessonForm {
  title: string;
  subtitle: string;
  description: string;
  screenshots: string[];
  price: string;
  uploadDialogOpen: boolean;
}

export interface VideoLessonsState {
  lessons: VideoLesson[];
  form: VideoLessonForm;
}

export const initialState: VideoLessonsState = {
  lessons: [],
  form: {
    title: '',
    subtitle: '',
    description: '',
    screenshots: [],
    price: '',
    uploadDialogOpen: false,
  },
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
    case UPDATE_TITLE:
      return { ...state, form: { ...state.form, title: action.payload } };
    case UPDATE_SUBTITLE:
      return { ...state, form: { ...state.form, subtitle: action.payload } };
    case UPDATE_DESCRIPTION:
      return { ...state, form: { ...state.form, description: action.payload } };
    case ADD_SCREENSHOT:
      return {
        ...state,
        form: {
          ...state.form,
          screenshots: [...state.form.screenshots, action.payload],
        },
      };
    case DELETE_SCREENSHOT:
      return {
        ...state,
        form: {
          ...state.form,
          screenshots: state.form.screenshots.filter(
            (s) => s !== action.payload
          ),
        },
      };
    case UPDATE_PRICE:
      return { ...state, form: { ...state.form, price: action.payload } };
    case SET_UPLOAD_DIALOG_OPEN:
      return {
        ...state,
        form: { ...state.form, uploadDialogOpen: action.payload },
      };
    default:
      return state;
  }
};
