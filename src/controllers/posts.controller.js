const postService = require('../services/postService');
const { BlogPost } = require('../models');

const createPost = async (req, res) => {
  const { id } = req.user;
  const { title, content, categoryIds } = req.body;
  const post = await postService.createPost(title, content, categoryIds, id);
  const { message, code } = post;
  if (message) return res.status(code).json({ message });
  return res.status(201).json(post);
};

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

const updatePost = async (req, res) => {
  const { title, content } = req.body;

  const { id } = req.params;

  const post = await postService.updatePost(id, title, content);
  const { message, code } = post;

  if (message) return res.status(code).json({ message });

  return res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  await postService.deletePost(id);

  return res.status(204).json();
};

const searchItem = async (req, res) => {
  const { q } = req.query;

  const posts = await postService.searchItem(q);
  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  getPosts,
  getPostsById,
  updatePost,
  deletePost,
  searchItem,
};
