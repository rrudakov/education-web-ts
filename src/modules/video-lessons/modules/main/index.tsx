import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { splitIntoChunks } from '../../../../core/utils/helpers';
import { getVideoLessons } from '../../selectors';
import { DemoVideoComponent } from './components/demo-video-component';
import { VideoLessonComponent } from './components/video-lesson-component';
import { thunkFetchVideoLessons } from './thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    pagination: {
      marginBottom: spacing(2),
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
  const videoLessons = useSelector(getVideoLessons);
  const lessonsOnPage = 5;
  const pageCount = Math.ceil(videoLessons.length / lessonsOnPage);
  const videoLessonsChunks = splitIntoChunks(videoLessons, lessonsOnPage);
  const [page, setPage] = useState(1);
  const handlePageSelect = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    fetchVideoLessons();
  }, [fetchVideoLessons]);

  return (
    <React.Fragment>
      <DemoVideoComponent />
      <Grid
        className={classes.pagination}
        container
        direction="row"
        justify="center"
      >
        <Pagination count={pageCount} page={page} onChange={handlePageSelect} />
      </Grid>
      {videoLessonsChunks[page - 1] !== undefined &&
        videoLessonsChunks[page - 1].map((videoLesson) => (
          <VideoLessonComponent
            key={videoLesson.id}
            videoLesson={videoLesson}
          />
        ))}
      <Grid
        className={classes.pagination}
        container
        direction="row"
        justify="center"
      >
        <Pagination count={pageCount} page={page} onChange={handlePageSelect} />
      </Grid>
    </React.Fragment>
  );
};
