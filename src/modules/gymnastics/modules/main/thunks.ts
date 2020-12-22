import { ThunkAction } from 'redux-thunk';
import request from 'superagent';
import {
  fetching,
  logout,
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
  deleteGymnasticActionCreator,
  updateGymnasticsActionCreator,
} from '../../actions';
import { GymnasticsActionType } from '../../types';

export const thunkFetchGymnastics = (
  subtypeId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | GymnasticsActionType
> => (dispatch) => {
  dispatch(fetching());
  request
    .get(`${BASE_URL}/gymnastics`)
    .query({ subtype_id: subtypeId })
    .then((response) => {
      dispatch(stopFetching());
      dispatch(updateGymnasticsActionCreator(response.body));
    })
    .catch((err) => {
      dispatch(stopFetching());
      dispatch(updateErrorMessage((err as ErrorResponse).message));
    });
};

export const thunkDeleteGymnasticById = (
  gymnasticId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | GymnasticsActionType
> => (dispatch) => {
  const authToken = getToken();

  if (authToken === null) {
    dispatch(updateErrorMessage('Unauthorized!'));
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .delete(`${BASE_URL}/gymnastics/${gymnasticId}`)
      .set('Authorization', `Token ${authToken}`)
      .then((_) => {
        dispatch(stopFetching());
        dispatch(deleteGymnasticActionCreator(gymnasticId));
        dispatch(updateSuccessMessage('Gymnastic was deleted successfully'));
      })
      .catch((err) => {
        dispatch(stopFetching());
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  }
};
