import React from 'react';
import { Editor, EditorState } from 'react-draft-wysiwyg';
import Typography from '@material-ui/core/Typography';

export interface PostProps {
  editorState: EditorState;
}

export const Post: React.FC<PostProps> = (props: PostProps) => {
  return (
    <div>
      <Typography variant="h1" />
      <Editor toolbarHidden={true} readOnly={true} editorState={props.editorState} />
    </div>
  )
}
