import { Checkbox, FormControlLabel } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsPublicActionCreator } from '../actions';
import { getIsPublic } from '../selectors';

export const IsPublicCheckboxComponent: React.FC = () => {
  const dispatch = useDispatch();
  const isPublic = useSelector(getIsPublic);
  const updateIsPublic = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(updateIsPublicActionCreator(e.target.checked)),
    [dispatch]
  );

  return (
    <FormControlLabel
      label="Доступен всем"
      control={<Checkbox checked={isPublic} onChange={updateIsPublic} />}
    />
  );
};
