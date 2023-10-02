const { PostCategory, User, Category, BlogPost } = require('../models');

const createPost = async (postId, categoryIds) => {
  const listCategory = categoryIds.map((categoryId) => ({
    postId,
    categoryId,
  }));
  const postCreateList = PostCategory.bulkCreate(listCategory);

  return postCreateList;
};

const getAllPost = async () => {
  const posts = BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        attributes: { exclude: ['PostCategory'] },
        through: { attributes: [] },
      },
    ],
  });

  return posts;
};

module.exports = {
  createPost,
  getAllPost,
};
