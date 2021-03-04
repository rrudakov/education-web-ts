import { ThunkAction } from 'redux-thunk';
import request from 'superagent';
import {
  fetching,
  logout,
  startTransitioning,
  stopFetching,
  stopTransitioning,
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
  deletePresentationActionCreator,
  updateCurrentChunkActionCreator,
  updateCurrentPageActionCreator,
  updatePresentationsActionCreator,
  updatePresentationsFilteredActionCreated,
} from '../../actions';
import { PresentationsActionType } from '../../types';

export const thunkFetchPresentations = (
  subtypeId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | PresentationsActionType
> => (dispatch) => {
  dispatch(fetching());
  request
    .get(`${BASE_URL}/presentations`)
    .query({ limit: 1000 })
    .query({ subtype_id: subtypeId })
    .then((response) => {
      dispatch(stopFetching());
      dispatch(updatePresentationsActionCreator(response.body));
      dispatch(updatePresentationsFilteredActionCreated(response.body));
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
  SystemActionTypes | PresentationsActionType
> => (dispatch, getState) => {
  const { presentations } = getState();
  dispatch(startTransitioning());
  dispatch(updateCurrentChunkActionCreator([]));
  dispatch(updateCurrentPageActionCreator(page));
  setTimeout(() => {
    dispatch(
      updateCurrentChunkActionCreator(presentations.chunks[page - 1] || [])
    );
    dispatch(stopTransitioning());
  }, 500);
};

export const thunkDeletePresentationById = (
  presentationId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | PresentationsActionType
> => (dispatch) => {
  const authToken = getToken();

  if (authToken === null) {
    dispatch(unauthorizedError());
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .delete(`${BASE_URL}/presentations/${presentationId}`)
      .set('Authorization', `Token ${authToken}`)
      .then((_) => {
        dispatch(stopFetching());
        dispatch(deletePresentationActionCreator(presentationId));
        dispatch(updateSuccessMessage('Presentation was deleted successfully'));
      })
      .catch((err) => {
        dispatch(stopFetching());
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  }
};
