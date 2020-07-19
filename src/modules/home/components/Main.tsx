import { createStyles, Grid, makeStyles, Theme, Typography, Divider } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toEditorState } from '../../../core/utils/editor';
import { getFullPosts } from '../selectors';
import { thunkFetchLatestFullPosts } from '../thunks';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';

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
        <Editor
          key={post.id}
          editorState={toEditorState(post.body)}
          wrapperClassName={classes.post}
          toolbarHidden={true}
          readOnly={true}
        />
      ))}
    </Grid >
  )
}
