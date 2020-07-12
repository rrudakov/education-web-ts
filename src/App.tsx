import { makeStyles, Theme, Container, Backdrop, createStyles, CircularProgress } from '@material-ui/core';
import React from 'react';
import { Header, HeaderSection } from './core/components/Header';
import { Footer } from './core/components/Footer';
import { Home } from './modules/home';
import { useSelector } from 'react-redux';
import { getFetching } from './core/selector';

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

  return (
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={fetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container maxWidth="lg">
        <Header title="Education portal" sections={sections} />
        <main>
          <Home />
        </main>
      </Container>
      <Footer title="All rights protected" description="This site developed using React and TypeScript" />
    </React.Fragment>
  );
}
