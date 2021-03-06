import jwt_decode from 'jwt-decode';
import { ThunkAction } from 'redux-thunk';
import request from 'superagent';
import { updateErrorMessage, updateSuccessMessage } from './actions';
import { BASE_URL } from './constants';
import { ErrorResponse, UserState } from './reducer';
import { AppStoreState } from './store';
import {
  CLOSE_AUTH,
  DECREASE_FETCHING,
  INCREASE_FETCHING,
  LOGOUT,
  SUCCESSFUL_LOGIN,
  SystemActionTypes,
} from './types';
import { deleteToken, getToken, saveToken } from './utils/storage';

interface SignInResponse {
  token: string;
}

interface TokenPayload {
  exp: number;
  user: UserState;
}

export const thunkLogin = (): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes
> => (dispatch, getState) => {
  const { system } = getState();

  dispatch({ type: INCREASE_FETCHING });
  request
    .post(`${BASE_URL}/login`)
    .send({
      username: system.signInState.username,
      password: system.signInState.password,
    })
    .then((response) => {
      const tokenResponse = response.body as SignInResponse;
      saveToken(tokenResponse.token);
      const auth: TokenPayload = jwt_decode(tokenResponse.token);
      dispatch({ type: SUCCESSFUL_LOGIN, payload: auth.user });
      dispatch({ type: DECREASE_FETCHING });
      dispatch({ type: CLOSE_AUTH });
      dispatch(updateSuccessMessage('Successful login'));
    })
    .catch((error) => {
      dispatch({ type: DECREASE_FETCHING });
      dispatch(updateErrorMessage((error as ErrorResponse).message));
    });
};

export const thunkLogout = (): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes
> => (dispatch) => {
  dispatch({ type: INCREASE_FETCHING });
  deleteToken();
  dispatch({ type: LOGOUT });
  dispatch({ type: DECREASE_FETCHING });
};

export const thunkCheckLogin = (): ThunkAction<
  void,
  AppStoreState,
  null,
  SystemActionTypes
> => (dispatch) => {
  dispatch({ type: INCREASE_FETCHING });
  const token = getToken();
  if (token !== null) {
    const auth: TokenPayload = jwt_decode(token);
    dispatch({ type: SUCCESSFUL_LOGIN, payload: auth.user });
  }
  dispatch({ type: DECREASE_FETCHING });
};
