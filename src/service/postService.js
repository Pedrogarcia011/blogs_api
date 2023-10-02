const { PostCategory } = require('../models');

const createPost = async (postId, categoryIds) => {
  const listCategory = categoryIds.map((categoryId) => ({
    postId,
    categoryId,
  }));
  const postCreateList = PostCategory.bulkCreate(listCategory);

  return postCreateList;
};

module.exports = {
  createPost,
};
