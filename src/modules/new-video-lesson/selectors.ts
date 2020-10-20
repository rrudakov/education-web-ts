import { Selector } from 'react-redux';
import { AppStoreState } from '../../core/store';

export const getTitle: Selector<AppStoreState, string> = ({ newVideoLesson }) =>
  newVideoLesson.title;

export const getSubtitle: Selector<AppStoreState, string> = ({
  newVideoLesson,
}) => newVideoLesson.subtitle;

export const getDescription: Selector<AppStoreState, string> = ({
  newVideoLesson,
}) => newVideoLesson.description;

export const getScreenshots: Selector<AppStoreState, string[]> = ({
  newVideoLesson,
}) => newVideoLesson.screenshots;

export const getPrice: Selector<AppStoreState, string> = ({ newVideoLesson }) =>
  newVideoLesson.price;

export const getUploadDialogOpen: Selector<AppStoreState, boolean> = ({
  newVideoLesson,
}) => newVideoLesson.uploadDialogOpen;
