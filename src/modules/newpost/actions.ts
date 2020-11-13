import { EditorState } from 'draft-js';
import {
  ToggleIsMainFeaturedAction,
  UpdateDescriptionAction,
  UpdateFeaturedImageAction,
  UpdatePostBodyAction,
  UpdateTitleAction,
  UPDATE_DESCRIPTION,
  UPDATE_FEATURED_IMAGE,
  UPDATE_IS_MAIN_FEATURED,
  UPDATE_POST_BODY,
  UPDATE_TITLE,
} from './types';

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

export const updateIsMainFeaturedActionCreator = (
  isMainFeatured: boolean
): ToggleIsMainFeaturedAction => ({
  type: UPDATE_IS_MAIN_FEATURED,
  payload: isMainFeatured,
});

export const updatePostBodyActionCreator = (
  postBody: EditorState
): UpdatePostBodyAction => ({
  type: UPDATE_POST_BODY,
  payload: postBody,
});

export const updateFeaturedImageActionCreator = (
  imageURL: string
): UpdateFeaturedImageAction => ({
  type: UPDATE_FEATURED_IMAGE,
  payload: imageURL,
});
