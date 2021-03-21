import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentChunk,
  getCurrentPage,
  getPagesCount,
} from '../../selectors';
import { OnlineGameComponent } from './components/online-game-component';
import { PresentationComponent } from './components/presentation-component';
import { PresentationModalComponent } from './components/presentation-modal-component';
import { PresentationsFilterComponent } from './components/presentations-filter-component';
import { thunkFetchPresentations, thunkSelectPage } from './thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      marginBottom: spacing(2),
      marginTop: spacing(2),
    },
    pagination: {
      marginBottom: spacing(2),
      marginTop: spacing(2),
    },
  })
);

interface PresentationsMainPageProps {
  subtypeId: number;
}

export const PresentationsMainPage: React.FC<PresentationsMainPageProps> = ({
  subtypeId,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchPresentations = useCallback(
    () => dispatch(thunkFetchPresentations(subtypeId)),
    [dispatch, subtypeId]
  );
  const presentations = useSelector(getCurrentChunk);
  const pageCount = useSelector(getPagesCount);
  const page = useSelector(getCurrentPage);
  const handlePageSelect = useCallback(
    (_: ChangeEvent<unknown>, value: number) =>
      dispatch(thunkSelectPage(value)),
    [dispatch]
  );

  useEffect(() => {
    fetchPresentations();
  }, [fetchPresentations]);

  return (
    <Container className={classes.root} maxWidth="lg">
      <PresentationModalComponent />

      {subtypeId === 2 && <OnlineGameComponent />}

      <PresentationsFilterComponent />

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
        {presentations.map((presentation) => (
          <PresentationComponent key={presentation.id} {...presentation} />
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
    </Container>
  );
};
