import { UserState } from "./reducer";

export const INCREASE_FETCHING = 'UPDATE_FETCHING/SYSTEM';
export const DECREASE_FETCHING = 'DECREASE_FETCHING/SYSTEM';
export const OPEN_AUTH = 'OPEN_AUTH/SYSTEM';
export const CLOSE_AUTH = 'CLOSE_AUTH/SYSTEM';
export const UPDATE_SIGN_IN_USERNAME = 'UPDATE_USERNAME/SYSTEM/SIGN_IN';
export const UPDATE_SIGN_IN_PASSWORD = 'UPDATE_PASSWORD/SYSTEM/SIGN_IN';
export const SUCCESSFUL_LOGIN = 'SUCCESSFUL_LOGIN/SYSTEM';
export const LOGOUT = 'LOGOUT/SYSTEM';

export interface IncreaseFetchingAction {
    type: typeof INCREASE_FETCHING;
}

export interface DecreaseFetchingAction {
    type: typeof DECREASE_FETCHING;
}

export interface OpenAuthModalAction {
    type: typeof OPEN_AUTH;
}

export interface CloseAuthModalAction {
    type: typeof CLOSE_AUTH;
}

export interface UpdateSignInUsernameAction {
    type: typeof UPDATE_SIGN_IN_USERNAME;
    payload: string;
}

export interface UpdateSignInPasswordAction {
    type: typeof UPDATE_SIGN_IN_PASSWORD;
    payload: string;
}

export interface SuccessfulLoginAction {
    type: typeof SUCCESSFUL_LOGIN;
    payload: UserState;
}

export interface LogoutAction {
    type: typeof LOGOUT;
}

export type SystemActionTypes =
    IncreaseFetchingAction
    | DecreaseFetchingAction
    | OpenAuthModalAction
    | CloseAuthModalAction
    | UpdateSignInUsernameAction
    | UpdateSignInPasswordAction
    | SuccessfulLoginAction
    | LogoutAction;
