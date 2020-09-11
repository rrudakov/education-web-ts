import {
  CLOSE_AUTH,
  DECREASE_FETCHING,
  INCREASE_FETCHING,
  LOGOUT,
  OPEN_AUTH,
  SUCCESSFUL_LOGIN,
  SystemActionTypes,
  UPDATE_ERROR_MESSAGE,
  UPDATE_SIGN_IN_PASSWORD,
  UPDATE_SIGN_IN_USERNAME,
  UPDATE_SUCCESS_MESSAGE,
  TOGGLE_MENU_DRAWER
} from "./types";

export interface ErrorResponse {
  message: string;
}

export interface SignInState {
  username: string;
  password: string;
}

export interface UserState {
  id: number;
  username: string;
  email: string;
  roles: string[];
  created_on: string;
  updated_on: string;
}

export interface MenuItem {
  name: string;
  url: string;
}

export interface SystemState {
  fetching: number;
  user?: UserState;
  authOpen: boolean;
  signInState: SignInState;
  errorMessage?: string;
  successMessage?: string;
  menuItems: MenuItem[];
  menuDrawerOpen: boolean;
}

const initialState: SystemState = {
  fetching: 0,
  authOpen: false,
  signInState: {
    username: '',
    password: '',
  },
  menuItems: [
    { name: 'Видео-уроки', url: '#' },
    { name: 'Онлайн и оффлайн уроки', url: '#' },
    { name: 'Играем с мамой', url: '#' },
    { name: 'Детские дни рождения', url: '#' },
    { name: 'Сказочные встречи', url: '#' },
    { name: 'Прокат детских платьев', url: '#' },
    { name: 'Контакты', url: '#' },
  ],
  menuDrawerOpen: false,
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
    case SUCCESSFUL_LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: undefined };
    case UPDATE_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    case UPDATE_SUCCESS_MESSAGE:
      return { ...state, successMessage: action.payload };
    case TOGGLE_MENU_DRAWER:
      return { ...state, menuDrawerOpen: !state.menuDrawerOpen };
    default:
      return state;
  }
}
