const { UserService } = require('../service');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await UserService.createUser(displayName, email, password, image);

  if (token.type) return res.status(400).json({ message: token.message });
  return res.status(201).json({ token });
};

const getAllUser = async (req, res) => {
  const users = await UserService.getAllUser();
  return res.status(200).json(users);
};

const getByIdUser = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getByIdUser(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUser,
  getByIdUser,
};