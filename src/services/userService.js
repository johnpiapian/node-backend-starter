import User from "../models/User.js";

export const getAllUsers = async () => {
    return await User.getAll();
};

export const getUserById = async (id) => {
    return await User.getById(id);
};