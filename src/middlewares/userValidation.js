const { User } = require('../models');

const userRegistered = {
  code: 409,
  message: 'User already registered',
};
const amissEmailFormat = {
  code: 400,
  message: '"email" must be a valid email',
};
const amissDisplayNameLength = {
  code: 400,
  message: '"displayName" length must be at least 8 characters long',
};

const amissPasswordFormat = {
  message: '"password" length must be at least 6 characters long',
  code: 400,
};
const validateEmail = async (email) => {
  const regEmail = /^[\w.+]+@\w+.\w{2,}(?:.\w{2})?$/gim;
  const testEmail = regEmail.test(email);

  if (!testEmail) return amissEmailFormat;

  const existsEmail = await User.findOne({
    where: { email },
  });

  if (existsEmail) return userRegistered;
};
const validateLength = (displayName, password) => {
  if (displayName.length < 8) return amissDisplayNameLength;
  if (password.length !== 6) return amissPasswordFormat;
};
module.exports = {
  validateLength,
  validateEmail,
};
