import { splitIntoChunks } from '../../core/utils/helpers';
import {
  ADD_PICTURE,
  CLEAR_FORM,
  DELETE_DRESS,
  DELETE_PICTURE,
  DressesActionType,
  SET_UPLOAD_DIALOG_OPEN,
  UPDATE_CURRENT_CHUNK,
  UPDATE_CURRENT_PAGE,
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

export const ITEMS_ON_PAGE = 6;

export interface DressesState {
  dresses: Dress[];
  pagesCount: number;
  currentPage: number;
  chunks: Dress[][];
  currentChunk: Dress[];
  form: DressForm;
}

export const initialState: DressesState = {
  dresses: [],
  pagesCount: 1,
  currentPage: 1,
  chunks: [],
  currentChunk: [],
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
  let chunks = [];
  switch (action.type) {
    case UPDATE_DRESSES:
      chunks = splitIntoChunks(action.payload, ITEMS_ON_PAGE);
      return {
        ...state,
        dresses: action.payload,
        pagesCount: Math.ceil(action.payload.length / ITEMS_ON_PAGE),
        currentPage: 1,
        chunks: chunks,
        currentChunk: chunks[0] || [],
      };
    case DELETE_DRESS:
      const newDresses = state.dresses.filter((d) => d.id !== action.payload);
      chunks = splitIntoChunks(newDresses, ITEMS_ON_PAGE);
      return {
        ...state,
        dresses: newDresses,
        pagesCount: Math.ceil(newDresses.length / ITEMS_ON_PAGE),
        currentPage: 1,
        chunks: chunks,
        currentChunk: chunks[0] || [],
      };
    case UPDATE_CURRENT_CHUNK:
      return { ...state, currentChunk: action.payload };
    case UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
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
