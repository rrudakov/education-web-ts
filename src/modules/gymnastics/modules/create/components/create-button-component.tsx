import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkCreateNewGymnastic } from '../thunks';

export const CreateButtonComponent: React.FC<{ className: string }> = ({
  className,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const createNewGymnastic = useCallback(
    () => dispatch(thunkCreateNewGymnastic(history)),
    [dispatch, history]
  );

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      onClick={createNewGymnastic}
      startIcon={<SaveIcon />}
    >
      Сохранить
    </Button>
  );
};
