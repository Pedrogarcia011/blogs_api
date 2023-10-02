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

module.exports = router;