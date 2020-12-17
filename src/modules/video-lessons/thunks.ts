import { ThunkAction } from 'redux-thunk';
import request from 'superagent';
import { fetching, stopFetching, updateErrorMessage } from '../../core/actions';
import { BASE_URL } from '../../core/constants';
import { ErrorResponse } from '../../core/reducer';
import { AppStoreState } from '../../core/store';
import { SystemActionTypes } from '../../core/types';
import {
  addScreenshotActionCreator,
  setUploadDialogOpenActionCreator,
} from './actions';
import { VideoLessonsActionType } from './types';

interface UploadFileResponse {
  url: string;
}

export const thunkUploadScreenshots = (
  files: File[]
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | VideoLessonsActionType
> => (dispatch) => {
  dispatch(setUploadDialogOpenActionCreator(false));
  files.forEach((f) => {
    dispatch(fetching());
    request
      .post(`${BASE_URL}/upload`)
      .attach('file', f, f.name)
      .then((response) => {
        dispatch(
          addScreenshotActionCreator((response.body as UploadFileResponse).url)
        );
        dispatch(stopFetching());
      })
      .catch((err) => {
        dispatch(stopFetching());
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  });
};
