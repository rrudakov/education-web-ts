import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkUpdatePresentation } from '../thunks';

interface UpdatePresentationButtonComponentProps {
  className: string;
  presentationId: number;
}

export const UpdatePresentationButtonComponent: React.FC<UpdatePresentationButtonComponentProps> = ({
  className,
  presentationId,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const updatePresentation = useCallback(
    () => dispatch(thunkUpdatePresentation(presentationId, history)),
    [dispatch, history, presentationId]
  );

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      onClick={updatePresentation}
      startIcon={<SaveIcon />}
    >
      Обновить
    </Button>
  );
};
