import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentChunk,
  getCurrentPage,
  getPagesCount,
} from '../../selectors';
import { GymnasticComponent } from './components/gymnastic-component';
import { thunkFetchGymnastics, thunkSelectPage } from './thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    pagination: {
      marginBottom: spacing(2),
      marginTop: spacing(2),
    },
  })
);

export interface GymnasticsMainPageProps {
  subtypeId: number;
}

export const GymnasticsMainPage: React.FC<GymnasticsMainPageProps> = ({
  subtypeId,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchGymnastics = useCallback(
    () => dispatch(thunkFetchGymnastics(subtypeId)),
    [dispatch, subtypeId]
  );
  const page = useSelector(getCurrentPage);
  const pageCount = useSelector(getPagesCount);
  const selectPage = useCallback(
    (_: ChangeEvent<unknown>, value: number) =>
      dispatch(thunkSelectPage(value)),
    [dispatch]
  );

  useEffect(() => {
    fetchGymnastics();
  }, [fetchGymnastics]);

  return (
    <React.Fragment>
      {pageCount > 1 && (
        <Grid
          className={classes.pagination}
          container
          direction="row"
          justify="center"
        >
          <Pagination count={pageCount} page={page} onChange={selectPage} />
        </Grid>
      )}
      <GymnasticsGridComponent />
      {pageCount > 1 && (
        <Grid
          className={classes.pagination}
          container
          direction="row"
          justify="center"
        >
          <Pagination count={pageCount} page={page} onChange={selectPage} />
        </Grid>
      )}
    </React.Fragment>
  );
};

const GymnasticsGridComponent: React.FC = () => {
  const gymnastics = useSelector(getCurrentChunk);

  return (
    <Grid container direction="row" spacing={3}>
      {gymnastics.map((gymnastic, i) => (
        <GymnasticComponent key={i} gymnastic={gymnastic} />
      ))}
    </Grid>
  );
};
