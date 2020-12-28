import { Dress } from './reducer';
import {
  AddPictureAction,
  ADD_PICTURE,
  ClearFormAction,
  CLEAR_FORM,
  DeleteDressAction,
  DeletePictureAction,
  DELETE_DRESS,
  DELETE_PICTURE,
  SetUploadDialogOpenAction,
  SET_UPLOAD_DIALOG_OPEN,
  UpdateCurrentChunkAction,
  UpdateCurrentPageAction,
  UpdateDescriptionAction,
  UpdateDressesAction,
  UpdatePicturesAction,
  UpdatePriceAction,
  UpdateSizeAction,
  UpdateTitleAction,
  UPDATE_CURRENT_CHUNK,
  UPDATE_CURRENT_PAGE,
  UPDATE_DESCRIPTION,
  UPDATE_DRESSES,
  UPDATE_PICTURES,
  UPDATE_PRICE,
  UPDATE_SIZE,
  UPDATE_TITLE,
} from './types';

export const updateDressesActionCreator = (
  dresses: Dress[]
): UpdateDressesAction => ({
  type: UPDATE_DRESSES,
  payload: dresses,
});

export const deleteDressActionCreator = (
  dressId: number
): DeleteDressAction => ({
  type: DELETE_DRESS,
  payload: dressId,
});

export const updateCurrentPageActionCreator = (
  page: number
): UpdateCurrentPageAction => ({
  type: UPDATE_CURRENT_PAGE,
  payload: page,
});

export const updateCurrentChunkActionCreator = (
  chunk: Dress[]
): UpdateCurrentChunkAction => ({
  type: UPDATE_CURRENT_CHUNK,
  payload: chunk,
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

export const updateSizeActionCreator = (size: number): UpdateSizeAction => ({
  type: UPDATE_SIZE,
  payload: size,
});

export const addPictureActionCreator = (picture: string): AddPictureAction => ({
  type: ADD_PICTURE,
  payload: picture,
});

export const deletePictureActionCreator = (
  picture: string
): DeletePictureAction => ({
  type: DELETE_PICTURE,
  payload: picture,
});

export const updatePicturesActionCreator = (
  pictures: string[]
): UpdatePicturesAction => ({
  type: UPDATE_PICTURES,
  payload: pictures,
});

export const updatePriceActionCreator = (price: string): UpdatePriceAction => ({
  type: UPDATE_PRICE,
  payload: price,
});

export const clearFormActionCreator = (): ClearFormAction => ({
  type: CLEAR_FORM,
});

export const setUploadDialogOpenActionCreator = (
  open: boolean
): SetUploadDialogOpenAction => ({
  type: SET_UPLOAD_DIALOG_OPEN,
  payload: open,
});
