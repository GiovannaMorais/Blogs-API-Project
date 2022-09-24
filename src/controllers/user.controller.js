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

module.exports = {
    createUser,
    getUsers,
};