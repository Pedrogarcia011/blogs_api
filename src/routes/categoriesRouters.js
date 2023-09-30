const express = require('express');

const validateToken = require('../middleware/tokenValidate');

const { CreateCategory } = require('../controller');

const router = express.Router();

router.post(
  '/',
  validateToken,
  CreateCategory.createCategory,
);

module.exports = router;