const Jwt = require('jsonwebtoken');
const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const userExist = await User.findOne({ where: { email } });

  if (userExist) {
    const error = new Error('User already registered');
    error.statusCode = 409;
    throw error;
  }
  await User.create({ displayName, email, password, image });

  const jwtSecret = process.env.JWT_SECRET || 'mySecret';

  const configJwt = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };

  const tokenGenerate = Jwt.sign({ displayName, email, image }, jwtSecret, configJwt);

  return tokenGenerate;
};

const getAllUser = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
  createUser,
  getAllUser,
};