import { splitIntoChunks } from '../../core/utils/helpers';
import {
  CLEAR_FORM,
  DELETE_DOWNLOAD_MATERIAL,
  DownloadMaterialsActionType,
  UPDATE_CURRENT_CHUNK,
  UPDATE_CURRENT_PAGE,
  UPDATE_DESCRIPTION,
  UPDATE_DOWNLOAD_MATERIALS,
  UPDATE_IS_PREVIEW_DIALOG_OPEN,
  UPDATE_PREVIEW,
  UPDATE_PRICE,
  UPDATE_STORE_LINK,
  UPDATE_TITLE,
} from './types';

export interface DownloadMaterial {
  id: number;
  title: string;
  description: string;
  preview: string;
  store_link: string;
  price: string;
  created_on: string;
  updated_on: string;
}

export interface DownloadMaterialForm {
  title: string;
  description: string;
  preview: string;
  store_link: string;
  price: string;
}

const ITEMS_ON_PAGE = 6;

export interface DownloadMaterialsState {
  downloadMaterials: DownloadMaterial[];
  pagesCount: number;
  currentPage: number;
  chunks: DownloadMaterial[][];
  currentChunk: DownloadMaterial[];
  form: DownloadMaterialForm;
  isPreviewDialogOpen: boolean;
}

export const initialState: DownloadMaterialsState = {
  downloadMaterials: [],
  pagesCount: 1,
  currentPage: 1,
  chunks: [],
  currentChunk: [],
  form: {
    title: '',
    description: '',
    preview: '',
    store_link: '',
    price: '',
  },
  isPreviewDialogOpen: false,
};

export const downloadMaterlalsReducer = (
  state: DownloadMaterialsState = initialState,
  action: DownloadMaterialsActionType
): DownloadMaterialsState => {
  let chunks = [];
  switch (action.type) {
    case UPDATE_DOWNLOAD_MATERIALS:
      chunks = splitIntoChunks(action.payload, ITEMS_ON_PAGE);
      return {
        ...state,
        downloadMaterials: action.payload,
        pagesCount: Math.ceil(action.payload.length / ITEMS_ON_PAGE),
        currentPage: 1,
        chunks: chunks,
        currentChunk: chunks[0] || [],
      };
    case DELETE_DOWNLOAD_MATERIAL:
      const newMaterials = state.downloadMaterials.filter(
        (m) => m.id !== action.payload
      );
      chunks = splitIntoChunks(newMaterials, ITEMS_ON_PAGE);
      return {
        ...state,
        downloadMaterials: newMaterials,
        pagesCount: Math.ceil(newMaterials.length / ITEMS_ON_PAGE),
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
    case UPDATE_PREVIEW:
      return { ...state, form: { ...state.form, preview: action.payload } };
    case UPDATE_STORE_LINK:
      return { ...state, form: { ...state.form, store_link: action.payload } };
    case UPDATE_PRICE:
      return { ...state, form: { ...state.form, price: action.payload } };
    case UPDATE_IS_PREVIEW_DIALOG_OPEN:
      return { ...state, isPreviewDialogOpen: action.payload };
    case CLEAR_FORM:
      return { ...state, form: initialState.form };
    default:
      return state;
  }
};
