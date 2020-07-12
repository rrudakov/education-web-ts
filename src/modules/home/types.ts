import { FeaturedPost } from "./reducer";

export const UPDATE_MAIN_FEATURED = "UPDATE_MAIN_FEATURED/HOME";

export interface UpdateMainFeaturedAction {
    type: typeof UPDATE_MAIN_FEATURED;
    payload: FeaturedPost;
}

export type HomeActionTypes = UpdateMainFeaturedAction;
