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
import { clearFormActionCreator } from '../../actions';
import { DownloadMaterialsActionType } from '../../types';

export const thunkSubmitNewDownloadMaterial = (
  history: History<unknown>
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | DownloadMaterialsActionType
> => (dispatch, getState) => {
  const {
    downloadMaterials: { form },
  } = getState();
  const authToken = getToken();

  if (authToken === null) {
    dispatch(unauthorizedError());
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .post(`${BASE_URL}/materials`)
      .set('Authorization', `Token ${authToken}`)
      .send(form)
      .then(() => {
        dispatch(stopFetching());
        history.push('/materials');
        dispatch(clearFormActionCreator());
        dispatch(updateSuccessMessage('Material was added successfully'));
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
