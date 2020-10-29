import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoLessons } from '../../selectors';
import { DemoVideoComponent } from './components/demo-video-component';
import { VideoLessonComponent } from './components/video-lesson-component';
import { thunkFetchVideoLessons } from './thunks';

export const VideoLessonsMainPage: React.FC = () => {
  const dispatch = useDispatch();
  const fetchVideoLessons = useCallback(
    () => dispatch(thunkFetchVideoLessons()),
    [dispatch]
  );
  const videoLessons = useSelector(getVideoLessons);

  useEffect(() => {
    fetchVideoLessons();
  }, [fetchVideoLessons]);

  return (
    <React.Fragment>
      <DemoVideoComponent />
      {videoLessons.map((videoLesson) => (
        <VideoLessonComponent key={videoLesson.id} videoLesson={videoLesson} />
      ))}
    </React.Fragment>
  );
};
