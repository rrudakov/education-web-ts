import {
  Backdrop,
  CircularProgress,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignInDialog } from './core/components/auth';
import { Footer } from './core/components/footer';
import { MenuDrawer } from './core/components/menu-drawer';
import { ErrorMessage, SuccessMessage } from './core/components/message';
import { TopBar } from './core/components/topbar';
import { getFetching } from './core/selector';
import { thunkCheckLogin } from './core/thunks';
import { ContactsPage } from './modules/contacts';
import { GymnasticsPage } from './modules/gymnastics';
import { Home } from './modules/home';
import { DownloadMaterialsPage } from './modules/materials';
import { OnlineOfflineLessonsPage } from './modules/online-offline-lessons';
import { PresentationsPage } from './modules/presentations';
import { VideoBonusPage } from './modules/video-bonus';
import { VideoLessonsPage } from './modules/video-lessons';
import { FreeVideoLessonComponent } from './modules/video-lessons/modules/free-lesson';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    content: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }),
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
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/video-lessons">
            <VideoLessonsPage />
          </Route>
          <Route path="/online-offline-lessons" exact>
            <OnlineOfflineLessonsPage />
          </Route>
          <Route path="/bonus-video" exact>
            <VideoBonusPage />
          </Route>
          {/* <Route path="/birthdays" exact>
              <BirthdaysPage />
              </Route>
              <Route path="/events" exact>
              <FairytailEvents />
              </Route>
              <Route path="/dresses">
              <DressesPage />
              </Route> */}
          <Route path="/materials">
            <DownloadMaterialsPage />
          </Route>
          <Route path="/contacts" exact>
            <ContactsPage />
          </Route>
          <Route path="/presentations">
            <PresentationsPage />
          </Route>
          <Route path="/gymnastics">
            <GymnasticsPage />
          </Route>
          <Route path="/free-video-lesson" exact>
            <FreeVideoLessonComponent />
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
