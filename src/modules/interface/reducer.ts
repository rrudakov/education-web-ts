import { Reducer } from "react";
import { UPDATE_MESSAGE, SEND_MESSAGE, DELETE_MESSAGE } from "./constants/reducer-constants";
import { Message } from "../../store/chat/types";

export interface InterfacesReducerState {
    message: string;
    messages: Message[];
}

const initialState: InterfacesReducerState = {
    message: 'Hello',
    messages: []
}

export const InterfacesReducer: Reducer<InterfacesReducerState, any> = (state = initialState, action) => {
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