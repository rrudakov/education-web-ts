export interface Message {
    user: string;
    message: string;
    timestamp: number;
}

export interface ChatState {
    message: string;
    messages: Message[];
}

export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

interface UpdateMessageAction {
    type: typeof UPDATE_MESSAGE;
    payload: string;
}

interface SendMessageAction {
    type: typeof SEND_MESSAGE;
    payload: Message;
}

interface DeleteMessageAction {
    type: typeof DELETE_MESSAGE;
    meta: {
        timestamp: number;
    };
}

export type ChatActionTypes = SendMessageAction | UpdateMessageAction | DeleteMessageAction;
