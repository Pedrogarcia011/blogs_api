const express = require('express');

const { UserMiddleware } = require('../middleware');
const { UserController } = require('../controller');

const router = express.Router();

router.post(
  '/',
  UserMiddleware.displayName8car,
  UserController.createUser,
);

module.exports = router;