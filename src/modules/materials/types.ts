import { DownloadMaterial } from './reducer';

export const UPDATE_DOWNLOAD_MATERIALS = 'UPDATE_MATERIALS/MATERIALS';
export const DELETE_DOWNLOAD_MATERIAL = 'DELETE_MATERIAL/MATERIALS';
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE/MATERIALS';
export const UPDATE_CURRENT_CHUNK = 'UPDATE_CURRENT_CHUNK/MATERIALS';
export const UPDATE_TITLE = 'UPDATE_TITLE/MATERIALS';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION/MATERIALS';
export const UPDATE_PREVIEW = 'UPDATE_PREVIEW/MATERIALS';
export const UPDATE_STORE_LINK = 'UPDATE_STORE_LINK/MATERIALS';
export const UPDATE_PRICE = 'UPDATE_PRICE/MATERIALS';
export const CLEAR_FORM = 'CLEAR_FORM/MATERIALS';
export const UPDATE_IS_PREVIEW_DIALOG_OPEN =
  'UPDATE_IS_PREVIEW_DIALOG_OPEN/MATERIALS';

export interface UpdateDownloadMaterialsAction {
  type: typeof UPDATE_DOWNLOAD_MATERIALS;
  payload: DownloadMaterial[];
}

export interface DeleteDownloadMaterialAction {
  type: typeof DELETE_DOWNLOAD_MATERIAL;
  payload: number;
}

export interface UpdateCurrentPageAction {
  type: typeof UPDATE_CURRENT_PAGE;
  payload: number;
}

export interface UpdateCurrentChunkAction {
  type: typeof UPDATE_CURRENT_CHUNK;
  payload: DownloadMaterial[];
}

export interface UpdateTitleAction {
  type: typeof UPDATE_TITLE;
  payload: string;
}

export interface UpdateDescriptionAction {
  type: typeof UPDATE_DESCRIPTION;
  payload: string;
}

export interface UpdatePreviewAction {
  type: typeof UPDATE_PREVIEW;
  payload: string;
}

export interface UpdateStoreLinkAction {
  type: typeof UPDATE_STORE_LINK;
  payload: string;
}

export interface UpdatePriceAction {
  type: typeof UPDATE_PRICE;
  payload: string;
}

export interface ClearFormAction {
  type: typeof CLEAR_FORM;
}

export interface UpdateIsPreviewDialogOpenAction {
  type: typeof UPDATE_IS_PREVIEW_DIALOG_OPEN;
  payload: boolean;
}

export type DownloadMaterialsActionType =
  | UpdateDownloadMaterialsAction
  | DeleteDownloadMaterialAction
  | UpdateCurrentPageAction
  | UpdateCurrentChunkAction
  | UpdateTitleAction
  | UpdateDescriptionAction
  | UpdatePreviewAction
  | UpdateStoreLinkAction
  | UpdatePriceAction
  | ClearFormAction
  | UpdateIsPreviewDialogOpenAction;
