import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUrlActionCreator } from '../actions';
import { getUrl } from '../selectors';

export const UrlInputComponent: React.FC = () => {
  const url = useSelector(getUrl);
  const dispatch = useDispatch();
  const updateUrl = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(updateUrlActionCreator(e.target.value)),
    [dispatch]
  );

  return (
    <TextField
      id="presentationUrl"
      label="Адрес презентации"
      placeholder="Должно начинаться с https://..."
      value={url}
      onChange={updateUrl}
      fullWidth
      variant="outlined"
      margin="normal"
    />
  );
};
