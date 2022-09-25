const { BlogPost } = require('../models');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const { user } = req;
    const post = await BlogPost.findByPk(id);
    
    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    if (user.id !== post.dataValues.userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    next();
};