import { FullPost } from "../home/reducer";

export const UPDATE_POST = "UPDATE_POST/POST";

export interface UpdatePostAction {
    type: typeof UPDATE_POST;
    payload?: FullPost;
}

export type PostActionTypes = UpdatePostAction;
