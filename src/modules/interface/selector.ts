import { Selector } from "react-redux";
import { Message } from "./reducer";
import { AppStoreState } from "../../core/store";

export const getChatMessage: Selector<AppStoreState, string> = ({ chat }) => chat.message;

export const getChatMessages: Selector<AppStoreState, Message[]> = ({ chat }) => chat.messages;
