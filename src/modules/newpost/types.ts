import { EditorState } from "draft-js";

export const UPDATE_TITLE = 'UPDATE_TITLE/NEW_POST';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION/NEW_POST';
export const UPDATE_IS_MAIN_FEATURED = 'UPDATE_IS_MAIN_FEATURED/NEW_POST';
export const UPDATE_POST_BODY = 'UPDATE_POST_BODY/NEW_POST';
export const UPDATE_FEATURED_IMAGE = 'UPDATE_FEATURED_IMAGE/NEW_POST';

export interface UpdateTitleAction {
    type: typeof UPDATE_TITLE;
    payload: string;
}

export interface UpdateDescriptionAction {
    type: typeof UPDATE_DESCRIPTION;
    payload: string;
}

export interface ToggleIsMainFeaturedAction {
    type: typeof UPDATE_IS_MAIN_FEATURED;
    payload: boolean;
}

export interface UpdatePostBodyAction {
    type: typeof UPDATE_POST_BODY;
    payload: EditorState;
}

export interface UpdateFeaturedImageAction {
    type: typeof UPDATE_FEATURED_IMAGE;
    payload: string;
}

export type NewPostActionTypes = UpdateTitleAction
    | UpdateDescriptionAction
    | ToggleIsMainFeaturedAction
    | UpdatePostBodyAction
    | UpdateFeaturedImageAction;
