import { Container } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewVideoLessonFab } from '../new-video-lesson/components/new-video-lesson-button';
import { DemoVideoComponent } from './components/demo-video-component';
import { VideoLessonComponent } from './components/video-lesson-component';
import { getVideoLessons } from './selectors';
import { thunkFetchVideoLessons } from './thunks';

export const VideoLessonsPage: React.FC = () => {
  const videoLessons = useSelector(getVideoLessons);
  const dispatch = useDispatch();
  const fetchVideoLessons = useCallback(
    () => dispatch(thunkFetchVideoLessons()),
    [dispatch]
  );

  useEffect(() => {
    fetchVideoLessons();
  }, [fetchVideoLessons]);

  return (
    <main>
      <Container maxWidth="lg">
        <DemoVideoComponent />
        {videoLessons.map((videoLesson) => (
          <VideoLessonComponent
            key={videoLesson.id}
            videoLesson={videoLesson}
          />
        ))}
      </Container>
      <NewVideoLessonFab />
    </main>
  );
};
