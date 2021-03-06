import { FeaturedPost, FullPost } from './reducer';

export const UPDATE_MAIN_FEATURED = 'UPDATE_MAIN_FEATURED/HOME';
export const UPDATE_FEATURED = 'UPDATE_FEATURED/HOME';
export const UPDATE_FULL_POSTS = 'UPDATE_FULL_POSTS/HOME';
export const UPDATE_CERTIFICATES_MODAL_OPEN =
  'UPDATE_CERTIFICATES_MODAL_OPEN/HOME';

export interface UpdateMainFeaturedAction {
  type: typeof UPDATE_MAIN_FEATURED;
  payload: FeaturedPost;
}

export interface UpdateFeaturedAction {
  type: typeof UPDATE_FEATURED;
  payload: FeaturedPost[];
}

export interface UpdateFullPostsAction {
  type: typeof UPDATE_FULL_POSTS;
  payload: FullPost[];
}

export interface UpdateCertificatesModalOpenAction {
  type: typeof UPDATE_CERTIFICATES_MODAL_OPEN;
  payload: boolean;
}

export type HomeActionTypes =
  | UpdateMainFeaturedAction
  | UpdateFeaturedAction
  | UpdateFullPostsAction
  | UpdateCertificatesModalOpenAction;
