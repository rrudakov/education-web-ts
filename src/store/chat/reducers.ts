import { ChatState, ChatActionTypes, SEND_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE } from './types';

const initialState: ChatState = {
    message: '',
    messages: [],
}

export function chatReducer(state: ChatState = initialState, action: ChatActionTypes): ChatState {
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
    };
}
