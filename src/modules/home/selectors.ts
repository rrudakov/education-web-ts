import { Selector } from "react-redux";
import { AppStoreState } from "../../core/store";
import { FeaturedPost, FullPost } from "./reducer";

export const getMainFeaturedPost: Selector<AppStoreState, FeaturedPost> = ({
    home,
}) => home.mainFeaturedPost;

export const getFeaturedPosts: Selector<AppStoreState, FeaturedPost[]> = ({
    home,
}) => home.featuredPosts;

export const getFullPosts: Selector<AppStoreState, FullPost[]> = ({ home }) =>
    home.latestPosts;

export const getCertificatesModalOpen: Selector<AppStoreState, boolean> = ({
    home,
}) => home.certificatesModalOpen;
