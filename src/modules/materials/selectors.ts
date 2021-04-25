import { Selector } from 'react-redux';
import { AppStoreState } from '../../core/store';
import { DownloadMaterial } from './reducer';

export const getCurrentChunk: Selector<AppStoreState, DownloadMaterial[]> = ({
  downloadMaterials,
}) => downloadMaterials.currentChunk;

export const getPagesCount: Selector<AppStoreState, number> = ({
  downloadMaterials,
}) => downloadMaterials.pagesCount;

export const getCurrentPage: Selector<AppStoreState, number> = ({
  downloadMaterials,
}) => downloadMaterials.currentPage;

export const getTitle: Selector<AppStoreState, string> = ({
  downloadMaterials,
}) => downloadMaterials.form.title;

export const getDescription: Selector<AppStoreState, string> = ({
  downloadMaterials,
}) => downloadMaterials.form.description;

export const getPreview: Selector<AppStoreState, string> = ({
  downloadMaterials,
}) => downloadMaterials.form.preview;

export const getStoreLink: Selector<AppStoreState, string> = ({
  downloadMaterials,
}) => downloadMaterials.form.store_link;

export const getPrice: Selector<AppStoreState, string> = ({
  downloadMaterials,
}) => downloadMaterials.form.price;

export const getIsPreviewDialogOpen: Selector<AppStoreState, boolean> = ({
  downloadMaterials,
}) => downloadMaterials.isPreviewDialogOpen;
