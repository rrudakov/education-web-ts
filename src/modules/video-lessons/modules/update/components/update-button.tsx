import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkUpdateLesson } from '../thunks';

interface UpdateButtonProps {
  className: string;
  lessonId: number;
}

export const UpdateButton: React.FC<UpdateButtonProps> = ({
  className,
  lessonId,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const updateVideoLesson = useCallback(
    () => dispatch(thunkUpdateLesson(lessonId, history)),
    [dispatch, history, lessonId]
  );

  return (
    <Button
      className={className}
      variant="contained"
      color="primary"
      onClick={updateVideoLesson}
      startIcon={<SaveIcon />}
    >
      Обновить
    </Button>
  );
};
