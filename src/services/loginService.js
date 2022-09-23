const jwt = require('jsonwebtoken');
const { validateEmail, validatePassword } = require('../schemas/validations');
const { User } = require('../models');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'suaSenhaSecreta';

const signIn = async (email, password) => {
    const emailVerified = await validateEmail(email);
    const passwordVerified = await validatePassword(password);

    if (emailVerified) return emailVerified;
    if (passwordVerified) return passwordVerified;

    const jwtConfig = {
        expiresIn: '15min',
        algorithm: 'HS256',
    };

    const user = await User.findOne({ where: { email } });
    const token = jwt.sign({ user }, TOKEN_SECRET_KEY, jwtConfig); 

    return { token };
};

module.exports = {
    signIn,
};