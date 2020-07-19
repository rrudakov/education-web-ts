import React, { useCallback, useEffect } from 'react';
import { makeStyles, Theme, createStyles, Paper, Grid, Typography, Link } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getMainFeaturedPost } from '../selectors';
import { thunkFetchMainFeaturedPost } from '../thunks';

const useStyles = makeStyles(({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: palette.grey[800],
      color: palette.common.white,
      marginBottom: spacing(4),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: spacing(3),
      [breakpoints.up('md')]: {
        padding: spacing(6),
        paddingRight: 0,
      },
    },
  }))

export const MainFeaturedPost: React.FC = () => {
  const classes = useStyles();
  const mainFeaturedPost = useSelector(getMainFeaturedPost);
  const dispatch = useDispatch();
  const fetchMainFeatured = useCallback(() => dispatch(thunkFetchMainFeaturedPost()), [dispatch]);

  useEffect(() => {
    fetchMainFeatured()
  }, [fetchMainFeatured]);

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${mainFeaturedPost.featured_image})` }}>
      {<img style={{ display: 'none' }} src={mainFeaturedPost.featured_image} alt={mainFeaturedPost.title} />}
      <div className={classes.overlay} />
      <Grid container={true}>
        <Grid item={true} md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom={true}>
              {mainFeaturedPost.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph={true}>
              {mainFeaturedPost.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              Continue reading...
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
