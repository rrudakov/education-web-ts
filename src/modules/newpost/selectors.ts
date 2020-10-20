import { Selector } from 'react-redux';
import { AppStoreState } from '../../core/store';
import { EditorState } from 'draft-js';

export const getTitle: Selector<AppStoreState, string> = ({ newPost }) =>
  newPost.title;

export const getPostBody: Selector<AppStoreState, EditorState> = ({
  newPost,
}) => newPost.postBody;

export const getIsMainFeatured: Selector<AppStoreState, boolean> = ({
  newPost,
}) => newPost.isMainFeatured;

export const getDescription: Selector<AppStoreState, string> = ({ newPost }) =>
  newPost.description;

export const getFeaturedImage: Selector<AppStoreState, string> = ({
  newPost,
}) => newPost.featuredImage;
