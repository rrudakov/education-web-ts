import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthOpen, getSignInPassword, getSignInUsername } from '../selector';
import { thunkLogin } from '../thunks';
import {
  CLOSE_AUTH,
  UPDATE_SIGN_IN_PASSWORD,
  UPDATE_SIGN_IN_USERNAME,
} from '../types';

export const SignInDialog: React.FC = () => {
  const authOpen = useSelector(getAuthOpen);
  const username = useSelector(getSignInUsername);
  const password = useSelector(getSignInPassword);
  const dispatch = useDispatch();
  const closeAuth = useCallback(() => dispatch({ type: CLOSE_AUTH }), [
    dispatch,
  ]);
  const updateUsername = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: UPDATE_SIGN_IN_USERNAME,
        payload: event.target.value,
      }),
    [dispatch]
  );
  const updatePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      dispatch({
        type: UPDATE_SIGN_IN_PASSWORD,
        payload: event.target.value,
      }),
    [dispatch]
  );
  const sendSignInRequest = useCallback(() => dispatch(thunkLogin()), [
    dispatch,
  ]);

  return (
    <Dialog
      open={authOpen}
      onClose={closeAuth}
      aria-labelledby="signin-dialog-title"
    >
      <DialogTitle id="signin-dialog-title">Вход</DialogTitle>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendSignInRequest();
        }}
        noValidate
      >
        <DialogContent>
          <DialogContentText>
            Заполните форму и нажмите Войти чтобы залогиниться.
          </DialogContentText>

          <TextField
            autoFocus
            id="username"
            fullWidth
            label="Логин"
            type="text"
            value={username}
            onChange={updateUsername}
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="password"
            fullWidth={true}
            label="Пароль"
            type="password"
            value={password}
            onChange={updatePassword}
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={closeAuth}>
            Отмена
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Войти
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
