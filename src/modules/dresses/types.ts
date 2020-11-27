import { Dress } from "./reducer";

export const UPDATE_DRESSES = 'UPDATE_DRESSES/DRESSES';

export interface UpdateDressesAction {
  type: typeof UPDATE_DRESSES;
  payload: Dress[];
}
