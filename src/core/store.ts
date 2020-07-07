import { combineReducers, createStore, applyMiddleware, Store, CombinedState, AnyAction } from "redux";
import { systemReducer } from "./reducer";
import { chatReducer, ChatReducerState } from "../modules/interface/reducer";
import { SystemState } from "./constants/core-constants";
import thunk from "redux-thunk";

export interface AppStoreState {
    system: SystemState;
    chat: ChatReducerState;
}

const rootReducer = combineReducers({
    system: systemReducer,
    chat: chatReducer,
});

export const configureStore = (): Store<CombinedState<AppStoreState>, AnyAction> => createStore(rootReducer, applyMiddleware(thunk));
