import { ThunkAction } from "redux-thunk";
import { AppStoreState } from "../../core/store";
import { SystemActionTypes, INCREASE_FETCHING, DECREASE_FETCHING } from "../../core/types";
import { PostActionTypes } from "./types";
import request from "superagent";
import { BASE_URL } from "../../core/constants";
import { updatePost } from "./actions";

export const thunkFetchPostById = (articleId: string | undefined): ThunkAction<void, AppStoreState, null, SystemActionTypes | PostActionTypes> => dispatch => {
    dispatch({ type: INCREASE_FETCHING });
    if (articleId === undefined) {
        // TODO: show error message here
        dispatch(updatePost(undefined));
        dispatch({ type: DECREASE_FETCHING });
    } else {
        request.get(`${BASE_URL}/articles/${articleId}`)
            .then(response => {
                dispatch(updatePost(response.body));
                dispatch({ type: DECREASE_FETCHING });
            })
            .catch(err => {
                dispatch({ type: DECREASE_FETCHING });
                console.error(err);
            });
    }

}
