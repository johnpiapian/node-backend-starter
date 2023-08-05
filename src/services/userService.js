import * as User from "../models/User.js";
import * as bcrypt from "../utils/bcrypt.js";

export const getAllUsers = async () => {
    return await User.getAll();
};

export const getUserById = async (id) => {
    return await User.getById(id);
};

export const authenticateUser = async (email, password) => {
    const user = await User.getByEmail(email);
    const storedPassword = await bcrypt.hashPassword('secret');
    const isPasswordMatched = await bcrypt.comparePassword(password, storedPassword);

    return user && isPasswordMatched ? user : null;
};