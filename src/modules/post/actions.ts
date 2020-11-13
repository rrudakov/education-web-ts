import { FullPost } from '../home/reducer';
import { UpdatePostAction, UPDATE_POST } from './types';

export const updatePost = (post?: FullPost): UpdatePostAction => ({
  type: UPDATE_POST,
  payload: post,
});
