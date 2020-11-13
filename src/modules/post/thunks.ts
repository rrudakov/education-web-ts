import { ThunkAction } from 'redux-thunk';
import request from 'superagent';
import { updateErrorMessage } from '../../core/actions';
import { BASE_URL } from '../../core/constants';
import { ErrorResponse } from '../../core/reducer';
import { AppStoreState } from '../../core/store';
import {
  DECREASE_FETCHING,
  INCREASE_FETCHING,
  SystemActionTypes,
} from '../../core/types';
import { updatePost } from './actions';
import { PostActionTypes } from './types';

export const thunkFetchPostById = (
  articleId: string | undefined
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | PostActionTypes
> => (dispatch) => {
  dispatch({ type: INCREASE_FETCHING });
  if (articleId === undefined) {
    dispatch(updatePost(undefined));
    dispatch({ type: DECREASE_FETCHING });
    dispatch(updateErrorMessage('Missing post ID'));
  } else {
    request
      .get(`${BASE_URL}/articles/${articleId}`)
      .then((response) => {
        dispatch(updatePost(response.body));
        dispatch({ type: DECREASE_FETCHING });
      })
      .catch((err) => {
        dispatch({ type: DECREASE_FETCHING });
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  }
};
