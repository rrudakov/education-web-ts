import {
  DecreaseFetchingAction,
  DECREASE_FETCHING,
  IncreaseFetchingAction,
  INCREASE_FETCHING,
  LOGOUT,
  LogoutAction,
  OpenAuthModalAction,
  OPEN_AUTH,
  StartTransitioningAction,
  START_TRANSITIONING,
  StopTransitioningAction,
  STOP_TRANSITIONING,
  UpdateErrorMessageAction,
  UpdateSuccessMessageAction,
  UPDATE_ERROR_MESSAGE,
  UPDATE_SUCCESS_MESSAGE,
} from './types';

export const fetching = (): IncreaseFetchingAction => ({
  type: INCREASE_FETCHING,
});

export const stopFetching = (): DecreaseFetchingAction => ({
  type: DECREASE_FETCHING,
});

export const startTransitioning = (): StartTransitioningAction => ({
  type: START_TRANSITIONING,
});

export const stopTransitioning = (): StopTransitioningAction => ({
  type: STOP_TRANSITIONING,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export const openAuthModal = (): OpenAuthModalAction => ({
  type: OPEN_AUTH,
});

export const updateErrorMessage = (
  message?: string
): UpdateErrorMessageAction => ({
  type: UPDATE_ERROR_MESSAGE,
  payload: message,
});

export const unauthorizedError = (): UpdateErrorMessageAction => ({
  type: UPDATE_ERROR_MESSAGE,
  payload: 'Unauthorized!',
});

export const updateSuccessMessage = (
  message?: string
): UpdateSuccessMessageAction => ({
  type: UPDATE_SUCCESS_MESSAGE,
  payload: message,
});
