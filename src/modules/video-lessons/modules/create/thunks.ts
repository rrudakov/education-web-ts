import { History } from 'history';
import { ThunkAction } from 'redux-thunk';
import request, { ResponseError } from 'superagent';
import {
  updateErrorMessage,
  updateSuccessMessage,
} from '../../../../core/actions';
import { BASE_URL } from '../../../../core/constants';
import { ErrorResponse } from '../../../../core/reducer';
import { AppStoreState } from '../../../../core/store';
import {
  DECREASE_FETCHING,
  INCREASE_FETCHING,
  LOGOUT,
  OPEN_AUTH,
  SystemActionTypes,
} from '../../../../core/types';
import { getToken } from '../../../../core/utils/storage';

// interface CreateVideoLessonResponse {
//   id: number;
// }

export const thunkSubmitNewVideoLesson = (
  history: History<History.UnknownFacade>
): ThunkAction<void, AppStoreState, null, SystemActionTypes> => (
  dispatch,
  getState
) => {
  const { videoLessons } = getState();
  const authToken = getToken();

  if (authToken === null) {
    dispatch(updateErrorMessage('Unauthorized!'));
    dispatch({ type: LOGOUT });
  } else {
    dispatch({ type: INCREASE_FETCHING });
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
        dispatch({ type: DECREASE_FETCHING });
        // const lessonId = (response.body as CreateVideoLessonResponse).id;
        history.push(`/video-lessons`);
        dispatch(updateSuccessMessage('Video lesson was added successfully'));
      })
      .catch((error: ResponseError) => {
        dispatch({ type: DECREASE_FETCHING });
        if (error.status === 401) {
          dispatch({ type: LOGOUT });
          dispatch({ type: OPEN_AUTH });
        }
        if (error.response !== undefined) {
          dispatch(
            updateErrorMessage((error.response.body as ErrorResponse).message)
          );
        }
      });
  }
};
