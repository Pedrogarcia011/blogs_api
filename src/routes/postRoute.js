const express = require('express');

const { ValidateToken, PostValidate } = require('../middleware');

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

module.exports = router;