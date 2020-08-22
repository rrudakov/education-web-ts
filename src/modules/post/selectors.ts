import { Selector } from "react-redux";
import { AppStoreState } from "../../core/store";
import { FullPost } from "../home/reducer";

export const getPost: Selector<AppStoreState, FullPost | undefined> = ({ post }) => post.post;
