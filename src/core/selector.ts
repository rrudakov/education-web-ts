import { Selector } from "react-redux";
import { AppStoreState } from "./store";
import { UserState, MenuItem } from "./reducer";

export const getFetching: Selector<AppStoreState, boolean> = ({ system }) => system.fetching > 0;
export const getAuthOpen: Selector<AppStoreState, boolean> = ({ system }) => system.authOpen;
export const getSignInUsername: Selector<AppStoreState, string> = ({ system }) => system.signInState.username;
export const getSignInPassword: Selector<AppStoreState, string> = ({ system }) => system.signInState.password;
export const getLoggedIn: Selector<AppStoreState, boolean> = ({ system }) => system.user !== undefined;
export const getErrorMessage: Selector<AppStoreState, string | undefined> = ({ system }) => system.errorMessage;
export const getSuccessMessage: Selector<AppStoreState, string | undefined> = ({ system }) => system.successMessage;
export const getUser: Selector<AppStoreState, UserState | undefined> = ({ system }) => system.user;
export const getMenuItems: Selector<AppStoreState, MenuItem[]> = ({ system }) => system.menuItems;
export const getMenuDrawerOpen: Selector<AppStoreState, boolean> = ({ system }) => system.menuDrawerOpen;
