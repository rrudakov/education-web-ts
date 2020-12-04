import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SizeNumberFormatComponent } from '../../../core/components/size-number-format-component';
import { updateSizeActionCreator } from '../actions';
import { getSize } from '../selectors';

export const SizeInputComponent: React.FC = () => {
  const size = useSelector(getSize);
  const dispatch = useDispatch();
  const updateSize = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (Number.isInteger(e.target.value)) {
        dispatch(updateSizeActionCreator(Number(e.target.value)));
      }
    },
    [dispatch]
  );

  return (
    <TextField
      id="dressSize"
      label="Размер"
      placeholder="Размер платья..."
      value={size}
      onChange={updateSize}
      fullWidth
      variant="outlined"
      margin="normal"
      InputProps={{ inputComponent: SizeNumberFormatComponent as any }}
    />
  );
};
