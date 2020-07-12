import { Selector } from "react-redux";
import { AppStoreState } from "../../core/store";
import { FeaturedPost } from "./reducer";

export const getMainFeaturedPost: Selector<AppStoreState, FeaturedPost> = ({ home }) => home.main_featured_post;
