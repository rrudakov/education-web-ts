import { Selector } from 'react-redux';
import { AppStoreState } from '../../core/store';
import { VideoLesson } from './reducer';

export const getVideoLessons: Selector<AppStoreState, VideoLesson[]> = ({
  videoLessons,
}) => videoLessons.lessons;

export const getCurrentChunk: Selector<AppStoreState, VideoLesson[]> = ({
  videoLessons,
}) => videoLessons.currentChunk;

export const getPagesCount: Selector<AppStoreState, number> = ({
  videoLessons,
}) => videoLessons.pagesCount;

export const getCurrentPage: Selector<AppStoreState, number> = ({
  videoLessons,
}) => videoLessons.currentPage;

export const getTitle: Selector<AppStoreState, string> = ({ videoLessons }) =>
  videoLessons.form.title;

export const getSubtitle: Selector<AppStoreState, string> = ({
  videoLessons,
}) => videoLessons.form.subtitle;

export const getDescription: Selector<AppStoreState, string> = ({
  videoLessons,
}) => videoLessons.form.description;

export const getScreenshots: Selector<AppStoreState, string[]> = ({
  videoLessons,
}) => videoLessons.form.screenshots;

export const getPrice: Selector<AppStoreState, string> = ({ videoLessons }) =>
  videoLessons.form.price;

export const getUploadDialogOpen: Selector<AppStoreState, boolean> = ({
  videoLessons,
}) => videoLessons.form.uploadDialogOpen;
