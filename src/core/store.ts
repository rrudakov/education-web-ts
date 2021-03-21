import {
  AnyAction,
  applyMiddleware,
  CombinedState,
  combineReducers,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import { dressesReducer, DressesState } from '../modules/dresses/reducer';
import {
  gymnasticsReducer,
  GymnasticsState,
} from '../modules/gymnastics/reducer';
import { homeReducer, HomeState } from '../modules/home/reducer';
import {
  presentationsReducer,
  PresentationsState,
} from '../modules/presentations/reducer';
import {
  videoLessonsReducer,
  VideoLessonsState,
} from '../modules/video-lessons/reducer';
import { systemReducer, SystemState } from './reducer';

export interface AppStoreState {
  system: SystemState;
  home: HomeState;
  videoLessons: VideoLessonsState;
  dresses: DressesState;
  gymnastics: GymnasticsState;
  presentations: PresentationsState;
}

const rootReducer = combineReducers({
  system: systemReducer,
  home: homeReducer,
  videoLessons: videoLessonsReducer,
  dresses: dressesReducer,
  gymnastics: gymnasticsReducer,
  presentations: presentationsReducer,
});

export const configureStore = (): Store<
  CombinedState<AppStoreState>,
  AnyAction
> => createStore(rootReducer, applyMiddleware(thunk));
