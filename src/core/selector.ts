import { Selector } from "react-redux";
import { AppStoreState } from "./store";

export const getFetching: Selector<AppStoreState, boolean> = ({ system }) => system.fetching > 0;
