import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkSubmitNewVideoLesson } from '../thunks';

export const CreateButton: React.FC<{ className: string }> = ({
  className,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const submitVideoLesson = useCallback(
    () => dispatch(thunkSubmitNewVideoLesson(history)),
    [dispatch, history]
  );

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      onClick={submitVideoLesson}
      startIcon={<SaveIcon />}
    >
      Сохранить
    </Button>
  );
};
