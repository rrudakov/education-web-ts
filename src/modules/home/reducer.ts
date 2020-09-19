import {
    HomeActionTypes,
    UPDATE_FEATURED,
    UPDATE_FULL_POSTS,
    UPDATE_MAIN_FEATURED,
    UPDATE_CERTIFICATES_MODAL_OPEN,
} from "./types";

export interface FeaturedPost {
    id: number;
    user_id: number;
    title: string;
    featured_image: string;
    updated_on: string;
    description: string;
}

export interface FullPost {
    id: number;
    user_id: number;
    title: string;
    description: string;
    body: string;
    featured_image: string;
    created_on: string;
    updated_on: string;
}

export interface HomeState {
    mainFeaturedPost: FeaturedPost;
    featuredPosts: FeaturedPost[];
    latestPosts: FullPost[];
    certificatesModalOpen: boolean;
}

const initialState: HomeState = {
    mainFeaturedPost: {
        id: 0,
        user_id: 0,
        title: "",
        featured_image: "",
        updated_on: "",
        description: "",
    },
    featuredPosts: [],
    latestPosts: [],
    certificatesModalOpen: false,
};

export const homeReducer = (
    state: HomeState = initialState,
    action: HomeActionTypes
): HomeState => {
    switch (action.type) {
        case UPDATE_MAIN_FEATURED:
            return {
                ...state,
                mainFeaturedPost: action.payload,
            };
        case UPDATE_FEATURED:
            return {
                ...state,
                featuredPosts: action.payload,
            };
        case UPDATE_FULL_POSTS:
            return {
                ...state,
                latestPosts: action.payload,
            };
        case UPDATE_CERTIFICATES_MODAL_OPEN:
            return {
                ...state,
                certificatesModalOpen: action.payload,
            };
        default:
            return state;
    }
};
