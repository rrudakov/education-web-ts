import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AboutComponent } from './components/about';
import { FeaturedPostComponent } from './components/featured-post';
import { Main } from './components/main';
import { MainFeaturedPost } from './components/main-featured-post';
import { Sidebar } from './components/sidebar';
import { getFeaturedPosts } from './selectors';
import { thunkFetchFeaturedPosts } from './thunks';

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: spacing(3),
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
      background: palette.secondary.main,
    },
    toolbarLink: {
      padding: spacing(1),
      flexShrink: 0,
    }
  }));

export const Home: React.FC = () => {
  const classes = useStyles();
  const featuredPosts = useSelector(getFeaturedPosts);
  const dispatch = useDispatch();
  const fetchFeaturedPosts = useCallback(() => dispatch(thunkFetchFeaturedPosts()), [dispatch]);

  useEffect(() => {
    fetchFeaturedPosts()
  }, [fetchFeaturedPosts]);

  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center">
        <AboutComponent />
      </Grid>

      {/* <MainFeaturedPost />
          <Grid container={true} spacing={4}>
          {featuredPosts.map((post) => (
          <FeaturedPostComponent key={post.id} post={post} />
          ))}
          </Grid>
          <Grid container={true} spacing={5} className={classes.mainGrid}>
          <Main title="From the firehouse" />
          <Sidebar title="About" description="Some valuable description for sidebar" />
          </Grid> */}
    </React.Fragment>
  )
}
