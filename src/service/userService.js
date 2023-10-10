const Jwt = require('jsonwebtoken');
const { User, BlogPost, sequelize } = require('../models');

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

const getByIdUser = async (id) => {
  const users = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  return users;
};

const userByEmail = async (email) => {
  const userExist = await User.findOne({ where: { email } });

  return userExist;
};

const deleteUserAndDependentPosts = async (userId) => {
  // Use a função `transaction` para lidar com a transação automaticamente
  await sequelize.transaction(async (t) => {
    // Passo 1: Identificar registros dependentes e excluí-los
    await BlogPost.destroy({ where: { userId }, transaction: t });

    // Passo 2: Excluir o usuário
    await User.destroy({ where: { id: userId }, transaction: t });
  });
};
module.exports = {
  createUser,
  getAllUser,
  getByIdUser,
  userByEmail,
  deleteUserAndDependentPosts,
};