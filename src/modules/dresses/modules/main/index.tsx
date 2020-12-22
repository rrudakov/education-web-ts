import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { splitIntoChunks } from '../../../../core/utils/helpers';
import { getDresses } from '../../selectors';
import { DressComponent } from './components/dress-component';
import { thunkFetchDresses } from './thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    pagination: {
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
  const dresses = useSelector(getDresses);
  const dressesOnPage = 5;
  const pageCount = Math.ceil(dresses.length / dressesOnPage);
  const chunks = splitIntoChunks(dresses, dressesOnPage);
  const [page, setPage] = useState(1);
  const handlePageSelect = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    fetchDresses();
  }, [fetchDresses]);

  return (
    <React.Fragment>
      <Typography paragraph>
        Если вы планируете фотосессию или День рождения, вы можете взять в
        аренду платье для этого события и ваша принцесса будет самая красивая на
        празднике.
      </Typography>
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
      {chunks[page - 1] !== undefined &&
        chunks[page - 1].map((dress) => (
          <DressComponent key={dress.id} dress={dress} />
        ))}
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
