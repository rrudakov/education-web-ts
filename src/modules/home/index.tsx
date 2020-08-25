import { createStyles, Grid, Link, makeStyles, Theme, Toolbar } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { FeaturedPostComponent } from './components/featured-post';
import { Main } from './components/main';
import { MainFeaturedPost } from './components/main-featured-post';
import { Sidebar } from './components/sidebar';
import { getFeaturedPosts, getTopTags } from './selectors';
import { thunkFetchFeaturedPosts } from './thunks';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: spacing(3),
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
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
  const topTags = useSelector(getTopTags);

  useEffect(() => {
    fetchFeaturedPosts()
  }, [fetchFeaturedPosts]);

  return (
    <React.Fragment>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {topTags.map((tag) => (
          <Link
            className={classes.toolbarLink}
            color="inherit"
            noWrap={true}
            key={tag}
            variant="body2"
            component={RouterLink}
            to={`/search?tag=${tag}`}
          >
            {tag}
          </Link>
        ))}
      </Toolbar>
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
