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
  updatePicturesActionCreator,
  updatePriceActionCreator,
  updateSizeActionCreator,
  updateTitleActionCreator,
} from '../../actions';
import { DressesActionType } from '../../types';

interface DressResponse {
  id: string;
  title: string;
  description: string;
  size: number;
  pictures: string[];
  price: string;
  created_on: string;
  updated_on: string;
}

export const thunkGetDress = (
  dressId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | DressesActionType
> => (dispatch) => {
  dispatch(fetching());
  request
    .get(`${BASE_URL}/dresses/${dressId}`)
    .then((response) => {
      dispatch(stopFetching());
      const dress: DressResponse = response.body;
      dispatch(updateTitleActionCreator(dress.title));
      dispatch(updateDescriptionActionCreator(dress.description));
      dispatch(updateSizeActionCreator(dress.size));
      dispatch(updatePicturesActionCreator(dress.pictures));
      dispatch(updatePriceActionCreator(dress.price));
    })
    .catch((err) => {
      dispatch(stopFetching());
      dispatch(updateErrorMessage((err as ErrorResponse).message));
    });
};

export const thunkUpdateDress = (
  dressId: number,
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
      .patch(`${BASE_URL}/dresses/${dressId}`)
      .set('Authorization', `Token ${authToken}`)
      .send({
        title: dresses.form.title,
        description: dresses.form.description,
        size: dresses.form.size,
        pictures: dresses.form.pictures,
        price: dresses.form.price,
      })
      .then((_) => {
        dispatch(stopFetching());
        history.push('/dresses');
        dispatch(clearFormActionCreator());
        dispatch(updateSuccessMessage('Dress was successfully updated'));
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
