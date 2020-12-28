import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentChunk,
  getCurrentPage,
  getPagesCount,
} from '../../selectors';
import { DemoVideoComponent } from './components/demo-video-component';
import { VideoLessonComponent } from './components/video-lesson-component';
import { thunkFetchVideoLessons, thunkSelectPage } from './thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    pagination: {
      marginBottom: spacing(2),
      marginTop: spacing(2),
    },
  })
);

export const VideoLessonsMainPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchVideoLessons = useCallback(
    () => dispatch(thunkFetchVideoLessons()),
    [dispatch]
  );
  const videoLessons = useSelector(getCurrentChunk);
  const pageCount = useSelector(getPagesCount);
  const page = useSelector(getCurrentPage);
  const handlePageSelect = useCallback(
    (_: ChangeEvent<unknown>, value: number) =>
      dispatch(thunkSelectPage(value)),
    [dispatch]
  );

  useEffect(() => {
    fetchVideoLessons();
  }, [fetchVideoLessons]);

  return (
    <React.Fragment>
      <DemoVideoComponent />
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
      {videoLessons.map((videoLesson) => (
        <VideoLessonComponent key={videoLesson.id} videoLesson={videoLesson} />
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
