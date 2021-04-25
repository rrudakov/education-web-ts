import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitleActionCreator } from '../actions';
import { getTitle } from '../selectors';

export const TitleInputComponent: React.FC = () => {
  const title = useSelector(getTitle);
  const dispatch = useDispatch();
  const updateTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(updateTitleActionCreator(e.target.value)),
    [dispatch]
  );

  return (
    <TextField
      id="title"
      label="Заголовок"
      placeholder="Заголовок для нового материала..."
      value={title}
      onChange={updateTitle}
      fullWidth
      variant="outlined"
      margin="normal"
    />
  );
};
