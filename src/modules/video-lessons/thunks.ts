import { ThunkAction } from 'redux-thunk';
import request from 'superagent';
import { updateErrorMessage, updateSuccessMessage } from '../../core/actions';
import { BASE_URL } from '../../core/constants';
import { ErrorResponse } from '../../core/reducer';
import { AppStoreState } from '../../core/store';
import {
  DECREASE_FETCHING,
  INCREASE_FETCHING,
  LOGOUT,
  SystemActionTypes,
} from '../../core/types';
import { getToken } from '../../core/utils/storage';
import {
  deleteLessonActionCreator,
  updateLessonsActionCreator,
} from './actions';
import { VideoLessonsActionType } from './types';

export const thunkFetchVideoLessons = (): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | VideoLessonsActionType
> => (dispatch) => {
  dispatch({ type: INCREASE_FETCHING });
  request
    .get(`${BASE_URL}/lessons`)
    .then((response) => {
      dispatch({ type: DECREASE_FETCHING });
      dispatch(updateLessonsActionCreator(response.body));
    })
    .catch((err) => {
      dispatch({ type: DECREASE_FETCHING });
      dispatch(updateErrorMessage((err as ErrorResponse).message));
    });
};

export const thunkDeleteVideoLessonById = (
  lessonId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | VideoLessonsActionType
> => (dispatch) => {
  const authToken = getToken();

  if (authToken === null) {
    dispatch(updateErrorMessage('Unauthorized!'));
    dispatch({ type: LOGOUT });
  } else {
    dispatch({ type: INCREASE_FETCHING });
    request
      .delete(`${BASE_URL}/lessons/${lessonId}`)
      .set('Authorization', `Token ${authToken}`)
      .then((_) => {
        dispatch({ type: DECREASE_FETCHING });
        dispatch(deleteLessonActionCreator(lessonId));
        dispatch(updateSuccessMessage('Video lesson was deleted successfully'));
      })
      .catch((err) => {
        dispatch({ type: DECREASE_FETCHING });
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  }
};
