import { ThunkAction } from 'redux-thunk';
import { AppStoreState } from '../../core/store';
import {
  SystemActionTypes,
  INCREASE_FETCHING,
  DECREASE_FETCHING,
} from '../../core/types';
import { NewVideoLessonActionType } from './types';
import request from 'superagent';
import { BASE_URL } from '../../core/constants';
import { updateErrorMessage } from '../../core/actions';
import { ErrorResponse } from '../../core/reducer';
import {
  setUpdateDialogOpenActionCreator,
  addScreenshotActionCreator,
} from './actions';

export interface UploadFileResponse {
  url: string;
}

export const thunkUploadScreenshots = (
  files: File[]
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | NewVideoLessonActionType
> => (dispatch) => {
  dispatch(setUpdateDialogOpenActionCreator(false));
  files.forEach((f) => {
    dispatch({ type: INCREASE_FETCHING });
    request
      .post(`${BASE_URL}/upload`)
      .attach('file', f, f.name)
      .then((response) => {
        dispatch(
          addScreenshotActionCreator((response.body as UploadFileResponse).url)
        );
        dispatch({ type: DECREASE_FETCHING });
      })
      .catch((err) => {
        dispatch({ type: DECREASE_FETCHING });
        dispatch(updateErrorMessage((err as ErrorResponse).message));
      });
  });
};
