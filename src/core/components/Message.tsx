import React, { useCallback } from 'react';
import { makeStyles, Theme, createStyles, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { updateErrorMessage, updateSuccessMessage } from '../actions';
import { getErrorMessage, getSuccessMessage } from '../selector';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: spacing(2),
      },
    },
  }));

export const ErrorMessage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const closeError = useCallback(() => dispatch(updateErrorMessage(undefined)), [dispatch]);
  const errorMessage = useSelector(getErrorMessage);
  const isOpen = errorMessage !== undefined;

  return (
    <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={closeError}>
        <Alert elevation={6} variant="filled" onClose={closeError} severity="error">{errorMessage}</Alert>
      </Snackbar>
    </div>
  );
}

export const SuccessMessage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const closeSuccess = useCallback(() => dispatch(updateSuccessMessage(undefined)), [dispatch]);
  const successMessage = useSelector(getSuccessMessage);
  const isOpen = successMessage !== undefined;

  return (
    <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={closeSuccess}>
        <Alert elevation={6} variant="filled" onClose={closeSuccess} severity="success">{successMessage}</Alert>
      </Snackbar>
    </div>
  )
}
