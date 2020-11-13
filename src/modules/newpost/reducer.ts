import { EditorState } from 'draft-js';
import {
  NewPostActionTypes,
  UPDATE_DESCRIPTION,
  UPDATE_FEATURED_IMAGE,
  UPDATE_IS_MAIN_FEATURED,
  UPDATE_POST_BODY,
  UPDATE_TITLE,
} from './types';

export interface NewPostState {
  title: string;
  postBody: EditorState;
  isMainFeatured: boolean;
  description: string;
  featuredImage: string;
}

export const initialState: NewPostState = {
  title: '',
  postBody: EditorState.createEmpty(),
  isMainFeatured: false,
  description: '',
  featuredImage: '',
};

export const newPostReducer = (
  state: NewPostState = initialState,
  action: NewPostActionTypes
): NewPostState => {
  switch (action.type) {
    case UPDATE_TITLE:
      return { ...state, title: action.payload };
    case UPDATE_DESCRIPTION:
      return { ...state, description: action.payload };
    case UPDATE_IS_MAIN_FEATURED:
      return { ...state, isMainFeatured: action.payload };
    case UPDATE_POST_BODY:
      return { ...state, postBody: action.payload };
    case UPDATE_FEATURED_IMAGE:
      return { ...state, featuredImage: action.payload };
    default:
      return state;
  }
};
