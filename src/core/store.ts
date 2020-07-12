import { combineReducers, createStore, applyMiddleware, Store, CombinedState, AnyAction } from "redux";
import { systemReducer, SystemState } from "./reducer";
import { chatReducer, ChatReducerState } from "../modules/interface/reducer";
import thunk from "redux-thunk";
import { HomeState, homeReducer } from "../modules/home/reducer";

export interface AppStoreState {
  system: SystemState;
  home: HomeState;
  chat: ChatReducerState;
}

const rootReducer = combineReducers({
  system: systemReducer,
  home: homeReducer,
  chat: chatReducer,
});

export const configureStore = (): Store<CombinedState<AppStoreState>, AnyAction> => createStore(rootReducer, applyMiddleware(thunk));
