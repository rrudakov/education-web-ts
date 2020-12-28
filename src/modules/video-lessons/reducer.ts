import { splitIntoChunks } from '../../core/utils/helpers';
import {
  ADD_SCREENSHOT,
  CLEAR_FORM,
  DELETE_LESSON,
  DELETE_SCREENSHOT,
  SET_UPLOAD_DIALOG_OPEN,
  UPDATE_CURRENT_CHUNK,
  UPDATE_CURRENT_PAGE,
  UPDATE_DESCRIPTION,
  UPDATE_LESSONS,
  UPDATE_PRICE,
  UPDATE_SCREENSHOTS,
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

export const ITEMS_ON_PAGE = 5;

export interface VideoLessonsState {
  lessons: VideoLesson[];
  pagesCount: number;
  currentPage: number;
  chunks: VideoLesson[][];
  currentChunk: VideoLesson[];
  form: VideoLessonForm;
}

export const initialState: VideoLessonsState = {
  lessons: [],
  pagesCount: 1,
  currentPage: 1,
  chunks: [],
  currentChunk: [],
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
  let chunks = [];
  switch (action.type) {
    case UPDATE_LESSONS:
      chunks = splitIntoChunks(action.payload, ITEMS_ON_PAGE);
      return {
        ...state,
        lessons: action.payload,
        pagesCount: Math.ceil(action.payload.length / ITEMS_ON_PAGE),
        currentPage: 1,
        chunks: chunks,
        currentChunk: chunks[0] || [],
      };
    case DELETE_LESSON:
      const newVideoLessons = state.lessons.filter(
        (l) => l.id !== action.payload
      );
      chunks = splitIntoChunks(newVideoLessons, ITEMS_ON_PAGE);
      return {
        ...state,
        lessons: newVideoLessons,
        pagesCount: Math.ceil(newVideoLessons.length / ITEMS_ON_PAGE),
        currentPage: 1,
        chunks: chunks,
        currentChunk: chunks[0] || [],
      };
    case UPDATE_CURRENT_CHUNK:
      return { ...state, currentChunk: action.payload };
    case UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
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
    case UPDATE_SCREENSHOTS:
      return { ...state, form: { ...state.form, screenshots: action.payload } };
    case UPDATE_PRICE:
      return { ...state, form: { ...state.form, price: action.payload } };
    case CLEAR_FORM:
      return {
        ...state,
        form: {
          title: '',
          subtitle: '',
          description: '',
          screenshots: [],
          price: '',
          uploadDialogOpen: false,
        },
      };
    case SET_UPLOAD_DIALOG_OPEN:
      return {
        ...state,
        form: { ...state.form, uploadDialogOpen: action.payload },
      };
    default:
      return state;
  }
};
