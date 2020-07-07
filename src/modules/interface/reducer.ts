import { UPDATE_MESSAGE, SEND_MESSAGE, DELETE_MESSAGE, ChatActionTypes } from "./constants/reducer-constants"

export interface Message {
    user: string;
    message: string;
    timestamp: number;
}

export interface ChatReducerState {
    message: string;
    messages: Message[];
}

const initialState: ChatReducerState = {
    message: 'Hello',
    messages: []
}

export const chatReducer = (state: ChatReducerState = initialState, action: ChatActionTypes): ChatReducerState => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case SEND_MESSAGE:
            return {
                message: '',
                messages: [...state.messages, action.payload]
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(
                    message => message.timestamp !== action.meta.timestamp
                )
            };
        default:
            return state;
    }
}
