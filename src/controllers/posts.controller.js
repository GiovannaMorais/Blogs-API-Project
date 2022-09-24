const postService = require('../services/postService');
const { BlogPost } = require('../models');

const getPosts = async (req, res) => {
  const post = await postService.getPosts();
  return res.status(200).json(post);
};

const getPostsById = async (req, res) => {
  const { id } = req.params;
  const existId = await BlogPost.findByPk(id);
  if (!existId) return res.status(404).json({ message: 'Post does not exist' });
  const post = await postService.getPostsById(id);
  return res.status(200).json(post);
};

module.exports = {
  
  getPosts,
  getPostsById,
  
};
