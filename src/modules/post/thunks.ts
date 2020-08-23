import { ThunkAction } from "redux-thunk";
import { AppStoreState } from "../../core/store";
import { SystemActionTypes, INCREASE_FETCHING, DECREASE_FETCHING } from "../../core/types";
import { PostActionTypes } from "./types";
import request from "superagent";
import { BASE_URL } from "../../core/constants";
import { updatePost } from "./actions";
import { updateErrorMessage } from "../../core/actions";
import { ErrorResponse } from "../../core/reducer";

export const thunkFetchPostById = (articleId: string | undefined): ThunkAction<void, AppStoreState, null, SystemActionTypes | PostActionTypes> => dispatch => {
    dispatch({ type: INCREASE_FETCHING });
    if (articleId === undefined) {
        dispatch(updatePost(undefined));
        dispatch({ type: DECREASE_FETCHING });
        dispatch(updateErrorMessage('Missing post ID'));
    } else {
        request.get(`${BASE_URL}/articles/${articleId}`)
            .then(response => {
                dispatch(updatePost(response.body));
                dispatch({ type: DECREASE_FETCHING });
            })
            .catch(err => {
                dispatch({ type: DECREASE_FETCHING });
                dispatch(updateErrorMessage((err as ErrorResponse).message));
            });
    }

}
