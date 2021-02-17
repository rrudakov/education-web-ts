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
  updateAttachmentActionCreator,
  updateDescriptionActionCreator,
  updateIsPublicActionCreator,
  updatePreviewActionCreator,
  updateTitleActionCreator,
  updateUrlActionCreator,
} from '../../actions';
import { PresentationsActionType } from '../../types';

interface PresentationAuthorizedResponse {
  id: number;
  title: string;
  url: string;
  description: string;
  is_public: boolean;
  attachment?: string;
  preview?: string;
  created_on: string;
  updated_on: string;
}

export const thunkGetPresentation = (
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
      .get(`${BASE_URL}/presentations/${presentationId}`)
      .set('Authorization', `Token ${authToken}`)
      .then((response) => {
        dispatch(stopFetching());
        const presentation = response.body as PresentationAuthorizedResponse;
        dispatch(updateTitleActionCreator(presentation.title));
        dispatch(updateUrlActionCreator(presentation.url));
        dispatch(updateDescriptionActionCreator(presentation.description));
        dispatch(updateIsPublicActionCreator(presentation.is_public));
        dispatch(updateAttachmentActionCreator(presentation.attachment));
        dispatch(updatePreviewActionCreator(presentation.preview));
      })
      .catch((err) => {
        dispatch(stopFetching());
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  }
};

export const thunkUpdatePresentation = (
  presentationId: number,
  history: History<unknown>
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
      .send(form)
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
