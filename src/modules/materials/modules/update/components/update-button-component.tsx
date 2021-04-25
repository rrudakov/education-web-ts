import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkUpdateMaterial } from '../thunks';

type UpdateButtonComponentProps = {
  className: string;
  materialId: number;
};

export const UpdateButtonComponent: React.FC<UpdateButtonComponentProps> = ({
  className,
  materialId,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const updateMaterial = useCallback(
    () => dispatch(thunkUpdateMaterial(materialId, history)),
    [dispatch, history, materialId]
  );

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      onClick={updateMaterial}
      startIcon={<SaveIcon />}
    >
      Обновить
    </Button>
  );
};
