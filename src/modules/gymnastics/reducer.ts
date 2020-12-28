import { splitIntoChunks } from '../../core/utils/helpers';
import {
  CLEAR_FORM,
  DELETE_GYMNASTIC,
  GymnasticsActionType,
  SET_UPLOAD_DIALOG_OPEN,
  UPDATE_CURRENT_CHUNK,
  UPDATE_CURRENT_PAGE,
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

export const ITEMS_ON_PAGE = 6;

export interface GymnasticsState {
  gymnastics: Gymnastic[];
  pagesCount: number;
  currentPage: number;
  chunks: Gymnastic[][];
  currentChunk: Gymnastic[];
  form: GymnasticForm;
}

export const initialState: GymnasticsState = {
  gymnastics: [],
  pagesCount: 1,
  currentPage: 1,
  chunks: [],
  currentChunk: [],
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
  let chunks = [];
  switch (action.type) {
    case UPDATE_GYMNSATICS:
      chunks = splitIntoChunks(action.payload, ITEMS_ON_PAGE);
      return {
        ...state,
        gymnastics: action.payload,
        pagesCount: Math.ceil(action.payload.length / ITEMS_ON_PAGE),
        currentPage: 1,
        chunks: chunks,
        currentChunk: chunks[0] !== undefined ? chunks[0] : [],
      };
    case DELETE_GYMNASTIC:
      const newGymnastics = state.gymnastics.filter(
        (g) => g.id !== action.payload
      );
      chunks = splitIntoChunks(newGymnastics, ITEMS_ON_PAGE);
      return {
        ...state,
        gymnastics: newGymnastics,
        pagesCount: Math.ceil(newGymnastics.length / ITEMS_ON_PAGE),
        currentPage: 1,
        chunks: chunks,
        currentChunk: chunks[0] !== undefined ? chunks[0] : [],
      };
    case UPDATE_CURRENT_CHUNK:
      return { ...state, currentChunk: action.payload };
    case UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
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
