import { ThunkAction } from "redux-thunk";
import { HomeState } from "./reducer";
import { HomeActionTypes } from "./types";
import request from "superagent";
import { updateMainFeaturedArticle } from "./actions";
import { INCREASE_FETCHING, SystemActionTypes, DECREASE_FETCHING } from "../../core/types";

export const thunkFetchMainFeaturedPost = (): ThunkAction<void, HomeState, null, SystemActionTypes | HomeActionTypes> => dispatch => {
  dispatch({ type: INCREASE_FETCHING });
  request.get('http://educationapp-api.herokuapp.com/api/articles/featured/main')
    .then(response => {
      dispatch(updateMainFeaturedArticle(response.body));
      dispatch({ type: DECREASE_FETCHING });
    })
    .catch(console.error);
}
