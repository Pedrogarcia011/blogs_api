const express = require('express');

const validateToken = require('../middleware/tokenValidate');

const { CreateCategory } = require('../controller');

const router = express.Router();

router.post(
  '/',
  validateToken,
  CreateCategory.createCategory,
);

router.get(
  '/',
  validateToken,
  CreateCategory.getAllCategory,
);

module.exports = router;