import { SystemState, SystemActionTypes, UPDATE_SESSION } from "./constants/core-constants";

const initialState: SystemState = {
    loggedIn: false,
    session: '',
    userName: 'RRudakov',
}

export const systemReducer = (state: SystemState = initialState, action: SystemActionTypes): SystemState => {
    switch (action.type) {
        case UPDATE_SESSION:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
