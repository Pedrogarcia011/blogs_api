// middleware/auth.js
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'mySecret';

const validateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token.replace('Bearer ', ''), jwtSecret);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
