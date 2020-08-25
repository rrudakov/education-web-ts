import { createStyles, Divider, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDispatch, useSelector } from 'react-redux';
import { PostBody } from '../../../core/components/post';
import { getFullPosts } from '../selectors';
import { thunkFetchLatestFullPosts } from '../thunks';
import { formatRelativeDateTime, toDateTime } from '../../../core/utils/datetime';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    post: {
      padding: spacing(3, 0),
    }
  }));

export interface MainProps {
  title: string;
}

export const Main: React.FC<MainProps> = ({ title }: MainProps) => {
  const classes = useStyles();
  const latestPosts = useSelector(getFullPosts);
  const dispatch = useDispatch();
  const fetchLatestPosts = useCallback(() => dispatch(thunkFetchLatestFullPosts()), [dispatch]);

  useEffect(() => {
    fetchLatestPosts();
  }, [fetchLatestPosts]);

  return (
    <Grid item={true} xs={12} md={8}>
      <Typography variant="h6" gutterBottom={true}>
        {title}
      </Typography>
      <Divider />
      {latestPosts.map((post) => (
        <div key={post.id} className={classes.post}>
          <Typography variant="h5">{post.title}</Typography>
          <Typography variant="caption" color="textSecondary">
            {formatRelativeDateTime(toDateTime(post.updated_on))}
          </Typography>
          <PostBody body={post.body} />
        </div>
      ))}
    </Grid >
  )
}
