const { BlogPost } = require('../models');

const blogPostCreate = (title, content, id) => {
  const data = new Date();
  const format = data.toISOString();
  
  const published = format;
  const updated = format;
  const userId = Number(id);
  
  const newBlogPost = BlogPost.create({ title, content, userId, updated, published });
  return newBlogPost;
};

module.exports = {
  blogPostCreate,
};