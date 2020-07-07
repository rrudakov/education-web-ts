import {
    SEND_MESSAGE,
    DELETE_MESSAGE,
    UPDATE_MESSAGE,
    SendMessageAction,
    DeleteMessageAction,
    UpdateMessageAction
} from "./constants/reducer-constants"
import { Message } from "./reducer"

export const sendChatMessage = (newMessage: Message): SendMessageAction => ({
    type: SEND_MESSAGE,
    payload: newMessage,
})

export const deleteChatMessage = (timestamp: number): DeleteMessageAction => ({
    type: DELETE_MESSAGE,
    meta: {
        timestamp,
    }
})

export const updateChatMessage = (message: string): UpdateMessageAction => ({
    type: UPDATE_MESSAGE,
    payload: message,
})
