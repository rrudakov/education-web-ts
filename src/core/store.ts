import { combineReducers, createStore, applyMiddleware } from "redux";
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

export const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));
