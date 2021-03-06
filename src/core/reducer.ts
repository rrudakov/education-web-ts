import { GYMNASTICS_SUBTYPES, PRESENTATIONS_SUBTYPES } from './constants';
import {
  CLOSE_AUTH,
  DECREASE_FETCHING,
  INCREASE_FETCHING,
  LOGOUT,
  OPEN_AUTH,
  START_TRANSITIONING,
  STOP_TRANSITIONING,
  SUCCESSFUL_LOGIN,
  SystemActionTypes,
  TOGGLE_MENU_DRAWER,
  UPDATE_ERROR_MESSAGE,
  UPDATE_SIGN_IN_PASSWORD,
  UPDATE_SIGN_IN_USERNAME,
  UPDATE_SUCCESS_MESSAGE,
} from './types';

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

export interface SiteMenuItem {
  name: string;
  url?: string;
  subitems?: SiteMenuItem[];
}

export interface SystemState {
  fetching: number;
  transitioning: boolean;
  user?: UserState;
  authOpen: boolean;
  signInState: SignInState;
  errorMessage?: string;
  successMessage?: string;
  menuItems: SiteMenuItem[];
  menuDrawerOpen: boolean;
}

const initialState: SystemState = {
  fetching: 0,
  transitioning: false,
  authOpen: false,
  signInState: {
    username: '',
    password: '',
  },
  menuItems: [
    {
      name: 'Уроки',
      subitems: [
        { name: 'Видео-уроки', url: '/video-lessons' },
        { name: 'Онлайн и оффлайн уроки', url: '/online-offline-lessons' },
        { name: 'Бонус-видео', url: '/bonus-video' },
      ],
    },
    {
      name: 'Играем с мамой',
      subitems: GYMNASTICS_SUBTYPES.map((g) => ({
        name: g.name,
        url: g.url,
      })).concat(
        PRESENTATIONS_SUBTYPES.map((p) => ({ name: p.name, url: p.url }))
      ),
    },
    {
      name: 'Материалы для скачивания',
      url: '/materials',
    },
    // {
    //   name: 'Мероприятия',
    //   subitems: [
    //     { name: 'Дни рождения', url: '/birthdays' },
    //     { name: 'Сказочные встречи', url: '/events' },
    //   ],
    // },
    // { name: 'Прокат детских платьев', url: '/dresses' },
    { name: 'Контакты', url: '/contacts' },
  ],
  menuDrawerOpen: false,
};

export const systemReducer = (
  state: SystemState = initialState,
  action: SystemActionTypes
): SystemState => {
  switch (action.type) {
    case INCREASE_FETCHING:
      return { ...state, fetching: state.fetching + 1 };
    case DECREASE_FETCHING:
      return { ...state, fetching: state.fetching - 1 };
    case START_TRANSITIONING:
      return { ...state, transitioning: true };
    case STOP_TRANSITIONING:
      return { ...state, transitioning: false };
    case OPEN_AUTH:
      return { ...state, authOpen: true };
    case CLOSE_AUTH:
      return { ...state, authOpen: false };
    case UPDATE_SIGN_IN_USERNAME:
      return {
        ...state,
        signInState: {
          ...state.signInState,
          username: action.payload,
        },
      };
    case UPDATE_SIGN_IN_PASSWORD:
      return {
        ...state,
        signInState: {
          ...state.signInState,
          password: action.payload,
        },
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
};
