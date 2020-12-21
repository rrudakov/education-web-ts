import { Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearFormActionCreator } from '../actions';

export const CloseFormButtonComponent: React.FC<{ className: string }> = ({
  className,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const clearForm = useCallback(() => {
    dispatch(clearFormActionCreator());
    history.goBack();
  }, [dispatch, history]);

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      startIcon={<CancelIcon />}
      onClick={clearForm}
    >
      Отменить
    </Button>
  );
};
