const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'James Doe' }
];

export const getAllUsers = async () => {
    return users;
};

export const getUserById = async (id) => {
    const user = users.find((user) => user.id == id);

    return user;
};