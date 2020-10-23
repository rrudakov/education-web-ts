import { Selector } from 'react-redux';
import { AppStoreState } from '../../core/store';
import { VideoLesson } from './reducer';

export const getVideoLessons: Selector<AppStoreState, VideoLesson[]> = ({
  videoLessons,
}) => videoLessons.lessons;
