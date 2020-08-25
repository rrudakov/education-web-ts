import { Backdrop, CircularProgress, Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignInDialog } from './core/components/auth';
import { Footer } from './core/components/footer';
import { Header } from './core/components/header';
import { ErrorMessage, SuccessMessage } from './core/components/message';
import { getFetching } from './core/selector';
import { thunkCheckLogin } from './core/thunks';
import { Home } from './modules/home';
import { NewPost } from './modules/newpost';
import { SinglePost } from './modules/post';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
)

export const App: React.FC = () => {
  const classes = useStyles();
  const fetching = useSelector(getFetching);
  const dispatch = useDispatch();
  const checkToken = useCallback(() => dispatch(thunkCheckLogin()), [dispatch]);

  useEffect(() => {
    checkToken()
  }, [checkToken]);

  return (
    <BrowserRouter>
      <Backdrop className={classes.backdrop} open={fetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ErrorMessage />
      <SuccessMessage />
      <SignInDialog />
      <Container maxWidth="lg">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
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
      <Footer title="All rights protected" description="This site developed using React and TypeScript" />
    </BrowserRouter>
  );
}
