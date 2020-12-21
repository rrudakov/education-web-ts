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
import { TopBar } from './core/components/topbar';
import { getFetching } from './core/selector';
import { thunkCheckLogin } from './core/thunks';
import { BirthdaysPage } from './modules/birthdays';
import { ContactsPage } from './modules/contacts';
import { DressesPage } from './modules/dresses';
import { FairytailEvents } from './modules/fairytail-events';
import { GymnasticsPage } from './modules/gymnastics';
import { Home } from './modules/home';
import { HomeBanner } from './modules/home/components/banner';
import { OnlineOfflineLessonsPage } from './modules/online-offline-lessons';
import { PresentationsPage } from './modules/presentations';
import { VideoBonusPage } from './modules/video-bonus';
import { VideoLessonsPage } from './modules/video-lessons';

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
      <Switch>
        <Route path="/" exact>
          <HomeBanner />
        </Route>
      </Switch>
      <Container className={classes.content} maxWidth="lg">
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
            <Route path="/birthdays" exact>
              <BirthdaysPage />
            </Route>
            <Route path="/events" exact>
              <FairytailEvents />
            </Route>
            <Route path="/dresses">
              <DressesPage />
            </Route>
            <Route path="/contacts" exact>
              <ContactsPage />
            </Route>
            <Route path="/presentations" exact>
              <PresentationsPage />
            </Route>
            <Route path="/gymnastics">
              <GymnasticsPage />
            </Route>
          </Switch>
        </main>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};
