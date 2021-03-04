import {
  createStyles,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePresentationsFilteredActionCreated } from '../../../actions';
import { getPresentations } from '../../../selectors';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: spacing(2),
    },
    iconButton: {
      padding: 10,
    },
    input: {
      marginLeft: spacing(1),
      flex: 1,
    },
  })
);

export const PresentationsFilterComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const presentations = useSelector(getPresentations);
  const updateFilterQuery = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newPresentations = presentations.filter((p) =>
        p.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      dispatch(updatePresentationsFilteredActionCreated(newPresentations));
    },
    [dispatch, presentations]
  );

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Поиск по названию"
        inputProps={{ 'aria-label': 'search by name' }}
        onChange={updateFilterQuery}
      />
    </Paper>
  );
};
