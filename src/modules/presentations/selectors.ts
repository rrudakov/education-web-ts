import { Selector } from 'react-redux';
import { AppStoreState } from '../../core/store';
import { Presentation } from './reducer';

export const getPresentations: Selector<AppStoreState, Presentation[]> = ({
  presentations,
}) => presentations.presentations;

export const getCurrentChunk: Selector<AppStoreState, Presentation[]> = ({
  presentations,
}) => presentations.currentChunk;

export const getPagesCount: Selector<AppStoreState, number> = ({
  presentations,
}) => presentations.pagesCount;

export const getCurrentPage: Selector<AppStoreState, number> = ({
  presentations,
}) => presentations.currentPage;

export const getCurrentPresentation: Selector<
  AppStoreState,
  Presentation | undefined
> = ({ presentations }) => presentations.currentPresentation;

export const getTitle: Selector<AppStoreState, string> = ({ presentations }) =>
  presentations.form.title;

export const getUrl: Selector<AppStoreState, string> = ({ presentations }) =>
  presentations.form.url;

export const getDescription: Selector<AppStoreState, string> = ({
  presentations,
}) => presentations.form.description;

export const getIsPublic: Selector<AppStoreState, boolean> = ({
  presentations,
}) => presentations.form.is_public;

export const getAttachment: Selector<AppStoreState, string | undefined> = ({
  presentations,
}) => presentations.form.attachment;

export const getPreview: Selector<AppStoreState, string | undefined> = ({
  presentations,
}) => presentations.form.preview;

export const getIsPreviewDialogOpen: Selector<AppStoreState, boolean> = ({
  presentations,
}) => presentations.isPreviewDialogOpen;
