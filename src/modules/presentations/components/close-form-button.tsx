import { Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearFormActionCreator } from '../actions';

export const CloseFormButton: React.FC<{ className: string }> = ({
  className,
}) => {
  const dispatch = useDispatch();
  const clearForm = useCallback(() => dispatch(clearFormActionCreator()), [
    dispatch,
  ]);

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      startIcon={<CancelIcon />}
      onClick={clearForm}
      component={Link}
      to="/presentations"
    >
      Отменить
    </Button>
  );
};
