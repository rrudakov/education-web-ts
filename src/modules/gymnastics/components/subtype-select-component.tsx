import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GYMNASTICS_SUBTYPES } from '../../../core/constants';
import { updateSubtypeIdActionCreator } from '../actions';
import { getSubtypeId } from '../selectors';

export const SubTypeSelectComponent: React.FC = () => {
  const subtypeId = useSelector(getSubtypeId);
  const dispatch = useDispatch();
  const updateSubtypeId = useCallback(
    (e: ChangeEvent<{ value: unknown }>) =>
      dispatch(updateSubtypeIdActionCreator(e.target.value as number)),
    [dispatch]
  );

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel id="gymnasticSubtypeIdLabel">Тип гимнастики</InputLabel>
      <Select
        labelId="gymnasticSubtypeIdLabel"
        id="gymnasticSubtypeId"
        value={subtypeId}
        onChange={updateSubtypeId}
        fullWidth
        label="Тип гимнастики"
      >
        {GYMNASTICS_SUBTYPES.map((g, i) => (
          <MenuItem key={i} value={g.subtypeId}>
            {g.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
