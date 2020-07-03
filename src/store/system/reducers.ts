import { SystemState, SystemActionTypes, UPDATE_SESSION } from "./types";

const initialState: SystemState = {
    loggedIn: false,
    session: '',
    userName: 'RRudakov'
}

export function systemReducer(state: SystemState = initialState, action: SystemActionTypes): SystemState {
    switch (action.type) {
        case UPDATE_SESSION:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
