import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkUpdateDress } from '../thunks';

interface UpdateButtonProps {
  className: string;
  dressId: number;
}

export const UpdateButton: React.FC<UpdateButtonProps> = ({
  className,
  dressId,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const updateDress = useCallback(
    () => dispatch(thunkUpdateDress(dressId, history)),
    [dispatch, history, dressId]
  );

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      onClick={updateDress}
      startIcon={<SaveIcon />}
    >
      Обновить
    </Button>
  );
};
