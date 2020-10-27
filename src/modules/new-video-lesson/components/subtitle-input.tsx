import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubtitleActionCreator } from '../actions';
import { getSubtitle } from '../selectors';

export const SubTitleInputComponent: React.FC = () => {
  const subTitle = useSelector(getSubtitle);
  const dispatch = useDispatch();
  const updateSubTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(updateSubtitleActionCreator(e.target.value)),
    [dispatch]
  );

  return (
    <TextField
      id="videoLessonSubTitle"
      label="Подзаголовок"
      placeholder="Подзаголовок для нового видео-урока..."
      value={subTitle}
      onChange={updateSubTitle}
      fullWidth
      variant="outlined"
      margin="normal"
    />
  );
};
