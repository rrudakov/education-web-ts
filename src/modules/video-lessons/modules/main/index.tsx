import { Container } from '@material-ui/core';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationComponent } from '../../../../core/components/pagination';
import {
  getCurrentChunk,
  getCurrentPage,
  getPagesCount,
} from '../../selectors';
import { DemoVideoComponent } from './components/demo-video-component';
import { FreeLessonHeroComponent } from './components/free-lesson-hero-component';
import { VideoLessonComponent } from './components/video-lesson-component';
import { thunkFetchVideoLessons, thunkSelectPage } from './thunks';

export const VideoLessonsMainPage: React.FC = () => {
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
      <FreeLessonHeroComponent />
      <Container maxWidth="lg">
        <DemoVideoComponent />
        {pageCount > 1 && (
          <PaginationComponent
            pageCount={pageCount}
            page={page}
            handleChange={handlePageSelect}
          />
        )}

        {videoLessons.map((videoLesson) => (
          <VideoLessonComponent
            key={videoLesson.id}
            videoLesson={videoLesson}
          />
        ))}
        {pageCount > 1 && (
          <PaginationComponent
            pageCount={pageCount}
            page={page}
            handleChange={handlePageSelect}
          />
        )}
      </Container>
    </React.Fragment>
  );
};
