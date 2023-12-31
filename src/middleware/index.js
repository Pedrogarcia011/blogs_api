const LoginMiddleware = require('./loginMiddleware');
const UserMiddleware = require('./userMiddleware');
const ValidateToken = require('./tokenValidate');
const TokenValidate = require('./tokenValidate');
const PostValidate = require('./postMiddleware');
const UpdateValidate = require('./updateMidlleware');

module.exports = {
  LoginMiddleware,
  UserMiddleware,
  ValidateToken,
  TokenValidate,
  PostValidate,
  UpdateValidate,
};