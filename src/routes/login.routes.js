const express = require('express');

const { LoginController } = require('../controller');

const { LoginMiddleware } = require('../middleware');

const router = express.Router();

router.post('/', LoginMiddleware.emailAndPasswordValidate, LoginController.postLogin);

module.exports = router;