import { Gymnastic } from './reducer';

export const UPDATE_GYMNSATICS = 'UPDATE_GYMNASTICS/GYMNASTICS';
export const DELETE_GYMNASTIC = 'DELETE_GYMNASTIC/GYMNASTICS';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE/GYMNASTICS';
export const UPDATE_CURRENT_CHUNK = 'UPDATE_CURRENT_CHUNK/GYMNASTICS';
export const UPDATE_SUBTYPE_ID = 'UPDATE_SUBTYPE_ID/GYMNASTICS';
export const UPDATE_TITLE = 'UPDATE_TITLE/GYMNASTICS';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION/GYMNASTICS';
export const UPDATE_PICTURE = 'UPDATE_PICTURE/GYMNASTICS';
export const CLEAR_FORM = 'CLEAR_FORM/GYMNASTICS';
export const SET_UPLOAD_DIALOG_OPEN = 'SET_UPLOAD_DIALOG_OPEN/GYMNASTICS';

export interface UpdateGymnasticsAction {
  type: typeof UPDATE_GYMNSATICS;
  payload: Gymnastic[];
}

export interface DeleteGymnasticAction {
  type: typeof DELETE_GYMNASTIC;
  payload: number;
}

export interface UpdateCurrentPageAction {
  type: typeof UPDATE_CURRENT_PAGE;
  payload: number;
}

export interface UpdateCurrentChunkAction {
  type: typeof UPDATE_CURRENT_CHUNK;
  payload: Gymnastic[];
}

export interface UpdateSubtypeIdAction {
  type: typeof UPDATE_SUBTYPE_ID;
  payload: number;
}

export interface UpdateTitleAction {
  type: typeof UPDATE_TITLE;
  payload: string;
}

export interface UpdateDescriptionAction {
  type: typeof UPDATE_DESCRIPTION;
  payload: string;
}

export interface UpdatePictureAction {
  type: typeof UPDATE_PICTURE;
  payload?: string;
}

export interface ClearFormAction {
  type: typeof CLEAR_FORM;
}

export interface SetUploadDialogOpenAction {
  type: typeof SET_UPLOAD_DIALOG_OPEN;
  payload: boolean;
}

export type GymnasticsActionType =
  | UpdateGymnasticsAction
  | DeleteGymnasticAction
  | UpdateCurrentPageAction
  | UpdateCurrentChunkAction
  | UpdateSubtypeIdAction
  | UpdateTitleAction
  | UpdateDescriptionAction
  | UpdatePictureAction
  | ClearFormAction
  | SetUploadDialogOpenAction;
