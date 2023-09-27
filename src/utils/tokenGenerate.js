const jwt = require('jsonwebtoken');

const jwtSecrete = process.env.JWT_SECRET || 'mySecret';

const tokenGenerate = (payload) => {
  const configJwt = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };

  return jwt.sign(payload, jwtSecrete, configJwt);
};

const tokenValidation = (token) => jwt.verify(token, jwtSecrete);

module.exports = {
  tokenGenerate,
  tokenValidation,
};