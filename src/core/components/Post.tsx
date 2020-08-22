import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { toEditorState } from '../utils/editor';

interface PostProps {
  body: string;
}

export const PostBody: React.FC<PostProps> = (props: PostProps) => {
  return (
    <Editor toolbarHidden={true} readOnly={true} editorState={toEditorState(props.body)} />
  )
}
