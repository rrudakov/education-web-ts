import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkSubmitNewDress } from '../thunks';

export const CreateButton: React.FC<{ className: string }> = ({
  className,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const submitDress = useCallback(
    () => dispatch(thunkSubmitNewDress(history)),
    [dispatch, history]
  );

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      onClick={submitDress}
      startIcon={<SaveIcon />}
    >
      Сохранить
    </Button>
  );
};
