import { CLOSE_AUTH, DECREASE_FETCHING, INCREASE_FETCHING, OPEN_AUTH, SystemActionTypes, UPDATE_LOGGED_IN, UPDATE_SIGN_IN_PASSWORD, UPDATE_SIGN_IN_USERNAME } from "./types";

export interface SignInState {
  username: string;
  password: string;
}

export interface SystemState {
  fetching: number;
  loggedIn: boolean;
  authOpen: boolean;
  signInState: SignInState;
}

const initialState: SystemState = {
  fetching: 0,
  loggedIn: false,
  authOpen: false,
  signInState: {
    username: '',
    password: '',
  }
}

export const systemReducer = (state: SystemState = initialState, action: SystemActionTypes): SystemState => {
  switch (action.type) {
    case INCREASE_FETCHING:
      return { ...state, fetching: state.fetching + 1 };
    case DECREASE_FETCHING:
      return { ...state, fetching: state.fetching - 1 };
    case OPEN_AUTH:
      return { ...state, authOpen: true };
    case CLOSE_AUTH:
      return { ...state, authOpen: false };
    case UPDATE_SIGN_IN_USERNAME:
      return {
        ...state,
        signInState: {
          ...state.signInState,
          username: action.payload
        }
      };
    case UPDATE_SIGN_IN_PASSWORD:
      return {
        ...state,
        signInState: {
          ...state.signInState,
          password: action.payload,
        }
      };
    case UPDATE_LOGGED_IN:
      return { ...state, loggedIn: action.payload };
    default:
      return state;
  }
}
