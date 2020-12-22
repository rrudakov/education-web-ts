import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { splitIntoChunks } from '../../../../core/utils/helpers';
import { getGymnastics } from '../../selectors';
import { GymnasticComponent } from './components/gymnastic-component';
import { thunkFetchGymnastics } from './thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    pagination: {
      marginBottom: spacing(2),
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
  const gymnastics = useSelector(getGymnastics);
  const gymnasticsOnPage = 6;
  const pageCount = Math.ceil(gymnastics.length / gymnasticsOnPage);
  const chunks = splitIntoChunks(gymnastics, gymnasticsOnPage);
  const [page, setPage] = useState(1);
  const handlePageSelect = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageSelect}
          />
        </Grid>
      )}
      <Grid container spacing={3}>
        {chunks[page - 1] !== undefined &&
          chunks[page - 1].map((gymnastic, i) => (
            <GymnasticComponent key={i} gymnastic={gymnastic} />
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
