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
  updateTitleActionCreator,
  updateUrlActionCreator,
} from '../../actions';
import { Presentation } from '../../reducer';
import { PresentationsActionType } from '../../types';

export const thunkGetPresentation = (
  presentationId: number
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | PresentationsActionType
> => (dispatch) => {
  dispatch(fetching());
  request
    .get(`${BASE_URL}/presentations/${presentationId}`)
    .then((response) => {
      dispatch(stopFetching());
      const presentation: Presentation = response.body;
      dispatch(updateTitleActionCreator(presentation.title));
      dispatch(updateUrlActionCreator(presentation.url));
      dispatch(updateDescriptionActionCreator(presentation.description));
    })
    .catch((err) => {
      dispatch(stopFetching());
      dispatch(updateErrorMessage((err as ErrorResponse).message));
    });
};

export const thunkUpdatePresentation = (
  presentationId: number,
  history: History<History.UnknownFacade>
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | PresentationsActionType
> => (dispatch, getState) => {
  const {
    presentations: { form },
  } = getState();
  const authToken = getToken();

  if (authToken === null) {
    dispatch(unauthorizedError());
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .patch(`${BASE_URL}/presentations/${presentationId}`)
      .set('Authorization', `Token ${authToken}`)
      .send({
        title: form.title,
        url: form.url,
        description: form.description,
      })
      .then((_) => {
        dispatch(stopFetching());
        history.push('/presentations');
        dispatch(clearFormActionCreator());
        dispatch(updateSuccessMessage('Presentation was successfully updated'));
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
