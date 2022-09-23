const { User } = require('../models');

const requiredField = {
    message: 'Some required fields are missing',
    code: 400,
};

const invalidField = {
    message: 'Invalid fields',
    code: 400,
};

const validatePassword = (password) => {
    if (password === '' || !password) return requiredField;
};

const validateEmail = async (email) => {
    if (email === '' || !email) return requiredField;
    const existEmail = await User.findOne({ where: { email } });
    if (!existEmail) return invalidField;
};

module.exports = {
    validateEmail,
    validatePassword,
};