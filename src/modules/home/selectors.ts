import { Selector } from "react-redux";
import { AppStoreState } from "../../core/store";
import { FeaturedPost, FullPost } from "./reducer";

export const getMainFeaturedPost: Selector<AppStoreState, FeaturedPost> = ({ home }) => home.main_featured_post;
export const getFeaturedPosts: Selector<AppStoreState, FeaturedPost[]> = ({ home }) => home.featured_posts;
export const getFullPosts: Selector<AppStoreState, FullPost[]> = ({ home }) => home.latest_posts;
