import { ThunkAction } from 'redux-thunk';
import request from 'superagent';
import {
  fetching,
  logout,
  startTransitioning,
  stopFetching,
  stopTransitioning,
  updateErrorMessage,
  updateSuccessMessage,
} from '../../../../core/actions';
import { BASE_URL } from '../../../../core/constants';
import { ErrorResponse } from '../../../../core/reducer';
import { AppStoreState } from '../../../../core/store';
import { SystemActionTypes } from '../../../../core/types';
import { getToken } from '../../../../core/utils/storage';
import {
  deleteDownloadMaterialActionCreator,
  updateCurrentChunkActionCreator,
  updateCurrentPageActionCreator,
  updateDownloadMaterialsActionCreator,
} from '../../actions';
import { DownloadMaterialsActionType } from '../../types';

export const thunkFetchDownloadMaterials = (): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | DownloadMaterialsActionType
> => (dispatch) => {
  dispatch(fetching());
  request
    .get(`${BASE_URL}/materials`)
    .query({ limit: 1000 })
    .then((response) => {
      dispatch(stopFetching());
      dispatch(updateDownloadMaterialsActionCreator(response.body));
    })
    .catch((err) => {
      dispatch(stopFetching());
      dispatch(updateErrorMessage((err as ErrorResponse).message));
    });
};

export const thunkSelectPage = (
  page: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | DownloadMaterialsActionType
> => (dispatch, getState) => {
  const { downloadMaterials } = getState();
  dispatch(startTransitioning());
  dispatch(updateCurrentChunkActionCreator([]));
  dispatch(updateCurrentPageActionCreator(page));
  setTimeout(() => {
    dispatch(
      updateCurrentChunkActionCreator(downloadMaterials.chunks[page - 1] || [])
    );
    dispatch(stopTransitioning());
  }, 500);
};

export const thunkDeleteDownloadMaterialById = (
  materialId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | DownloadMaterialsActionType
> => (dispatch) => {
  const authToken = getToken();

  if (authToken === null) {
    dispatch(updateErrorMessage('Unauthorized!'));
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .delete(`${BASE_URL}/materials/${materialId}`)
      .set('Authorization', `Token ${authToken}`)
      .then((_) => {
        dispatch(stopFetching());
        dispatch(deleteDownloadMaterialActionCreator(materialId));
        dispatch(updateSuccessMessage('Material was deleted successfully'));
      })
      .catch((err) => {
        dispatch(stopFetching());
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  }
};
