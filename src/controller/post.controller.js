const { PostService, BlogPost, UserService, CategoryService } = require('../service');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { email } = req;

    const existingCategory = await Promise
      .all(categoryIds.map((id) => CategoryService.getByIdCategory(id)));

    if (!existingCategory.every((id) => id !== null)) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const user = await UserService.userByEmail(email);
    // Chame o serviço para criar o blog post
    const newBlogPost = await BlogPost.blogPostCreate(title, content, user.id);

    await PostService.createPost(newBlogPost.id, categoryIds);

    return res.status(201).json(newBlogPost);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAllPost = async (req, res) => {
  try {
    const postsAll = await PostService.getAllPost();

    return res.status(200).json(postsAll);
  } catch (e) {
    return res.status(500).json({ message: e.error });
  }
};

const getByIdBlogPost = async (req, res) => {
  try {
    const { id } = req.params;

    const postById = await BlogPost.getByIdBlogPost(id);

    if (!postById) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(postById);
  } catch (e) {
    return res.status(400).json({ message: 'Post does not exist' });
  }
};

module.exports = {
  createPost,
  getAllPost,
  getByIdBlogPost,
};