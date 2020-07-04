import { Message } from "../reducer";

export const UPDATE_MESSAGE = "UPDATE_MESSAGE/INTERFACES";
export const SEND_MESSAGE = "SEND_MESSAGE/INTERFACES";
export const DELETE_MESSAGE = "DELETE_MESSAGE/INTERFACES";

export interface UpdateMessageAction {
    type: typeof UPDATE_MESSAGE;
    payload: string;
}

export interface SendMessageAction {
    type: typeof SEND_MESSAGE;
    payload: Message;
}

export interface DeleteMessageAction {
    type: typeof DELETE_MESSAGE;
    meta: {
        timestamp: number;
    }
}

export type ChatActionTypes = UpdateMessageAction | SendMessageAction | DeleteMessageAction;
