import { FullPost } from '../home/reducer';
import { PostActionTypes, UPDATE_POST } from './types';

export interface PostState {
  post?: FullPost;
}

const initialState: PostState = {
  post: undefined,
};

export const postReducer = (
  state: PostState = initialState,
  action: PostActionTypes
): PostState => {
  switch (action.type) {
    case UPDATE_POST:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};
