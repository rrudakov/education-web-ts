import {
  CLEAR_FORM,
  DELETE_GYMNASTIC,
  GymnasticsActionType,
  SET_UPLOAD_DIALOG_OPEN,
  UPDATE_DESCRIPTION,
  UPDATE_GYMNSATICS,
  UPDATE_PICTURE,
  UPDATE_SUBTYPE_ID,
  UPDATE_TITLE,
} from './types';

export interface Gymnastic {
  id: number;
  subtype_id: number;
  title: string;
  description: string;
  picture?: string;
  created_on: string;
  updated_on: string;
}

export interface GymnasticForm {
  subtype_id: number;
  title: string;
  description: string;
  picture?: string;
  uploadDialogOpen: boolean;
}

export interface GymnasticsState {
  gymnastics: Gymnastic[];
  form: GymnasticForm;
}

export const initialState: GymnasticsState = {
  gymnastics: [],
  form: {
    subtype_id: 1,
    title: '',
    description: '',
    picture: undefined,
    uploadDialogOpen: false,
  },
};

export const gymnasticsReducer = (
  state: GymnasticsState = initialState,
  action: GymnasticsActionType
): GymnasticsState => {
  switch (action.type) {
    case UPDATE_GYMNSATICS:
      return { ...state, gymnastics: action.payload };
    case DELETE_GYMNASTIC:
      return {
        ...state,
        gymnastics: state.gymnastics.filter((g) => g.id !== action.payload),
      };
    case UPDATE_SUBTYPE_ID:
      return { ...state, form: { ...state.form, subtype_id: action.payload } };
    case UPDATE_TITLE:
      return { ...state, form: { ...state.form, title: action.payload } };
    case UPDATE_DESCRIPTION:
      return { ...state, form: { ...state.form, description: action.payload } };
    case UPDATE_PICTURE:
      return { ...state, form: { ...state.form, picture: action.payload } };
    case SET_UPLOAD_DIALOG_OPEN:
      return {
        ...state,
        form: { ...state.form, uploadDialogOpen: action.payload },
      };
    case CLEAR_FORM:
      return {
        ...state,
        form: {
          subtype_id: 1,
          title: '',
          description: '',
          picture: undefined,
          uploadDialogOpen: false,
        },
      };
    default:
      return state;
  }
};
