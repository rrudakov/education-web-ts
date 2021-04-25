import { ThunkAction } from 'redux-thunk';
import request from 'superagent';
import { fetching, stopFetching, updateErrorMessage } from '../../core/actions';
import { BASE_URL } from '../../core/constants';
import { ErrorResponse } from '../../core/reducer';
import { AppStoreState } from '../../core/store';
import { SystemActionTypes } from '../../core/types';
import {
  updateIsPreviewDialogOpenActionCreator,
  updatePreviewActionCreator,
} from './actions';
import { DownloadMaterialsActionType } from './types';

interface UploadFileResponse {
  url: string;
}

export const thunkUploadPreview = (
  files: File[]
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | DownloadMaterialsActionType
> => (dispatch) => {
  if (files.length !== 1) {
    dispatch(updateErrorMessage('Только 1 картинку можно загрузить здесь'));
  } else {
    dispatch(updateIsPreviewDialogOpenActionCreator(false));
    dispatch(fetching());
    request
      .post(`${BASE_URL}/upload`)
      .attach('file', files[0], files[0].name)
      .then((response) => {
        dispatch(
          updatePreviewActionCreator((response.body as UploadFileResponse).url)
        );
        dispatch(stopFetching());
      })
      .catch((err) => {
        dispatch(stopFetching());
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  }
};
