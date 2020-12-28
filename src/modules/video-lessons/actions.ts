import { VideoLesson } from './reducer';
import {
  AddScreenshotAction,
  ADD_SCREENSHOT,
  ClearFormAction,
  CLEAR_FORM,
  DeleteLessonAction,
  DeleteScreenshotAction,
  DELETE_LESSON,
  DELETE_SCREENSHOT,
  SetUploadDialogOpenAction,
  SET_UPLOAD_DIALOG_OPEN,
  UpdateCurrentChunkAction,
  UpdateCurrentPageAction,
  UpdateDescriptionAction,
  UpdateLessonsAction,
  UpdatePriceAction,
  UpdateScreenshotsAction,
  UpdateSubtitleAction,
  UpdateTitleAction,
  UPDATE_CURRENT_CHUNK,
  UPDATE_CURRENT_PAGE,
  UPDATE_DESCRIPTION,
  UPDATE_LESSONS,
  UPDATE_PRICE,
  UPDATE_SCREENSHOTS,
  UPDATE_SUBTITLE,
  UPDATE_TITLE,
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

export const updateCurrentPageActionCreator = (
  page: number
): UpdateCurrentPageAction => ({
  type: UPDATE_CURRENT_PAGE,
  payload: page,
});

export const updateCurrentChunkActionCreator = (
  chunk: VideoLesson[]
): UpdateCurrentChunkAction => ({
  type: UPDATE_CURRENT_CHUNK,
  payload: chunk,
});

export const setUploadDialogOpenActionCreator = (
  open: boolean
): SetUploadDialogOpenAction => ({
  type: SET_UPLOAD_DIALOG_OPEN,
  payload: open,
});

export const updateTitleActionCreator = (title: string): UpdateTitleAction => ({
  type: UPDATE_TITLE,
  payload: title,
});

export const updateSubtitleActionCreator = (
  subtitle: string
): UpdateSubtitleAction => ({
  type: UPDATE_SUBTITLE,
  payload: subtitle,
});

export const updateDescriptionActionCreator = (
  description: string
): UpdateDescriptionAction => ({
  type: UPDATE_DESCRIPTION,
  payload: description,
});

export const addScreenshotActionCreator = (
  screenshot: string
): AddScreenshotAction => ({
  type: ADD_SCREENSHOT,
  payload: screenshot,
});

export const deleteScreenshotActionCreator = (
  screenshot: string
): DeleteScreenshotAction => ({
  type: DELETE_SCREENSHOT,
  payload: screenshot,
});

export const updateScreenshotsActionCreator = (
  screenshots: string[]
): UpdateScreenshotsAction => ({
  type: UPDATE_SCREENSHOTS,
  payload: screenshots,
});

export const clearFormActionCreator = (): ClearFormAction => ({
  type: CLEAR_FORM,
});

export const updatePriceActionCreator = (price: string): UpdatePriceAction => ({
  type: UPDATE_PRICE,
  payload: price,
});
