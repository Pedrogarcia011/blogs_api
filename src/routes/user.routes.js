const express = require('express');

const { UserMiddleware } = require('../middleware');
const { UserController } = require('../controller');
const validateToken = require('../middleware/tokenValidate');

const router = express.Router();

router.post(
  '/',
  UserMiddleware.displayName8car,
  UserController.createUser,
);

router.get(
  '/',
  validateToken,
  UserController.getAllUser,
);

module.exports = router;