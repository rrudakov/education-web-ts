import { Selector } from "react-redux";
import { AppStoreState } from "./store";

export const getUserName: Selector<AppStoreState, string> = ({ system }) => system.userName;
