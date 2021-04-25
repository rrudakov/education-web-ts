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
  updatePreviewActionCreator,
  updatePriceActionCreator,
  updateStoreLinkActionCreator,
  updateTitleActionCreator,
} from '../../actions';
import { DownloadMaterialsActionType } from '../../types';

type MaterialResponse = {
  id: number;
  title: string;
  description: string;
  store_link: string;
  preview: string;
  price: string;
  created_on: string;
  updated_on: string;
};

export const thunkGetDownloadMaterial = (
  materialId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | DownloadMaterialsActionType
> => (dispatch) => {
  const authToken = getToken();

  if (authToken === null) {
    dispatch(unauthorizedError());
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .get(`${BASE_URL}/materials/${materialId}`)
      .set('Authorization', `Token ${authToken}`)
      .then((response) => {
        dispatch(stopFetching());
        const material = response.body as MaterialResponse;
        dispatch(updateTitleActionCreator(material.title));
        dispatch(updateDescriptionActionCreator(material.description));
        dispatch(updateStoreLinkActionCreator(material.store_link));
        dispatch(updatePreviewActionCreator(material.preview));
        dispatch(updatePriceActionCreator(material.price));
      })
      .catch((err) => {
        dispatch(stopFetching());
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  }
};

export const thunkUpdateMaterial = (
  materialId: number,
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
      .patch(`${BASE_URL}/materials/${materialId}`)
      .set('Authorization', `Token ${authToken}`)
      .send(form)
      .then((_) => {
        dispatch(stopFetching());
        history.goBack();
        dispatch(clearFormActionCreator());
        dispatch(updateSuccessMessage('Material was successfully updated'));
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
