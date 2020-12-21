import { ThunkAction } from 'redux-thunk';
import request from 'superagent';
import { fetching, stopFetching, updateErrorMessage } from '../../core/actions';
import { BASE_URL } from '../../core/constants';
import { ErrorResponse } from '../../core/reducer';
import { AppStoreState } from '../../core/store';
import { SystemActionTypes } from '../../core/types';
import {
  setUploadDialogOpenActionCreator,
  updatePictureActionCreator,
} from './actions';
import { GymnasticsActionType } from './types';

interface UploadFileResponse {
  url: string;
}

export const thunkUploadPicture = (
  files: File[]
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | GymnasticsActionType
> => (dispatch) => {
  if (files.length !== 1) {
    dispatch(updateErrorMessage('Только 1 картинку можно загрузить здесь'));
  } else {
    dispatch(setUploadDialogOpenActionCreator(false));
    dispatch(fetching());
    request
      .post(`${BASE_URL}/upload`)
      .attach('file', files[0], files[0].name)
      .then((response) => {
        dispatch(
          updatePictureActionCreator((response.body as UploadFileResponse).url)
        );
        dispatch(stopFetching());
      })
      .catch((err) => {
        dispatch(stopFetching());
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  }
};
