// middleware/auth.js

const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'mySecret';

const validateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const tokenValue = token.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(tokenValue, jwtSecret);
    req.userId = decoded.userId; // Define o ID do usuário no objeto de solicitação
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
