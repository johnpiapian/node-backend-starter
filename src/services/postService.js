import * as Post from "../models/Post.js";

export const getAllPosts = async () => {
    return await Post.getAll();
};