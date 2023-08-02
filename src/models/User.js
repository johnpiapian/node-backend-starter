import db from '../configs/db.js';

const getAll = async () => {
    return await db.user.findMany();
};

const getById = async (id) => {
    return await db.user.findUnique({
        where: { id: parseInt(id) }
    });
};

const create = async ({ name, email }) => {
    return await db.user.create({
        data: {
            name,
            email
        }
    });
};

const update = async (id, { name, email }) => {
    return await db.user.update({
        where: { id: parseInt(id) },
        data: {
            name,
            email
        }
    });
};

const remove = async (id) => {
    return await db.user.delete({
        where: { id: parseInt(id) }
    });
};

export default { getAll, getById, create, update, remove};