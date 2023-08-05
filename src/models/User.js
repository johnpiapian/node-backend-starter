import db from '../configs/db.js';

export const getAll = async () => {
    return await db.user.findMany();
};

export const getById = async (id) => {
    return await db.user.findUnique({
        where: { id: parseInt(id) }
    });
};

export const getByEmail = async (email) => {
    return await db.user.findUnique({
        where: { email }
    });
};

export const create = async ({ name, email }) => {
    return await db.user.create({
        data: {
            name,
            email
        }
    });
};

export const update = async (id, { name, email }) => {
    return await db.user.update({
        where: { id: parseInt(id) },
        data: {
            name,
            email
        }
    });
};

export const remove = async (id) => {
    return await db.user.delete({
        where: { id: parseInt(id) }
    });
};