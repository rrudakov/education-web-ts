import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { thunkFetchPostById } from './thunks';
import { getPost } from './selectors';
import { PostBody } from '../../core/components/Post';

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
  }, [id, fetchPostById]);

  if (post === undefined) {
    return (
      <div />
    );
  } else {
    return (
      <React.Fragment>
        <Typography variant="h2">{post.title}</Typography>
        <PostBody body={post.body} />
      </React.Fragment>
    );
  }

}
