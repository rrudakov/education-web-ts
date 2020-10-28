import { TextField } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PriceNumberFormatComponent } from '../../../core/components/price-number-format';
import { updatePriceActionCreator } from '../actions';
import { getPrice } from '../selectors';

export const PriceInputComponent: React.FC = () => {
  const price = useSelector(getPrice);
  const dispatch = useDispatch();
  const updatePrice = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(updatePriceActionCreator(e.target.value)),
    [dispatch]
  );

  return (
    <TextField
      id="videoLessonPrice"
      label="Цена"
      placeholder="Цена нового видео урока..."
      value={price}
      onChange={updatePrice}
      fullWidth
      variant="outlined"
      margin="normal"
      InputProps={{ inputComponent: PriceNumberFormatComponent as any }}
    />
  );
};
