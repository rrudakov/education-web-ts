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
  deleteDressActionCreator,
  updateDressesActionCreator,
} from '../../actions';
import { DressesActionType } from '../../types';

export const thunkFetchDresses = (): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | DressesActionType
> => (dispatch) => {
  dispatch(fetching());
  request
    .get(`${BASE_URL}/dresses`)
    .then((response) => {
      dispatch(stopFetching());
      dispatch(updateDressesActionCreator(response.body));
    })
    .catch((err) => {
      dispatch(stopFetching());
      dispatch(updateErrorMessage((err as ErrorResponse).message));
    });
};

export const thunkDeleteDressById = (
  dressId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | DressesActionType
> => (dispatch) => {
  const authToken = getToken();

  if (authToken === null) {
    dispatch(updateErrorMessage('Unauthorized!'));
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .delete(`${BASE_URL}/dresses/${dressId}`)
      .set('Authorization', `Token ${authToken}`)
      .then((_) => {
        dispatch(stopFetching());
        dispatch(deleteDressActionCreator(dressId));
        dispatch(updateSuccessMessage('Dress was deleted successfully'));
      })
      .catch((err) => {
        dispatch(stopFetching());
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  }
};
