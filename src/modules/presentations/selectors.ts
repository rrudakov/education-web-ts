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

export const getTitle: Selector<AppStoreState, string> = ({ presentations }) =>
  presentations.form.title;

export const getUrl: Selector<AppStoreState, string> = ({ presentations }) =>
  presentations.form.url;

export const getDescription: Selector<AppStoreState, string> = ({
  presentations,
}) => presentations.form.description;
