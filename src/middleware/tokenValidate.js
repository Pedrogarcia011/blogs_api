// middleware/auth.js
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'mySecret';

const validateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const users = jwt.verify(token.replace('Bearer ', ''), jwtSecret);
    console.log(users);
    if (users.userId) {
      req.userId = users.userId; // Configura o userId na solicitação
    }
    if (users.email) {
      req.email = users.email; // Configura o email na solicitação
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
