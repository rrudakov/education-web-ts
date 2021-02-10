import { Presentation } from './reducer';
import {
  ClearFormAction,
  CLEAR_FORM,
  DeletePresentationAction,
  DELETE_PRESENTATION,
  UpdateCurrentChunkAction,
  UpdateCurrentPageAction,
  UpdateDescriptionAction,
  UpdatePresentationsAction,
  UpdateTitleAction,
  UpdateUrlAction,
  UPDATE_CURRENT_CHUNK,
  UPDATE_CURRENT_PAGE,
  UPDATE_DESCRIPTION,
  UPDATE_PRESENTATIONS,
  UPDATE_TITLE,
  UPDATE_URL,
} from './types';

export const updatePresentationsActionCreator = (
  presentations: Presentation[]
): UpdatePresentationsAction => ({
  type: UPDATE_PRESENTATIONS,
  payload: presentations,
});

export const deletePresentationActionCreator = (
  presentationId: number
): DeletePresentationAction => ({
  type: DELETE_PRESENTATION,
  payload: presentationId,
});

export const updateCurrentPageActionCreator = (
  page: number
): UpdateCurrentPageAction => ({
  type: UPDATE_CURRENT_PAGE,
  payload: page,
});

export const updateCurrentChunkActionCreator = (
  chunk: Presentation[]
): UpdateCurrentChunkAction => ({
  type: UPDATE_CURRENT_CHUNK,
  payload: chunk,
});

export const clearFormActionCreator = (): ClearFormAction => ({
  type: CLEAR_FORM,
});

export const updateTitleActionCreator = (title: string): UpdateTitleAction => ({
  type: UPDATE_TITLE,
  payload: title,
});

export const updateUrlActionCreator = (url: string): UpdateUrlAction => ({
  type: UPDATE_URL,
  payload: url,
});

export const updateDescriptionActionCreator = (
  description: string
): UpdateDescriptionAction => ({
  type: UPDATE_DESCRIPTION,
  payload: description,
});
