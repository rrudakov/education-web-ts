import { Selector } from 'react-redux';
import { AppStoreState } from '../../core/store';
import { Gymnastic } from './reducer';

export const getGymnastics: Selector<AppStoreState, Gymnastic[]> = ({
  gymnastics,
}) => gymnastics.gymnastics;

export const getCurrentChunk: Selector<AppStoreState, Gymnastic[]> = ({
  gymnastics,
}) => gymnastics.currentChunk;

export const getPagesCount: Selector<AppStoreState, number> = ({
  gymnastics,
}) => gymnastics.pagesCount;

export const getCurrentPage: Selector<AppStoreState, number> = ({
  gymnastics,
}) => gymnastics.currentPage;

export const getSubtypeId: Selector<AppStoreState, number> = ({ gymnastics }) =>
  gymnastics.form.subtype_id;

export const getTitle: Selector<AppStoreState, string> = ({ gymnastics }) =>
  gymnastics.form.title;

export const getDescription: Selector<AppStoreState, string> = ({
  gymnastics,
}) => gymnastics.form.description;

export const getPicture: Selector<AppStoreState, string | undefined> = ({
  gymnastics,
}) => gymnastics.form.picture;

export const getUploadDialogOpen: Selector<AppStoreState, boolean> = ({
  gymnastics,
}) => gymnastics.form.uploadDialogOpen;
