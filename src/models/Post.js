import db from '../configs/db.js';

export const getAll = async () => {
    return await db.post.findMany();
};

export const getById = async (id) => {
    return await db.post.findUnique({
        where: { id: parseInt(id) }
    });
};

export const create = async (data) => {
    return await db.post.create({
        data: {
            title: data.title,
            content: data.content,
            published: data.published,
            authorId: data.authorId
        }
    });
};

export const update = async (id, data) => {
    return await db.post.update({
        where: { id: parseInt(id) },
        data: {
            title: data.title,
            content: data.content,
            published: data.published
        }
    });
};

export const remove = async (id) => {
    return await db.post.delete({
        where: { id: parseInt(id) }
    });
}