import { SystemActionTypes, INCREASE_FETCHING, DECREASE_FETCHING } from "./types";

export interface SystemState {
  fetching: number;
  loggedIn: boolean;
}

const initialState: SystemState = {
  fetching: 0,
  loggedIn: false,
}

export const systemReducer = (state: SystemState = initialState, action: SystemActionTypes): SystemState => {
  switch (action.type) {
    case INCREASE_FETCHING:
      return { ...state, fetching: state.fetching + 1 };
    case DECREASE_FETCHING:
      return { ...state, fetching: state.fetching - 1 };
    default:
      return state;
  }
}
