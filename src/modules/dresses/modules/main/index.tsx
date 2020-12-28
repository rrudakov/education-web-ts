import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  Grid,
  Grow,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentChunk,
  getCurrentPage,
  getPagesCount,
} from '../../selectors';
import { DressComponent } from './components/dress-component';
import { thunkFetchDresses, thunkSelectPage } from './thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    pagination: {
      marginBottom: spacing(2),
      marginTop: spacing(2),
    },
    disclamer: {
      marginBottom: spacing(2),
    },
  })
);

export const DressesMainPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchDresses = useCallback(() => dispatch(thunkFetchDresses()), [
    dispatch,
  ]);
  const dresses = useSelector(getCurrentChunk);
  const pageCount = useSelector(getPagesCount);
  const page = useSelector(getCurrentPage);
  const handlePageSelect = useCallback(
    (_: ChangeEvent<unknown>, value: number) =>
      dispatch(thunkSelectPage(value)),
    [dispatch]
  );

  useEffect(() => {
    fetchDresses();
  }, [fetchDresses]);

  return (
    <React.Fragment>
      <Grow in>
        <Card className={classes.disclamer}>
          <CardHeader title={'Прокат детских платьев'} />
          <CardContent>
            <Typography paragraph color="textSecondary" align="justify">
              Если вы планируете фотосессию или День рождения, вы можете взять в
              аренду платье для этого события и ваша принцесса будет самая
              красивая на празднике.
            </Typography>
          </CardContent>
        </Card>
      </Grow>

      {pageCount > 1 && (
        <Grid
          className={classes.pagination}
          container
          direction="row"
          justify="center"
        >
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageSelect}
          />
        </Grid>
      )}
      <Grid container direction="row" spacing={3}>
        {dresses.map((dress, i) => (
          <DressComponent key={i} dress={dress} />
        ))}
      </Grid>
      {pageCount > 1 && (
        <Grid
          className={classes.pagination}
          container
          direction="row"
          justify="center"
        >
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageSelect}
          />
        </Grid>
      )}
    </React.Fragment>
  );
};
