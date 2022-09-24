const jwt = require('jsonwebtoken');

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'suaSenhaSecreta';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, TOKEN_SECRET_KEY);

    req.user = decoded.user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
