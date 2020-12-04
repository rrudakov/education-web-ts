import {
  ADD_PICTURE,
  CLEAR_FORM,
  DELETE_DRESS,
  DELETE_PICTURE,
  DressesActionType,
  SET_UPLOAD_DIALOG_OPEN,
  UPDATE_DESCRIPTION,
  UPDATE_DRESSES,
  UPDATE_PICTURES,
  UPDATE_PRICE,
  UPDATE_SIZE,
  UPDATE_TITLE,
} from './types';

export interface Dress {
  id: number;
  title: string;
  description: string;
  size: number;
  pictures: string[];
  price: string;
  created_on: string;
  updated_on: string;
}

export interface DressForm {
  title: string;
  description: string;
  size: number;
  pictures: string[];
  price: string;
  uploadDialogOpen: boolean;
}

export interface DressesState {
  dresses: Dress[];
  form: DressForm;
}

export const initialState: DressesState = {
  dresses: [],
  form: {
    title: '',
    description: '',
    size: 0,
    pictures: [],
    price: '',
    uploadDialogOpen: false,
  },
};

export const dressesReducer = (
  state: DressesState = initialState,
  action: DressesActionType
): DressesState => {
  switch (action.type) {
    case UPDATE_DRESSES:
      return { ...state, dresses: action.payload };
    case DELETE_DRESS:
      return {
        ...state,
        dresses: state.dresses.filter((d) => d.id !== action.payload),
      };
    case UPDATE_TITLE:
      return { ...state, form: { ...state.form, title: action.payload } };
    case UPDATE_DESCRIPTION:
      return { ...state, form: { ...state.form, description: action.payload } };
    case UPDATE_SIZE:
      return { ...state, form: { ...state.form, size: action.payload } };
    case ADD_PICTURE:
      return {
        ...state,
        form: {
          ...state.form,
          pictures: [...state.form.pictures, action.payload],
        },
      };
    case DELETE_PICTURE:
      return {
        ...state,
        form: {
          ...state.form,
          pictures: state.form.pictures.filter((p) => p !== action.payload),
        },
      };
    case UPDATE_PICTURES:
      return { ...state, form: { ...state.form, pictures: action.payload } };
    case UPDATE_PRICE:
      return { ...state, form: { ...state.form, price: action.payload } };
    case CLEAR_FORM:
      return {
        ...state,
        form: {
          title: '',
          description: '',
          size: 0,
          pictures: [],
          price: '',
          uploadDialogOpen: false,
        },
      };
    case SET_UPLOAD_DIALOG_OPEN:
      return {
        ...state,
        form: { ...state.form, uploadDialogOpen: action.payload },
      };
    default:
      return state;
  }
};
