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
import { clearFormActionCreator } from '../../actions';
import { VideoLessonsActionType } from '../../types';

// interface CreateVideoLessonResponse {
//   id: number;
// }

export const thunkSubmitNewVideoLesson = (
  history: History<History.UnknownFacade>
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
      .post(`${BASE_URL}/lessons`)
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
        // const lessonId = (response.body as CreateVideoLessonResponse).id;
        history.push(`/video-lessons`);
        dispatch(clearFormActionCreator());
        dispatch(updateSuccessMessage('Video lesson was added successfully'));
      })
      .catch((error: ResponseError) => {
        dispatch(stopFetching());
        if (error.status === 401) {
          dispatch(logout());
          dispatch(openAuthModal());
        }
        if (error.response !== undefined) {
          dispatch(
            updateErrorMessage((error.response.body as ErrorResponse).message)
          );
        }
      });
  }
};
