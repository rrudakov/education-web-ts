import { Dress } from './reducer';

export const UPDATE_DRESSES = 'UPDATE_DRESSES/DRESSES';
export const DELETE_DRESS = 'DELETE_DRESS/DRESSES';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE/DRESSES';
export const UPDATE_CURRENT_CHUNK = 'UPDATE_CURRENT_CHUNK/DRESSES';
export const UPDATE_TITLE = 'UPDATE_TITLE/DRESSES';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION/DRESSES';
export const UPDATE_SIZE = 'UPDATE_SIZE/DRESSES';
export const ADD_PICTURE = 'ADD_PICTURE/DRESSES';
export const DELETE_PICTURE = 'DELETE_PICTURE/DRESSES';
export const UPDATE_PICTURES = 'UPDATE_PICTURES/DRESSES';
export const UPDATE_PRICE = 'UPDATE_PRICE/DRESSES';
export const CLEAR_FORM = 'CLEAR_FORM/DRESSES';
export const SET_UPLOAD_DIALOG_OPEN = 'SET_UPLOAD_DIALOG_OPEN/DRESSES';

export interface UpdateDressesAction {
  type: typeof UPDATE_DRESSES;
  payload: Dress[];
}

export interface DeleteDressAction {
  type: typeof DELETE_DRESS;
  payload: number;
}

export interface UpdateCurrentPageAction {
  type: typeof UPDATE_CURRENT_PAGE;
  payload: number;
}

export interface UpdateCurrentChunkAction {
  type: typeof UPDATE_CURRENT_CHUNK;
  payload: Dress[];
}

export interface UpdateTitleAction {
  type: typeof UPDATE_TITLE;
  payload: string;
}

export interface UpdateDescriptionAction {
  type: typeof UPDATE_DESCRIPTION;
  payload: string;
}

export interface UpdateSizeAction {
  type: typeof UPDATE_SIZE;
  payload: number;
}

export interface AddPictureAction {
  type: typeof ADD_PICTURE;
  payload: string;
}

export interface DeletePictureAction {
  type: typeof DELETE_PICTURE;
  payload: string;
}

export interface UpdatePicturesAction {
  type: typeof UPDATE_PICTURES;
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

export type DressesActionType =
  | UpdateDressesAction
  | DeleteDressAction
  | UpdateCurrentPageAction
  | UpdateCurrentChunkAction
  | UpdateTitleAction
  | UpdateDescriptionAction
  | UpdateSizeAction
  | AddPictureAction
  | DeletePictureAction
  | UpdatePicturesAction
  | UpdatePriceAction
  | ClearFormAction
  | SetUploadDialogOpenAction;
