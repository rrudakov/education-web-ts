import { ThunkAction } from "redux-thunk";
import request from "superagent";
import { AppStoreState } from "../../core/store";
import { sendChatMessage } from "./actions";
import { ChatActionTypes } from "./constants/reducer-constants";

export const thunkGetArticles = (): ThunkAction<void, AppStoreState, null, ChatActionTypes> => dispatch => {
    request.get('http://educationapp-api.herokuapp.com/api/articles')
        .then(response => {
            dispatch(sendChatMessage({
                user: "Article",
                message: response.text,
                timestamp: new Date().getTime()
            }))
        })
        .catch(console.error);
}
