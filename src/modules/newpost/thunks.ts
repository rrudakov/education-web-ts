import { History } from 'history';
import { ThunkAction } from "redux-thunk";
import request, { ResponseError } from "superagent";
import { updateErrorMessage, updateSuccessMessage } from "../../core/actions";
import { BASE_URL } from "../../core/constants";
import { ErrorResponse } from "../../core/reducer";
import { AppStoreState } from "../../core/store";
import { DECREASE_FETCHING, INCREASE_FETCHING, LOGOUT, OPEN_AUTH, SystemActionTypes } from "../../core/types";
import { toRawEditorState } from "../../core/utils/editor";
import { getToken } from "../../core/utils/storage";

interface CreatePostResponse {
    id: number;
}

export const thunkCreatePost = (history: History<History.UnknownFacade>): ThunkAction<void, AppStoreState, null, SystemActionTypes> => (dispatch, getState) => {
    const { newPost } = getState();
    const authToken = getToken();

    if (authToken === null) {
        dispatch(updateErrorMessage('Unauthorized!'))
        dispatch({ type: LOGOUT });
    } else {
        dispatch({ type: INCREASE_FETCHING });
        request.post(`${BASE_URL}/articles`)
            .set('Authorization', `Token ${authToken}`)
            .send({
                title: newPost.title,
                body: toRawEditorState(newPost.postBody),
                featured_image: newPost.featuredImage,
                is_main_featured: newPost.isMainFeatured,
                description: newPost.description,
            })
            .then(response => {
                dispatch({ type: DECREASE_FETCHING });
                const postId = (response.body as CreatePostResponse).id;
                history.push(`/posts/${postId}`);
                dispatch(updateSuccessMessage('Post created'));
            })
            .catch((error: ResponseError) => {
                dispatch({ type: DECREASE_FETCHING });
                if (error.status === 401) {
                    dispatch({ type: LOGOUT });
                    dispatch({ type: OPEN_AUTH });
                }
                if (error.response !== undefined) {
                    dispatch(updateErrorMessage((error.response.body as ErrorResponse).message));
                }
            });
    }
}
