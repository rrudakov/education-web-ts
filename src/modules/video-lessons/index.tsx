import { Container } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { DemoVideoComponent } from './components/demo-video-component';
import { NewVideoLessonFab } from './components/new-video-lesson-fab';
import { VideoLessonComponent } from './components/video-lesson-component';
import { NewVideoLessonPage } from './modules/create';
import { UpdateVideoLessonPage } from './modules/update';
import { getVideoLessons } from './selectors';
import { thunkFetchVideoLessons } from './thunks';

export const VideoLessonsPage: React.FC = () => {
  const { path } = useRouteMatch();
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
    <Switch>
      <Route exact path={path}>
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
      </Route>
      <Route exact path={`${path}/new`}>
        <NewVideoLessonPage />
      </Route>
      <Route exact path={`${path}/:lessonId`}>
        <UpdateVideoLessonPage />
      </Route>
    </Switch>
  );
};
