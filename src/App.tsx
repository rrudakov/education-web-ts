import {
  Backdrop,
  CircularProgress,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignInDialog } from './core/components/auth';
import { Footer } from './core/components/footer';
import { MenuDrawer } from './core/components/menu-drawer';
import { ErrorMessage, SuccessMessage } from './core/components/message';
import { NewPostFab } from './core/components/new-post-button';
import { TopBar } from './core/components/topbar';
import { getFetching } from './core/selector';
import { thunkCheckLogin } from './core/thunks';
import { Home } from './modules/home';
import { NewPost } from './modules/newpost';
import { SinglePost } from './modules/post';
import { HomeBanner } from './modules/home/components/banner';
import { VideoLessonsPage } from './modules/video-lessons';
import { OnlineOfflineLessonsPage } from './modules/online-offline-lessons';
import { BirthdaysPage } from './modules/birthdays';
import { FairytailEvents } from './modules/fairytail-events';
import { DressesPage } from './modules/dresses';
import { NewVideoLessonPage } from './modules/new-video-lesson';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
);

export const App: React.FC = () => {
  const classes = useStyles();
  const fetching = useSelector(getFetching);
  const dispatch = useDispatch();
  const checkToken = useCallback(() => dispatch(thunkCheckLogin()), [dispatch]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <BrowserRouter>
      <Backdrop className={classes.backdrop} open={fetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ErrorMessage />
      <SuccessMessage />
      <SignInDialog />
      <TopBar />
      <MenuDrawer />
      {/* <NewPostFab /> */}
      <Switch>
        <Route path="/" exact={true}>
          <HomeBanner />
        </Route>
      </Switch>
      <Container maxWidth="lg">
        <main>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/video-lessons" exact={true}>
              <VideoLessonsPage />
            </Route>
            <Route path="/video-lessons/new" exact={true}>
              <NewVideoLessonPage />
            </Route>
            <Route path="/online-offline-lessons" exact={true}>
              <OnlineOfflineLessonsPage />
            </Route>
            <Route path="/birthdays" exact={true}>
              <BirthdaysPage />
            </Route>
            <Route path="/events" exact={true}>
              <FairytailEvents />
            </Route>
            <Route path="/dresses" exact={true}>
              <DressesPage />
            </Route>
            <Route path="/posts/new" exact={true}>
              <NewPost />
            </Route>
            <Route path="/posts/:id" exact={true}>
              <SinglePost />
            </Route>
          </Switch>
        </main>
      </Container>
      <Footer
        title="All rights protected"
        description="This site developed using React and TypeScript"
      />
    </BrowserRouter>
  );
};
