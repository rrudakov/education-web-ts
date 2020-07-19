import { HomeActionTypes, UPDATE_FEATURED, UPDATE_FULL_POSTS, UPDATE_MAIN_FEATURED } from "./types";

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
    main_featured_post: FeaturedPost;
    featured_posts: FeaturedPost[];
    latest_posts: FullPost[];
}

const initialState: HomeState = {
    main_featured_post: {
        id: 0,
        user_id: 0,
        title: '',
        featured_image: '',
        updated_on: '',
        description: '',
    },
    featured_posts: [],
    latest_posts: [],
}

export const homeReducer = (state: HomeState = initialState, action: HomeActionTypes): HomeState => {
    switch (action.type) {
        case UPDATE_MAIN_FEATURED:
            return {
                ...state,
                main_featured_post: action.payload,
            };
        case UPDATE_FEATURED:
            return {
                ...state,
                featured_posts: action.payload,
            }
        case UPDATE_FULL_POSTS:
            return {
                ...state,
                latest_posts: action.payload,
            }
        default:
            return state;
    }
}
