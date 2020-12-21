import { History } from 'history';
import { ThunkAction } from 'redux-thunk';
import request, { ResponseError } from 'superagent';
import {
  fetching,
  logout,
  openAuthModal,
  stopFetching,
  updateErrorMessage,
  updateSuccessMessage,
} from '../../../../core/actions';
import { BASE_URL } from '../../../../core/constants';
import { ErrorResponse } from '../../../../core/reducer';
import { AppStoreState } from '../../../../core/store';
import { SystemActionTypes } from '../../../../core/types';
import { getGymnasticURLBySubtypeId } from '../../../../core/utils/helpers';
import { getToken } from '../../../../core/utils/storage';
import { clearFormActionCreator } from '../../actions';
import { GymnasticsActionType } from '../../types';

export const thunkCreateNewGymnastic = (
  history: History<History.UnknownFacade>
): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes | GymnasticsActionType
> => (dispatch, getState) => {
  const {
    gymnastics: { form },
  } = getState();
  const authToken = getToken();
  const redirectTo = getGymnasticURLBySubtypeId(form.subtype_id);

  if (authToken === null) {
    dispatch(updateErrorMessage('Unauthorized!'));
    dispatch(logout());
  } else {
    dispatch(fetching());
    request
      .post(`${BASE_URL}/gymnastics`)
      .set('Authorization', `Token ${authToken}`)
      .send({
        subtype_id: form.subtype_id,
        title: form.title,
        description: form.description,
        picture: form.picture,
      })
      .then(() => {
        dispatch(stopFetching());
        history.push(redirectTo);
        dispatch(clearFormActionCreator());
        dispatch(updateSuccessMessage('Gymnastic was added successfully'));
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
