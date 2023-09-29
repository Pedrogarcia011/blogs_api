const { UserService } = require('../service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await UserService.createUser(displayName, email, password, image);

  if (token.type) return res.status(400).json({ message: token.message });
  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};