import { Gymnastic } from './reducer';
import {
  ClearFormAction,
  CLEAR_FORM,
  DeleteGymnasticAction,
  DELETE_GYMNASTIC,
  SetUploadDialogOpenAction,
  SET_UPLOAD_DIALOG_OPEN,
  UpdateDescriptionAction,
  UpdateGymnasticsAction,
  UpdatePictureAction,
  UpdateSubtypeIdAction,
  UpdateTitleAction,
  UPDATE_DESCRIPTION,
  UPDATE_GYMNSATICS,
  UPDATE_PICTURE,
  UPDATE_SUBTYPE_ID,
  UPDATE_TITLE,
} from './types';

export const updateGymnasticsActionCreator = (
  gymnastics: Gymnastic[]
): UpdateGymnasticsAction => ({
  type: UPDATE_GYMNSATICS,
  payload: gymnastics,
});

export const deleteGymnasticActionCreator = (
  gymnasticId: number
): DeleteGymnasticAction => ({
  type: DELETE_GYMNASTIC,
  payload: gymnasticId,
});

export const updateSubtypeIdActionCreator = (
  subtypeId: number
): UpdateSubtypeIdAction => ({
  type: UPDATE_SUBTYPE_ID,
  payload: subtypeId,
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

export const updatePictureActionCreator = (
  picture?: string
): UpdatePictureAction => ({
  type: UPDATE_PICTURE,
  payload: picture,
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
