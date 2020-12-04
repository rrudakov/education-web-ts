import { Selector } from 'react-redux';
import { AppStoreState } from '../../core/store';
import { Dress } from './reducer';

export const getDresses: Selector<AppStoreState, Dress[]> = ({ dresses }) =>
  dresses.dresses;

export const getTitle: Selector<AppStoreState, string> = ({ dresses }) =>
  dresses.form.title;

export const getDescription: Selector<AppStoreState, string> = ({ dresses }) =>
  dresses.form.description;

export const getSize: Selector<AppStoreState, number> = ({ dresses }) =>
  dresses.form.size;

export const getPictures: Selector<AppStoreState, string[]> = ({ dresses }) =>
  dresses.form.pictures;

export const getPrice: Selector<AppStoreState, string> = ({ dresses }) =>
  dresses.form.price;

export const getUploadDialogOpen: Selector<AppStoreState, boolean> = ({
  dresses,
}) => dresses.form.uploadDialogOpen;
