import { ThunkAction } from "redux-thunk";
import request from "superagent";
import { DECREASE_FETCHING, INCREASE_FETCHING, SystemActionTypes } from "../../core/types";
import { updateFeaturedArticles, updateLatestArticles, updateMainFeaturedArticle } from "./actions";
import { HomeState } from "./reducer";
import { HomeActionTypes } from "./types";

export const thunkFetchMainFeaturedPost = (): ThunkAction<void, HomeState, null, SystemActionTypes | HomeActionTypes> => dispatch => {
  dispatch({ type: INCREASE_FETCHING });
  request.get('http://educationapp-api.herokuapp.com/api/articles/featured/main')
    .then(response => {
      dispatch(updateMainFeaturedArticle(response.body));
      dispatch({ type: DECREASE_FETCHING });
    })
    .catch(console.error);
}

export const thunkFetchFeaturedPosts = (): ThunkAction<void, HomeState, null, SystemActionTypes | HomeActionTypes> => dispatch => {
  dispatch({ type: INCREASE_FETCHING });
  request.get('http://educationapp-api.herokuapp.com/api/articles/featured/latest?limit=4')
    .then(response => {
      dispatch(updateFeaturedArticles(response.body));
      dispatch({ type: DECREASE_FETCHING });
    })
    .catch(console.error);
}

export const thunkFetchLatestFullPosts = (): ThunkAction<void, HomeState, null, SystemActionTypes | HomeActionTypes> => dispatch => {
  dispatch({ type: INCREASE_FETCHING });
  request.get('http://educationapp-api.herokuapp.com/api/articles/latest?limit=4')
    .then(response => {
      dispatch(updateLatestArticles(response.body));
      dispatch({ type: DECREASE_FETCHING });
    })
    .catch(console.error);
}
