import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PRESENTATIONS_SUBTYPES } from '../../../core/constants';
import { updateSubtypeIdActionCreator } from '../actions';
import { getSubtypeId } from '../selectors';

export const SubtypeIdSelectComponent: React.FC = () => {
  const subtypeId = useSelector(getSubtypeId);
  const dispatch = useDispatch();
  const updateSubtypeId = useCallback(
    (e: ChangeEvent<{ value: unknown }>) =>
      dispatch(updateSubtypeIdActionCreator(e.target.value as number)),
    [dispatch]
  );

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel id="presentationSubtypeIdLabel">Тип презентации</InputLabel>
      <Select
        labelId="presentationSubtypeIdLabel"
        id="presentationSubtypeId"
        value={subtypeId}
        onChange={updateSubtypeId}
        fullWidth
        label="Тип презентации"
      >
        {PRESENTATIONS_SUBTYPES.map((p, i) => (
          <MenuItem key={i} value={p.subtypeId}>
            {p.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
