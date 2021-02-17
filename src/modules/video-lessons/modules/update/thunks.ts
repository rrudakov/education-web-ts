import { History } from 'history';
import { ThunkAction } from 'redux-thunk';
import request, { ResponseError } from 'superagent';
import {
  fetching,
  logout,
  openAuthModal,
  stopFetching,
  updateErrorMessage,
  updateSuccessMessage,
} from '../../../../core/actions';
import { BASE_URL } from '../../../../core/constants';
import { ErrorResponse } from '../../../../core/reducer';
import { AppStoreState } from '../../../../core/store';
import { SystemActionTypes } from '../../../../core/types';
import { getToken } from '../../../../core/utils/storage';
import {
  clearFormActionCreator,
  updateDescriptionActionCreator,
  updatePriceActionCreator,
  updateScreenshotsActionCreator,
  updateSubtitleActionCreator,
  updateTitleActionCreator,
} from '../../actions';
import { VideoLessonsActionType } from '../../types';

interface VideoLessonResponse {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  screenshots: string[];
  price: string;
  created_on: string;
  updated_on: string;
}

export const thunkGetLesson = (
  lessonId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | VideoLessonsActionType
> => (dispatch) => {
  dispatch(fetching());
  request
    .get(`${BASE_URL}/lessons/${lessonId}`)
    .then((response) => {
      dispatch(stopFetching());
      const lesson: VideoLessonResponse = response.body;
      dispatch(updateTitleActionCreator(lesson.title));
      dispatch(updateSubtitleActionCreator(lesson.subtitle));
      dispatch(updateDescriptionActionCreator(lesson.description));
      dispatch(updatePriceActionCreator(lesson.price));
      dispatch(updateScreenshotsActionCreator(lesson.screenshots));
    })
    .catch((err) => {
      dispatch(stopFetching());
      dispatch(updateErrorMessage((err as ErrorResponse).message));
    });
};

export const thunkUpdateLesson = (
  lessonId: number,
  history: History<unknown>
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | VideoLessonsActionType
> => (dispatch, getState) => {
  const { videoLessons } = getState();
  const authToken = getToken();

  if (authToken === null) {
    dispatch(updateErrorMessage('Unauthorized!'));
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .patch(`${BASE_URL}/lessons/${lessonId}`)
      .set('Authorization', `Token ${authToken}`)
      .send({
        title: videoLessons.form.title,
        subtitle: videoLessons.form.subtitle,
        description: videoLessons.form.description,
        screenshots: videoLessons.form.screenshots,
        price: videoLessons.form.price,
      })
      .then((_) => {
        dispatch(stopFetching());
        history.push('/video-lessons');
        dispatch(clearFormActionCreator());
        dispatch(updateSuccessMessage('Video lesson was successfully updated'));
      })
      .catch((err: ResponseError) => {
        dispatch(stopFetching());
        if (err.status === 401) {
          dispatch(logout());
          dispatch(openAuthModal());
        }
        if (err.response !== undefined) {
          dispatch(
            updateErrorMessage((err.response.body as ErrorResponse).message)
          );
        }
      });
  }
};
