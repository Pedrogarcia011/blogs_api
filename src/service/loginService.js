const jwt = require('jsonwebtoken');
const { User } = require('../models');

const postLogin = async (email, password) => {
  const userExist = await User.findOne({ where: { email, password } });
  
  if (!userExist) {
    return { message: 'Invalid fields', type: 'USER_NOT_EXIST' };
  }
  
  const jwtSecret = process.env.JWT_SECRET || 'mySecret';
  
  const configJwt = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };
  
  const tokenGenerate = jwt.sign({ email }, jwtSecret, configJwt);
  
  return tokenGenerate;
};

module.exports = {
  postLogin,
};