import { SEND_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE } from "./constants/reducer-constants"
import { Message } from "../../store/chat/types"

export const SendMessage = (newMessage: Message) => ({
    type: SEND_MESSAGE,
    payload: newMessage,
})

export const deleteMessage = (timestamp: number) => ({
    type: DELETE_MESSAGE,
    meta: {
        timestamp,
    }
})

export const UpdateMessage = (message: string) => ({
    type: UPDATE_MESSAGE,
    payload: message,
})
