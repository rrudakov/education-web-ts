import { FeaturedPost } from "./reducer";
import { UpdateMainFeaturedAction, UPDATE_MAIN_FEATURED } from "./types";

export const updateMainFeaturedArticle = (featuredPost: FeaturedPost): UpdateMainFeaturedAction => ({
    type: UPDATE_MAIN_FEATURED,
    payload: featuredPost,
})
