import { FeaturedPost, FullPost } from "./reducer";
import {
  UPDATE_CERTIFICATES_MODAL_OPEN,
  UPDATE_FEATURED,
  UPDATE_FULL_POSTS,
  UPDATE_MAIN_FEATURED,
  UpdateCertificatesModalOpenAction,
  UpdateFeaturedAction,
  UpdateFullPostsAction,
  UpdateMainFeaturedAction,
} from "./types";

export const updateMainFeaturedArticle = (
  featuredPost: FeaturedPost
): UpdateMainFeaturedAction => ({
  type: UPDATE_MAIN_FEATURED,
  payload: featuredPost,
});

export const updateFeaturedArticles = (
  featuredPosts: FeaturedPost[]
): UpdateFeaturedAction => ({
  type: UPDATE_FEATURED,
  payload: featuredPosts,
});

export const updateLatestArticles = (
  latestFullPosts: FullPost[]
): UpdateFullPostsAction => ({
  type: UPDATE_FULL_POSTS,
  payload: latestFullPosts,
});

export const updateCertificatesModalOpen = (
  open: boolean
): UpdateCertificatesModalOpenAction => ({
  type: UPDATE_CERTIFICATES_MODAL_OPEN,
  payload: open,
});
