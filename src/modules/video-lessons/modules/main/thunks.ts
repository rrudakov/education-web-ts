import { ThunkAction } from 'redux-thunk';
import request from 'superagent';
import {
  fetching,
  logout,
  startTransitioning,
  stopFetching,
  stopTransitioning,
  updateErrorMessage,
  updateSuccessMessage,
} from '../../../../core/actions';
import { BASE_URL } from '../../../../core/constants';
import { ErrorResponse } from '../../../../core/reducer';
import { AppStoreState } from '../../../../core/store';
import { SystemActionTypes } from '../../../../core/types';
import { getToken } from '../../../../core/utils/storage';
import {
  deleteLessonActionCreator,
  updateCurrentChunkActionCreator,
  updateCurrentPageActionCreator,
  updateLessonsActionCreator,
} from '../../actions';
import { VideoLessonsActionType } from '../../types';

export const thunkFetchVideoLessons = (): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | VideoLessonsActionType
> => (dispatch) => {
  dispatch(fetching());
  request
    .get(`${BASE_URL}/lessons`)
    .then((response) => {
      dispatch(stopFetching());
      dispatch(updateLessonsActionCreator(response.body));
    })
    .catch((err) => {
      dispatch(stopFetching());
      dispatch(updateErrorMessage((err as ErrorResponse).message));
    });
};

export const thunkSelectPage = (
  page: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | VideoLessonsActionType
> => (dispatch, getState) => {
  const { videoLessons } = getState();
  dispatch(startTransitioning());
  dispatch(updateCurrentChunkActionCreator([]));
  dispatch(updateCurrentPageActionCreator(page));
  setTimeout(() => {
    dispatch(
      updateCurrentChunkActionCreator(videoLessons.chunks[page - 1] || [])
    );
    dispatch(stopTransitioning());
  }, 500);
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
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .delete(`${BASE_URL}/lessons/${lessonId}`)
      .set('Authorization', `Token ${authToken}`)
      .then((_) => {
        dispatch(stopFetching());
        dispatch(deleteLessonActionCreator(lessonId));
        dispatch(updateSuccessMessage('Video lesson was deleted successfully'));
      })
      .catch((err) => {
        dispatch(stopFetching());
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  }
};
