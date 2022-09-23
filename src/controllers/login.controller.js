const loginService = require('../services/loginService');

const signIn = async (req, res) => {
    const { email, password } = req.body;

    const login = await loginService.signIn(email, password);
    const { code, message, token } = login;

    if (message) return res.status(code).json({ message });

    return res.status(200).json({ token });
};

module.exports = {
    signIn,
};