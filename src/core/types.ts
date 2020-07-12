export const INCREASE_FETCHING = 'UPDATE_FETCHING/SYSTEM';
export const DECREASE_FETCHING = 'DECREASE_FETCHING/SYSTEM';

export interface IncreaseFetchingAction {
    type: typeof INCREASE_FETCHING;
}

export interface DecreaseFetchingAction {
    type: typeof DECREASE_FETCHING;
}

export type SystemActionTypes = IncreaseFetchingAction | DecreaseFetchingAction;
