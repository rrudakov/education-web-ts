import { combineReducers, applyMiddleware, createStore } from "redux";
import { chatReducer } from "./chat/reducers";
import thunkMiddleware from 'redux-thunk';
import { systemReducer } from "./system/reducers";

const rootReducer = combineReducers({
    chat: chatReducer,
    system: systemReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        middlewareEnhancer
    )

    return store;
}
