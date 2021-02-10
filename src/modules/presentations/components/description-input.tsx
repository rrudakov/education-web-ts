import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDescriptionActionCreator } from '../actions';
import { getDescription } from '../selectors';

export const DescriptionInputComponent: React.FC = () => {
  const description = useSelector(getDescription);
  const dispatch = useDispatch();
  const updateDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) =>
      dispatch(updateDescriptionActionCreator(e.target.value)),
    [dispatch]
  );

  return (
    <TextField
      id="presentationDescription"
      label="Описание"
      placeholder="Описание презентации..."
      value={description}
      onChange={updateDescription}
      fullWidth
      variant="outlined"
      margin="normal"
      multiline
      rows={5}
      rowsMax={10}
    />
  );
};
