import { convertFromRaw, EditorState } from 'draft-js';

export const toEditorState = (rawBody: string): EditorState =>
    EditorState.createWithContent(convertFromRaw(JSON.parse(rawBody)));
