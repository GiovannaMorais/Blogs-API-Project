const jwt = require('jsonwebtoken');
const { User } = require('../models');
const userValidation = require('../middlewares/userValidation');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'suaSenhaSecreta';

const createUser = async (displayName, email, password, image) => {
    const validateNameAndPassword = userValidation.validateLength(displayName, password);
    const emailValid = await userValidation.validateEmail(email);

    if (validateNameAndPassword) return validateNameAndPassword;
    if (emailValid) return emailValid;

    await User.create({
        displayName, email, password, image,
    });

    const jwtConfig = {
        expiresIn: '15min', algorithm: 'HS256',
    };

    const user = await User.findOne({ where: { email } });
    const token = jwt.sign({ user }, TOKEN_SECRET_KEY, jwtConfig);

    return { token };
};

const getUsers = async () => {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
  
    return users;
  };
  const getUsersById = async (id) => {
    const users = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
      });
    
    return users;
  };

  const deleteUser = async (id) => {
    await User.destroy({
        where: { id },
    });
};

module.exports = {
    createUser,
    getUsers,
    getUsersById,
    deleteUser,
};