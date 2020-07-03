import { Message, SEND_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE } from "./types";

export const sendMessage = (newMessage: Message) => ({
    type: SEND_MESSAGE,
    payload: newMessage,
})

export const deleteMessage = (timestamp: number) => ({
    type: DELETE_MESSAGE,
    meta: {
        timestamp,
    }
})

export const updateMessage = (message: string) => ({
    type: UPDATE_MESSAGE,
    payload: message,
})
