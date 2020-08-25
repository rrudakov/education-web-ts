import { Typography } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PostBody } from '../../core/components/post';
import { formatRelativeDateTime, toDateTime } from '../../core/utils/datetime';
import { updatePost } from './actions';
import { getPost } from './selectors';
import { thunkFetchPostById } from './thunks';

interface PathParams {
  id?: string;
}

export const SinglePost: React.FC = () => {
  const { id }: PathParams = useParams();
  const dispatch = useDispatch();
  const fetchPostById = useCallback((postId) => dispatch(thunkFetchPostById(postId)), [dispatch]);
  const post = useSelector(getPost);

  useEffect(() => {
    fetchPostById(id);
    return () => {
      dispatch(updatePost(undefined));
    }
  }, [id, fetchPostById, dispatch]);

  if (post === undefined) {
    return (
      <div />
    );
  } else {
    const publishedDate = formatRelativeDateTime(toDateTime(post.created_on));
    const published = `Опубликовано ${publishedDate}`;
    return (
      <React.Fragment>
        <Typography variant="h2">{post.title}</Typography>
        <Typography variant="subtitle1" gutterBottom={true} color="textSecondary">{published}</Typography>
        <PostBody body={post.body} />
      </React.Fragment>
    );
  }

}
