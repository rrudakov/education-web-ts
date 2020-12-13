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
import { DressesActionType } from '../../types';

export const thunkSubmitNewDress = (
  history: History<History.UnknownFacade>
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | DressesActionType
> => (dispatch, getState) => {
  const { dresses } = getState();
  const authToken = getToken();

  if (authToken === null) {
    dispatch(updateErrorMessage('Unauthorized!'));
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .post(`${BASE_URL}/dresses`)
      .set('Authorization', `Token ${authToken}`)
      .send({
        title: dresses.form.title,
        description: dresses.form.description,
        size: dresses.form.size,
        pictures: dresses.form.pictures,
        price: dresses.form.price,
      })
      .then(() => {
        dispatch(stopFetching());
        history.push('/dresses');
        dispatch(clearFormActionCreator());
        dispatch(updateSuccessMessage('Dress was added successfully'));
      })
      .catch((err: ResponseError) => {
        dispatch(stopFetching());
        if (err.status == 401) {
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
