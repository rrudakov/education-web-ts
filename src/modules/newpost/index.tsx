import { Button, Typography } from '@material-ui/core';
import { EditorState } from 'draft-js';
import React, { useCallback } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { useDispatch, useSelector } from 'react-redux';
import { updatePostBodyActionCreator } from './actions';
import { getPostBody } from './selectors';
import { NewPostForm } from './components/new-post-form';
import { thunkCreatePost } from './thunks';
import { useHistory } from 'react-router-dom';

export const NewPost: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const postBody = useSelector(getPostBody);
  const updatePostBody = useCallback(
    (s: EditorState) => dispatch(updatePostBodyActionCreator(s)),
    [dispatch]
  );
  const createPost = useCallback(() => dispatch(thunkCreatePost(history)), [dispatch, history]);

  return (
    <main>
      <Typography variant="h3" gutterBottom={true}>
        New post
      </Typography>
      <NewPostForm />
      <Editor editorState={postBody} onEditorStateChange={updatePostBody} />
      <Button variant="outlined" size="small" onClick={createPost}>Save</Button>
    </main>
  )
}
