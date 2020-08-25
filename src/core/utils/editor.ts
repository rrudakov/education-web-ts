import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';

export const toEditorState = (rawBody: string): EditorState =>
    EditorState.createWithContent(convertFromRaw(JSON.parse(rawBody)));

export const toRawEditorState = (body: EditorState): string =>
    JSON.stringify(convertToRaw(body.getCurrentContent()));
