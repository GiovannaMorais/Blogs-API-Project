const usersService = require('../services/userService');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const user = await usersService.createUser(displayName, email, password, image);

    const { code, message, token } = user;
    
    if (message) return res.status(code).json({ message });

    return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
    const users = await usersService.getUsers();
    return res.status(200).json(users);
};

const getUsersById = async (req, res) => {
    const { id } = req.params;
    const users = await usersService.getUsersById(id);
    if (!users) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(users);
};

const deleteUser = async (req, res) => {
    const { id } = req.user;

    await usersService.deleteUser(id);

    return res.status(204).json();
};

module.exports = {
    createUser,
    getUsers,
    getUsersById,
    deleteUser,
};