const express = require('express');

const { ValidateToken, PostValidate, UpdateValidate } = require('../middleware');

const { PostController } = require('../controller');

const router = express.Router();

router.post(
  '/',
  ValidateToken,
  PostValidate,
  PostController.createPost,
);

router.get(
  '/',
  ValidateToken,
  PostController.getAllPost,
);

router.get(
  '/:id',
  ValidateToken,
  PostController.getByIdBlogPost,
);

router.put(
  '/:id',
  ValidateToken,
  UpdateValidate,
  PostController.updatePost,
);

module.exports = router;