import { UPDATE_ERROR_MESSAGE, UpdateErrorMessageAction, UpdateSuccessMessageAction, UPDATE_SUCCESS_MESSAGE } from "./types";

export const updateErrorMessage = (message?: string): UpdateErrorMessageAction => ({
    type: UPDATE_ERROR_MESSAGE,
    payload: message,
})

export const updateSuccessMessage = (message?: string): UpdateSuccessMessageAction => ({
    type: UPDATE_SUCCESS_MESSAGE,
    payload: message,
})
