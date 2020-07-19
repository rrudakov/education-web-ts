import React, { useCallback, useEffect } from 'react';
import { MainFeaturedPost } from './components/MainFeaturedPost';
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { thunkFetchFeaturedPosts } from './thunks';
import { getFeaturedPosts } from './selectors';
import { FeaturedPostComponent } from './components/FeaturedPost';
import { Main } from './components/Main';
import { Sidebar } from './components/Sidebar';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: spacing(3),
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
      <MainFeaturedPost />
      <Grid container={true} spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPostComponent key={post.id} post={post} />
        ))}
      </Grid>
      <Grid container={true} spacing={5} className={classes.mainGrid}>
        <Main title="From the firehouse" />
        <Sidebar title="About" description="Some valuable description for sidebar" />
      </Grid>
    </React.Fragment>
  )
}
