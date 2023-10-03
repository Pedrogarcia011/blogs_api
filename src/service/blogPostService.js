const { BlogPost, User, Category } = require('../models');

const blogPostCreate = (title, content, id) => {
  const data = new Date();
  const format = data.toISOString();
  
  const published = format;
  const updated = format;
  const userId = Number(id);
  
  const newBlogPost = BlogPost.create({ title, content, userId, updated, published });
  return newBlogPost;
};

const getByIdBlogPost = (id) => {
  const posts = BlogPost.findByPk(id, {
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
  blogPostCreate,
  getByIdBlogPost,
};