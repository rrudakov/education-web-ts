import { Presentation } from './reducer';
import {
  ClearFormAction,
  CLEAR_FORM,
  DeletePresentationAction,
  DELETE_PRESENTATION,
  UpdateAttachmentAction,
  UpdateCurrentChunkAction,
  UpdateCurrentPageAction,
  UpdateCurrentPresentationAction,
  UpdateDescriptionAction,
  UpdateIsManualDialogOpenAction,
  UpdateIsPreviewDialogOpenAction,
  UpdateIsPublicAction,
  UpdatePresentationsAction,
  UpdatePresentationsFilterAction,
  UpdatePresentationsFilteredAction,
  UpdatePreviewAction,
  UpdateSubtypeIdAction,
  UpdateTitleAction,
  UpdateUrlAction,
  UPDATE_ATTACHMENT,
  UPDATE_CURRENT_CHUNK,
  UPDATE_CURRENT_PAGE,
  UPDATE_CURRENT_PRESENTATION,
  UPDATE_DESCRIPTION,
  UPDATE_IS_MANUAL_DIALOG_OPEN,
  UPDATE_IS_PREVIEW_DIALOG_OPEN,
  UPDATE_IS_PUBLIC,
  UPDATE_PRESENTATIONS,
  UPDATE_PRESENTATIONS_FILTER,
  UPDATE_PRESENTATIONS_FILTERED,
  UPDATE_PREVIEW,
  UPDATE_SUBTYPE_ID,
  UPDATE_TITLE,
  UPDATE_URL,
} from './types';

export const updatePresentationsActionCreator = (
  presentations: Presentation[]
): UpdatePresentationsAction => ({
  type: UPDATE_PRESENTATIONS,
  payload: presentations,
});

export const updatePresentationsFilteredActionCreated = (
  presentations: Presentation[]
): UpdatePresentationsFilteredAction => ({
  type: UPDATE_PRESENTATIONS_FILTERED,
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

export const updateCurrentPresentationActionCreator = (
  presentation?: Presentation
): UpdateCurrentPresentationAction => ({
  type: UPDATE_CURRENT_PRESENTATION,
  payload: presentation,
});

export const updateSubtypeIdActionCreator = (
  subtype_id: number
): UpdateSubtypeIdAction => ({
  type: UPDATE_SUBTYPE_ID,
  payload: subtype_id,
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

export const updateIsPublicActionCreator = (
  isPublic: boolean
): UpdateIsPublicAction => ({
  type: UPDATE_IS_PUBLIC,
  payload: isPublic,
});

export const updateAttachmentActionCreator = (
  attachment?: string
): UpdateAttachmentAction => ({
  type: UPDATE_ATTACHMENT,
  payload: attachment,
});

export const updatePreviewActionCreator = (
  preview?: string
): UpdatePreviewAction => ({
  type: UPDATE_PREVIEW,
  payload: preview,
});

export const updatePresentationsFilterActionCreator = (
  query: string
): UpdatePresentationsFilterAction => ({
  type: UPDATE_PRESENTATIONS_FILTER,
  payload: query,
});

export const updateIsPreviewDialogOpenActionCreator = (
  open: boolean
): UpdateIsPreviewDialogOpenAction => ({
  type: UPDATE_IS_PREVIEW_DIALOG_OPEN,
  payload: open,
});

export const updateIsManualDialogOpenActionCreator = (
  open: boolean
): UpdateIsManualDialogOpenAction => ({
  type: UPDATE_IS_MANUAL_DIALOG_OPEN,
  payload: open,
});
