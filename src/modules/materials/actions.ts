import { DownloadMaterial } from './reducer';
import {
  ClearFormAction,
  CLEAR_FORM,
  DeleteDownloadMaterialAction,
  DELETE_DOWNLOAD_MATERIAL,
  UpdateCurrentChunkAction,
  UpdateCurrentPageAction,
  UpdateDescriptionAction,
  UpdateDownloadMaterialsAction,
  UpdateIsPreviewDialogOpenAction,
  UpdatePreviewAction,
  UpdatePriceAction,
  UpdateStoreLinkAction,
  UpdateTitleAction,
  UPDATE_CURRENT_CHUNK,
  UPDATE_CURRENT_PAGE,
  UPDATE_DESCRIPTION,
  UPDATE_DOWNLOAD_MATERIALS,
  UPDATE_IS_PREVIEW_DIALOG_OPEN,
  UPDATE_PREVIEW,
  UPDATE_PRICE,
  UPDATE_STORE_LINK,
  UPDATE_TITLE,
} from './types';

export const updateDownloadMaterialsActionCreator = (
  materials: DownloadMaterial[]
): UpdateDownloadMaterialsAction => ({
  type: UPDATE_DOWNLOAD_MATERIALS,
  payload: materials,
});

export const deleteDownloadMaterialActionCreator = (
  materialId: number
): DeleteDownloadMaterialAction => ({
  type: DELETE_DOWNLOAD_MATERIAL,
  payload: materialId,
});

export const updateCurrentPageActionCreator = (
  page: number
): UpdateCurrentPageAction => ({
  type: UPDATE_CURRENT_PAGE,
  payload: page,
});

export const updateCurrentChunkActionCreator = (
  materials: DownloadMaterial[]
): UpdateCurrentChunkAction => ({
  type: UPDATE_CURRENT_CHUNK,
  payload: materials,
});

export const updateTitleActionCreator = (title: string): UpdateTitleAction => ({
  type: UPDATE_TITLE,
  payload: title,
});

export const updateDescriptionActionCreator = (
  description: string
): UpdateDescriptionAction => ({
  type: UPDATE_DESCRIPTION,
  payload: description,
});

export const updatePreviewActionCreator = (
  preview: string
): UpdatePreviewAction => ({
  type: UPDATE_PREVIEW,
  payload: preview,
});

export const updateStoreLinkActionCreator = (
  storeLink: string
): UpdateStoreLinkAction => ({
  type: UPDATE_STORE_LINK,
  payload: storeLink,
});

export const updatePriceActionCreator = (price: string): UpdatePriceAction => ({
  type: UPDATE_PRICE,
  payload: price,
});

export const clearFormActionCreator = (): ClearFormAction => ({
  type: CLEAR_FORM,
});

export const updateIsPreviewDialogOpenActionCreator = (
  isOpen: boolean
): UpdateIsPreviewDialogOpenAction => ({
  type: UPDATE_IS_PREVIEW_DIALOG_OPEN,
  payload: isOpen,
});
