import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStoreLinkActionCreator } from '../actions';
import { getStoreLink } from '../selectors';

export const StoreLinkInputComponent: React.FC = () => {
  const storeLink = useSelector(getStoreLink);
  const dispatch = useDispatch();
  const updateStoreLink = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(updateStoreLinkActionCreator(e.target.value)),
    [dispatch]
  );

  return (
    <TextField
      id="store-link"
      label="Ссылка на магазин"
      placeholder="Должно начинаться с https://..."
      value={storeLink}
      onChange={updateStoreLink}
      fullWidth
      variant="outlined"
      margin="normal"
    />
  );
};
