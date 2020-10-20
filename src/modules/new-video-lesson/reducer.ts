import {
  ADD_SCREENSHOT,
  NewVideoLessonActionType,
  UPDATE_DESCRIPTION,
  UPDATE_SUBTITLE,
  UPDATE_TITLE,
  DELETE_SCREENSHOT,
  UPDATE_PRICE,
  SET_UPLOAD_DIALOG_OPEN,
} from './types';

export interface NewVideoLessonState {
  title: string;
  subtitle: string;
  description: string;
  screenshots: string[];
  price: string;
  uploadDialogOpen: boolean;
}

export const initialState: NewVideoLessonState = {
  title: '',
  subtitle: '',
  description: '',
  screenshots: [],
  price: '',
  uploadDialogOpen: false,
};

export const newVideoLessonReducer = (
  state: NewVideoLessonState = initialState,
  action: NewVideoLessonActionType
): NewVideoLessonState => {
  switch (action.type) {
    case UPDATE_TITLE:
      return { ...state, title: action.payload };
    case UPDATE_SUBTITLE:
      return { ...state, subtitle: action.payload };
    case UPDATE_DESCRIPTION:
      return { ...state, description: action.payload };
    case ADD_SCREENSHOT:
      return { ...state, screenshots: [...state.screenshots, action.payload] };
    case DELETE_SCREENSHOT:
      return {
        ...state,
        screenshots: state.screenshots.filter((s) => s !== action.payload),
      };
    case UPDATE_PRICE:
      return { ...state, price: action.payload };
    case SET_UPLOAD_DIALOG_OPEN:
      return { ...state, uploadDialogOpen: action.payload };
    default:
      return state;
  }
};
