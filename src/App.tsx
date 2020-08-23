import { Backdrop, CircularProgress, Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignInDialog } from './core/components/Auth';
import { Footer } from './core/components/Footer';
import { Header, HeaderSection } from './core/components/Header';
import { getFetching } from './core/selector';
import { Home } from './modules/home';
import { thunkCheckLogin } from './core/thunks';
import { SinglePost } from './modules/post';
import { ErrorMessage, SuccessMessage } from './core/components/Message';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
)

const sections: HeaderSection[] = [
  { title: "Education", url: "#" },
  { title: "Children", url: "#" },
  { title: "Parents", url: "#" },
  { title: "Material", url: "#" },
  { title: "About me", url: "#" },
]

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
        <Header title="Education portal" sections={sections} />
        <main>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
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
