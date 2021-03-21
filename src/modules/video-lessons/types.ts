import { VideoLesson } from './reducer';

export const UPDATE_LESSONS = 'UPDATE_LESSONS/VIDEO_LESSONS';
export const DELETE_LESSON = 'DELETE_LESSON/VIDEO_LESSONS';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE/VIDEO_LESSONS';
export const UPDATE_CURRENT_CHUNK = 'UPDATE_CURRENT_CHUNK/VIDEO_LESSONS';
export const UPDATE_TITLE = 'UPDATE_TITLE/VIDEO_LESSONS';
export const UPDATE_SUBTITLE = 'UPDATE_SUBTITLE/VIDEO_LESSONS';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION/VIDEO_LESSONS';
export const ADD_SCREENSHOT = 'ADD_SCREENSHOT/VIDEO_LESSONS';
export const DELETE_SCREENSHOT = 'DELETE_SCREENSHOT/VIDEO_LESSONS';
export const UPDATE_SCREENSHOTS = 'UPDATE_SCREENSHOTS/VIDEO_LESSONS';
export const UPDATE_PRICE = 'UPDATE_PRICE/VIDEO_LESSONS';
export const CLEAR_FORM = 'CLEAR_FORM/VIDEO_LESSONS';
export const SET_UPLOAD_DIALOG_OPEN = 'SET_UPLOAD_DIALOG_OPEN/VIDEO_LESSONS';
export const UPDATE_FREE_LESSON_EMAIL =
  'UPDATE_FREE_LESSON_EMAIL/VIDEO_LESSONS';

export interface UpdateLessonsAction {
  type: typeof UPDATE_LESSONS;
  payload: VideoLesson[];
}

export interface DeleteLessonAction {
  type: typeof DELETE_LESSON;
  payload: number;
}

export interface UpdateCurrentPageAction {
  type: typeof UPDATE_CURRENT_PAGE;
  payload: number;
}

export interface UpdateCurrentChunkAction {
  type: typeof UPDATE_CURRENT_CHUNK;
  payload: VideoLesson[];
}

export interface UpdateTitleAction {
  type: typeof UPDATE_TITLE;
  payload: string;
}

export interface UpdateSubtitleAction {
  type: typeof UPDATE_SUBTITLE;
  payload: string;
}

export interface UpdateDescriptionAction {
  type: typeof UPDATE_DESCRIPTION;
  payload: string;
}

export interface AddScreenshotAction {
  type: typeof ADD_SCREENSHOT;
  payload: string;
}

export interface DeleteScreenshotAction {
  type: typeof DELETE_SCREENSHOT;
  payload: string;
}

export interface UpdateScreenshotsAction {
  type: typeof UPDATE_SCREENSHOTS;
  payload: string[];
}

export interface UpdatePriceAction {
  type: typeof UPDATE_PRICE;
  payload: string;
}

export interface ClearFormAction {
  type: typeof CLEAR_FORM;
}

export interface SetUploadDialogOpenAction {
  type: typeof SET_UPLOAD_DIALOG_OPEN;
  payload: boolean;
}

export interface UpdateFreeLessonEmailAction {
  type: typeof UPDATE_FREE_LESSON_EMAIL;
  payload: string;
}

export type VideoLessonsActionType =
  | UpdateLessonsAction
  | DeleteLessonAction
  | UpdateCurrentPageAction
  | UpdateCurrentChunkAction
  | UpdateTitleAction
  | UpdateSubtitleAction
  | UpdateDescriptionAction
  | AddScreenshotAction
  | DeleteScreenshotAction
  | UpdateScreenshotsAction
  | UpdatePriceAction
  | ClearFormAction
  | SetUploadDialogOpenAction
  | UpdateFreeLessonEmailAction;
