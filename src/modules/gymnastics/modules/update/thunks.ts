import { History } from 'history';
import { ThunkAction } from 'redux-thunk';
import request, { ResponseError } from 'superagent';
import {
  fetching,
  logout,
  openAuthModal,
  stopFetching,
  unauthorizedError,
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
  updatePictureActionCreator,
  updateSubtypeIdActionCreator,
  updateTitleActionCreator,
} from '../../actions';
import { GymnasticsActionType } from '../../types';

interface GymnasticResponse {
  id: number;
  subtype_id: number;
  title: string;
  description: string;
  picture?: string;
  created_on: string;
  updated_on: string;
}

export const thunkGetGymnastic = (
  gymnasticId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | GymnasticsActionType
> => (dispatch) => {
  dispatch(fetching());
  request
    .get(`${BASE_URL}/gymnastics/${gymnasticId}`)
    .then((response) => {
      dispatch(stopFetching());
      const gymnastic: GymnasticResponse = response.body;
      dispatch(updateTitleActionCreator(gymnastic.title));
      dispatch(updateSubtypeIdActionCreator(gymnastic.subtype_id));
      dispatch(updateDescriptionActionCreator(gymnastic.description));
      dispatch(updatePictureActionCreator(gymnastic.picture));
    })
    .catch((err) => {
      dispatch(stopFetching());
      dispatch(updateErrorMessage((err as ErrorResponse).message));
    });
};

export const thunkUpdateGymnastic = (
  gymnasticId: number,
  history: History<unknown>
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | GymnasticsActionType
> => (dispatch, getState) => {
  const {
    gymnastics: { form },
  } = getState();
  const authToken = getToken();

  if (authToken === null) {
    dispatch(unauthorizedError());
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .patch(`${BASE_URL}/gymnastics/${gymnasticId}`)
      .set('Authorization', `Token ${authToken}`)
      .send({
        subtype_id: form.subtype_id,
        title: form.title,
        description: form.description,
        picture: form.picture !== undefined ? form.picture : null,
      })
      .then((_) => {
        dispatch(stopFetching());
        history.goBack();
        dispatch(clearFormActionCreator());
        dispatch(updateSuccessMessage('Gymnastic was successfully updated'));
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
