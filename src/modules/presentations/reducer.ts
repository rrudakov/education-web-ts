import { splitIntoChunks } from '../../core/utils/helpers';
import {
  CLEAR_FORM,
  DELETE_PRESENTATION,
  PresentationsActionType,
  UPDATE_ATTACHMENT,
  UPDATE_CURRENT_CHUNK,
  UPDATE_CURRENT_PAGE,
  UPDATE_CURRENT_PRESENTATION,
  UPDATE_DESCRIPTION,
  UPDATE_IS_MANUAL_DIALOG_OPEN,
  UPDATE_IS_PREVIEW_DIALOG_OPEN,
  UPDATE_IS_PUBLIC,
  UPDATE_PRESENTATIONS,
  UPDATE_PREVIEW,
  UPDATE_TITLE,
  UPDATE_URL,
} from './types';

export interface Presentation {
  id: number;
  title: string;
  url?: string;
  description: string;
  is_public: boolean;
  attachment?: string;
  preview?: string;
  created_on: string;
  updated_on: string;
}

export interface PresentationForm {
  title: string;
  url: string;
  description: string;
  is_public: boolean;
  attachment?: string;
  preview?: string;
}

export const ITEMS_ON_PAGE = 6;

export interface PresentationsState {
  presentations: Presentation[];
  pagesCount: number;
  currentPage: number;
  chunks: Presentation[][];
  currentChunk: Presentation[];
  form: PresentationForm;
  currentPresentation?: Presentation;
  isPreviewDialogOpen: boolean;
  isManualDialogOpen: boolean;
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
    is_public: true,
  },
  isPreviewDialogOpen: false,
  isManualDialogOpen: false,
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
          is_public: true,
        },
      };
    case UPDATE_CURRENT_PRESENTATION:
      return { ...state, currentPresentation: action.payload };
    case UPDATE_TITLE:
      return { ...state, form: { ...state.form, title: action.payload } };
    case UPDATE_URL:
      return { ...state, form: { ...state.form, url: action.payload } };
    case UPDATE_DESCRIPTION:
      return { ...state, form: { ...state.form, description: action.payload } };
    case UPDATE_IS_PUBLIC:
      return { ...state, form: { ...state.form, is_public: action.payload } };
    case UPDATE_ATTACHMENT:
      return { ...state, form: { ...state.form, attachment: action.payload } };
    case UPDATE_PREVIEW:
      return { ...state, form: { ...state.form, preview: action.payload } };
    case UPDATE_IS_PREVIEW_DIALOG_OPEN:
      return { ...state, isPreviewDialogOpen: action.payload };
    case UPDATE_IS_MANUAL_DIALOG_OPEN:
      return { ...state, isManualDialogOpen: action.payload };
    default:
      return state;
  }
};
