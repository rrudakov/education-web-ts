import { splitIntoChunks } from '../../core/utils/helpers';
import {
  CLEAR_FORM,
  DELETE_PRESENTATION,
  PresentationsActionType,
  UPDATE_CURRENT_CHUNK,
  UPDATE_CURRENT_PAGE,
  UPDATE_DESCRIPTION,
  UPDATE_PRESENTATIONS,
  UPDATE_TITLE,
  UPDATE_URL,
} from './types';

export interface Presentation {
  id: number;
  title: string;
  url: string;
  description: string;
  created_on: string;
  updated_on: string;
}

export interface PresentationForm {
  title: string;
  url: string;
  description: string;
}

export const ITEMS_ON_PAGE = 6;

export interface PresentationsState {
  presentations: Presentation[];
  pagesCount: number;
  currentPage: number;
  chunks: Presentation[][];
  currentChunk: Presentation[];
  form: PresentationForm;
}

export const initialState: PresentationsState = {
  presentations: [],
  pagesCount: 1,
  currentPage: 1,
  chunks: [],
  currentChunk: [],
  form: {
    title: '',
    url: '',
    description: '',
  },
};

export const presentationsReducer = (
  state: PresentationsState = initialState,
  action: PresentationsActionType
): PresentationsState => {
  let chunks = [];
  switch (action.type) {
    case UPDATE_PRESENTATIONS:
      chunks = splitIntoChunks(action.payload, ITEMS_ON_PAGE);
      return {
        ...state,
        presentations: action.payload,
        pagesCount: Math.ceil(action.payload.length / ITEMS_ON_PAGE),
        currentPage: 1,
        chunks: chunks,
        currentChunk: chunks[0] || [],
      };
    case DELETE_PRESENTATION:
      const newPresentations = state.presentations.filter(
        (p) => p.id !== action.payload
      );
      chunks = splitIntoChunks(newPresentations, ITEMS_ON_PAGE);
      return {
        ...state,
        presentations: newPresentations,
        pagesCount: Math.ceil(newPresentations.length / ITEMS_ON_PAGE),
        currentPage: 1,
        chunks: chunks,
        currentChunk: chunks[0] || [],
      };
    case UPDATE_CURRENT_CHUNK:
      return { ...state, currentChunk: action.payload };
    case UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case CLEAR_FORM:
      return {
        ...state,
        form: {
          title: '',
          url: '',
          description: '',
        },
      };
    case UPDATE_TITLE:
      return { ...state, form: { ...state.form, title: action.payload } };
    case UPDATE_URL:
      return { ...state, form: { ...state.form, url: action.payload } };
    case UPDATE_DESCRIPTION:
      return { ...state, form: { ...state.form, description: action.payload } };
    default:
      return state;
  }
};
