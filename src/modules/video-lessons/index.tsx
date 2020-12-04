import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NewItemFab } from '../../core/components/fab';
import { NewVideoLessonPage } from './modules/create';
import { VideoLessonsMainPage } from './modules/main';
import { UpdateVideoLessonPage } from './modules/update';

export const VideoLessonsPage: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <VideoLessonsMainPage />
        <NewItemFab />
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
