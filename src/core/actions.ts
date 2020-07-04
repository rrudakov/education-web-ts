import { SystemState, UpdateSessionAction, UPDATE_SESSION } from "./constants/core-constants"

export const updateSession = (newSession: SystemState): UpdateSessionAction => ({
    type: UPDATE_SESSION,
    payload: newSession,
})
