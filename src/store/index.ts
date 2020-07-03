import { combineReducers, applyMiddleware, createStore } from "redux";
import { chatReducer } from "./chat/reducers";
import thunkMiddleware from 'redux-thunk';
import { systemReducer } from "./system/reducers";
import { ChatState } from "./chat/types";
import { SystemState } from "./system/types";
import { InterfacesReducerState, InterfacesReducer } from "../modules/interface/reducer";

const rootReducer = combineReducers({
    chat: chatReducer,
    system: systemReducer,
    interfaces: InterfacesReducer
});

export interface AppStoreState {
    chat: ChatState;
    system: SystemState;
    interfaces: InterfacesReducerState;
}

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        middlewareEnhancer
    )

    return store;
}
