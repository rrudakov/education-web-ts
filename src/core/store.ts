import { AnyAction, applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { homeReducer, HomeState } from "../modules/home/reducer";
import { systemReducer, SystemState } from "./reducer";
import { PostState, postReducer } from "../modules/post/reducer";

export interface AppStoreState {
  system: SystemState;
  home: HomeState;
  post: PostState;
}

const rootReducer = combineReducers({
  system: systemReducer,
  home: homeReducer,
  post: postReducer,
});

export const configureStore = (): Store<CombinedState<AppStoreState>, AnyAction> => createStore(rootReducer, applyMiddleware(thunk));
