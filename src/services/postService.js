const { BlogPost } = require('../models');
const { Category } = require('../models');
const { User } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  if (!title || !content || !categoryIds) {
    return { message: 'Some required fields are missing', code: 400 };
  }

  const result = await Promise.all(categoryIds.map(async (categoryI) => {
    const category = await Category.findByPk(categoryI);
    if (!category) {
      return null;
    }
    return category;
  }));

  if (result.includes(null)) {
    return { code: 400, 
      message: '"categoryIds" not found',
    };
  }

  const post = await BlogPost.create({ title, content, userId, categoryIds });
  
  await post.addCategory(categoryIds);

  return post;
};

const getPosts = async () => {
    const post = await BlogPost.findAll({
        include: [
          { model: User,
            as: 'user', 
            attributes: { exclude: ['password'] },
          },
          {
            model: Category,
            as: 'categories',
            through: { attributes: [] },
          },
        ],

    });
    return post;
};

const getPostsById = async () => {
  const post = await BlogPost.findOne({
      include: [
        { model: User,
          as: 'user', 
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],

  });
  return post;
};

module.exports = {
  createPost,
  getPosts,
  getPostsById,

};
