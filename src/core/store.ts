import {
  AnyAction,
  applyMiddleware,
  CombinedState,
  combineReducers,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import { homeReducer, HomeState } from '../modules/home/reducer';
import { newPostReducer, NewPostState } from '../modules/newpost/reducer';
import { postReducer, PostState } from '../modules/post/reducer';
import { systemReducer, SystemState } from './reducer';
import {
  NewVideoLessonState,
  newVideoLessonReducer,
} from '../modules/new-video-lesson/reducer';

export interface AppStoreState {
  system: SystemState;
  home: HomeState;
  post: PostState;
  newPost: NewPostState;
  newVideoLesson: NewVideoLessonState;
}

const rootReducer = combineReducers({
  system: systemReducer,
  home: homeReducer,
  post: postReducer,
  newPost: newPostReducer,
  newVideoLesson: newVideoLessonReducer,
});

export const configureStore = (): Store<
  CombinedState<AppStoreState>,
  AnyAction
> => createStore(rootReducer, applyMiddleware(thunk));
