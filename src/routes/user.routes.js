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

router.get(
  '/:id',
  validateToken,
  UserController.getByIdUser,
);

router.delete(
  '/me',
  validateToken,
  UserController.userDelete,
);

module.exports = router;