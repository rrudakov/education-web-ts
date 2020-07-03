import { Selector } from "react-redux";
import { AppStoreState } from "../../store";
import { Message } from "../../store/chat/types";

export const getChatMessage: Selector<AppStoreState, string> = ({ interfaces }) => interfaces.message;
export const getChatMessages: Selector<AppStoreState, Message[]> = ({ interfaces }) => interfaces.messages;