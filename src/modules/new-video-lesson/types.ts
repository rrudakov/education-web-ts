export const UPDATE_TITLE = 'UPDATE_TITLE/NEW_VIDEO_LESSON';
export const UPDATE_SUBTITLE = 'UPDATE_SUBTITLE/NEW_VIDEO_LESSON';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION/NEW_VIDEO_LESSON';
export const ADD_SCREENSHOT = 'ADD_SCREENSHOT/NEW_VIDEO_LESSON';
export const DELETE_SCREENSHOT = 'DELETE_SCREENSHOT/NEW_VIDEO_LESSON';
export const UPDATE_PRICE = 'UPDATE_PRICE/NEW_VIDEO_LESSON';
export const SET_UPLOAD_DIALOG_OPEN = 'SET_UPLOAD_DIALOG_OPEN/NEW_VIDEO_LESSON';

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

export interface UpdatePriceAction {
  type: typeof UPDATE_PRICE;
  payload: string;
}

export interface SetUploadDialogOpenAction {
  type: typeof SET_UPLOAD_DIALOG_OPEN;
  payload: boolean;
}

export type NewVideoLessonActionType =
  | UpdateTitleAction
  | UpdateSubtitleAction
  | UpdateDescriptionAction
  | AddScreenshotAction
  | DeleteScreenshotAction
  | UpdatePriceAction
  | SetUploadDialogOpenAction;