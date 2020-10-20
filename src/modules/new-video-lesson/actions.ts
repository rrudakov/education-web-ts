import {
  SET_UPLOAD_DIALOG_OPEN,
  SetUploadDialogOpenAction,
  ADD_SCREENSHOT,
  AddScreenshotAction,
  DeleteScreenshotAction,
  DELETE_SCREENSHOT,
  UpdateTitleAction,
  UPDATE_TITLE,
  UpdateSubtitleAction,
  UPDATE_SUBTITLE,
  UpdateDescriptionAction,
  UPDATE_DESCRIPTION,
  UpdatePriceAction,
  UPDATE_PRICE,
} from './types';

export const setUpdateDialogOpenActionCreator = (
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

export const updatePriceActionCreator = (price: string): UpdatePriceAction => ({
  type: UPDATE_PRICE,
  payload: price,
});
