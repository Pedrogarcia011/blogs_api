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

const updatePost = async (postId, userId, { title, content }) => {
  const post = await BlogPost.findByPk(postId);

  const date = new Date();
  const update = date.toISOString();

  if (!post) { throw new Error('Post not found'); }

  // Verifique se o usuário é o autor do post
  if (post.userId !== userId) { throw new Error('Unauthorized user'); }

  // Atualize apenas os campos title e content
  const [updatedPost] = await BlogPost
    .update({ title, content, update }, { where: { id: postId } });

  // Recupere o post atualizado

  return updatedPost;
};

module.exports = {
  createPost,
  getAllPost,
  updatePost,
};
