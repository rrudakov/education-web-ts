import { Presentation } from './reducer';

export const UPDATE_PRESENTATIONS = 'UPDATE_PRESENTATIONS/PRESENTATIONS';
export const DELETE_PRESENTATION = 'DELETE_PRESENTATION/PRESENTATIONS';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE/PRESENTATIONS';
export const UPDATE_CURRENT_CHUNK = 'UPDATE_CURRENT_CHUNK/PRESENTATIONS';
export const CLEAR_FORM = 'CLEAR_FORM/PRESENTATIONS';
export const UPDATE_CURRENT_PRESENTATION =
  'UPDATE_CURRENT_PRESENTATION/PRESENTATIONS';
export const UPDATE_TITLE = 'UPDATE_TITLE/PRESENTATIONS';
export const UPDATE_URL = 'UPDATE_URL/PRESENTATIONS';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION/PRESENTATIONS';
export const UPDATE_IS_PUBLIC = 'UPDATE_IS_PUBLIC/PRESENTATIONS';
export const UPDATE_ATTACHMENT = 'UPDATE_ATTACHMENT/PRESENTATIONS';
export const UPDATE_PREVIEW = 'UPDATE_PREVIEW/PRESENTATIONS';
export const UPDATE_IS_PREVIEW_DIALOG_OPEN =
  'UPDATE_IS_PREVIEW_DIALOG_OPEN/PRESENTATIONS';
export const UPDATE_IS_MANUAL_DIALOG_OPEN =
  'UPDATE_IS_MANUAL_DIALOG_OPEN/PRESENTATIONS';

export interface UpdatePresentationsAction {
  type: typeof UPDATE_PRESENTATIONS;
  payload: Presentation[];
}

export interface DeletePresentationAction {
  type: typeof DELETE_PRESENTATION;
  payload: number;
}

export interface UpdateCurrentPageAction {
  type: typeof UPDATE_CURRENT_PAGE;
  payload: number;
}

export interface UpdateCurrentChunkAction {
  type: typeof UPDATE_CURRENT_CHUNK;
  payload: Presentation[];
}

export interface ClearFormAction {
  type: typeof CLEAR_FORM;
}

export interface UpdateCurrentPresentationAction {
  type: typeof UPDATE_CURRENT_PRESENTATION;
  payload?: Presentation;
}

export interface UpdateTitleAction {
  type: typeof UPDATE_TITLE;
  payload: string;
}

export interface UpdateUrlAction {
  type: typeof UPDATE_URL;
  payload: string;
}

export interface UpdateDescriptionAction {
  type: typeof UPDATE_DESCRIPTION;
  payload: string;
}

export interface UpdateIsPublicAction {
  type: typeof UPDATE_IS_PUBLIC;
  payload: boolean;
}

export interface UpdateAttachmentAction {
  type: typeof UPDATE_ATTACHMENT;
  payload?: string;
}

export interface UpdatePreviewAction {
  type: typeof UPDATE_PREVIEW;
  payload?: string;
}

export interface UpdateIsPreviewDialogOpenAction {
  type: typeof UPDATE_IS_PREVIEW_DIALOG_OPEN;
  payload: boolean;
}

export interface UpdateIsManualDialogOpenAction {
  type: typeof UPDATE_IS_MANUAL_DIALOG_OPEN;
  payload: boolean;
}

export type PresentationsActionType =
  | UpdatePresentationsAction
  | DeletePresentationAction
  | UpdateCurrentPageAction
  | UpdateCurrentChunkAction
  | ClearFormAction
  | UpdateCurrentPresentationAction
  | UpdateTitleAction
  | UpdateUrlAction
  | UpdateDescriptionAction
  | UpdateIsPublicAction
  | UpdateAttachmentAction
  | UpdatePreviewAction
  | UpdateIsPreviewDialogOpenAction
  | UpdateIsManualDialogOpenAction;
