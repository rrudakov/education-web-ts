import { ThunkAction } from "redux-thunk";
import request from "superagent";
import { AppStoreState } from "./store";
import { DECREASE_FETCHING, INCREASE_FETCHING, SystemActionTypes, UPDATE_LOGGED_IN, CLOSE_AUTH } from "./types";

export const thunkLogin = (): ThunkAction<void, AppStoreState, null, SystemActionTypes> => (dispatch, getState) => {
    const { system } = getState();

    dispatch({ type: INCREASE_FETCHING });
    request.post('http://educationapp-api.herokuapp.com/api/login')
        .send({
            username: system.signInState.username,
            password: system.signInState.password,
        })
        .then(response => {
            dispatch({ type: UPDATE_LOGGED_IN, payload: true });
            dispatch({ type: DECREASE_FETCHING });
            dispatch({ type: CLOSE_AUTH });
        })
        .catch(error => {
            dispatch({ type: DECREASE_FETCHING });
            console.error(error);
        });
}
