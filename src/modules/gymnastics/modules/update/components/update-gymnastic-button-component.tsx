import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkUpdateGymnastic } from '../thunks';

interface UpdateGymnasticButtonComponentProps {
  className: string;
  gymnasticId: number;
}

export const UpdateGymnasticButtonComponent: React.FC<UpdateGymnasticButtonComponentProps> = ({
  className,
  gymnasticId,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const updateGymnastic = useCallback(
    () => dispatch(thunkUpdateGymnastic(gymnasticId, history)),
    [dispatch, history, gymnasticId]
  );

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      onClick={updateGymnastic}
      startIcon={<SaveIcon />}
    >
      Обновить
    </Button>
  );
};
