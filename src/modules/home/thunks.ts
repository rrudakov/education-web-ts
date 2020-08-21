import { ThunkAction } from "redux-thunk";
import request from "superagent";
import { AppStoreState } from "../../core/store";
import { DECREASE_FETCHING, INCREASE_FETCHING, SystemActionTypes } from "../../core/types";
import { updateFeaturedArticles, updateLatestArticles, updateMainFeaturedArticle } from "./actions";
import { HomeActionTypes } from "./types";
import { BASE_URL } from "../../core/constants";

export const thunkFetchMainFeaturedPost = (): ThunkAction<void, AppStoreState, null, SystemActionTypes | HomeActionTypes> => dispatch => {
  dispatch({ type: INCREASE_FETCHING });
  request.get(`${BASE_URL}/articles/featured/main`)
    .then(response => {
      dispatch(updateMainFeaturedArticle(response.body));
      dispatch({ type: DECREASE_FETCHING });
    })
    .catch(err => {
      dispatch({ type: DECREASE_FETCHING });
      console.error(err);
    });
}

export const thunkFetchFeaturedPosts = (): ThunkAction<void, AppStoreState, null, SystemActionTypes | HomeActionTypes> => dispatch => {
  dispatch({ type: INCREASE_FETCHING });
  request.get(`${BASE_URL}/articles/featured/latest`)
    .query({ limit: 4 })
    .then(response => {
      dispatch(updateFeaturedArticles(response.body));
      dispatch({ type: DECREASE_FETCHING });
    })
    .catch(err => {
      dispatch({ type: DECREASE_FETCHING });
      console.error(err);
    });
}

export const thunkFetchLatestFullPosts = (): ThunkAction<void, AppStoreState, null, SystemActionTypes | HomeActionTypes> => dispatch => {
  dispatch({ type: INCREASE_FETCHING });
  request.get(`${BASE_URL}/articles/latest`)
    .query({ limit: 4 })
    .then(response => {
      dispatch(updateLatestArticles(response.body));
      dispatch({ type: DECREASE_FETCHING });
    })
    .catch(err => {
      dispatch({ type: DECREASE_FETCHING });
      console.error(err);
    });
}
