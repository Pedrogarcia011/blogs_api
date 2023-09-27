const { LoginService } = require('../service');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const token = await LoginService.postLogin(email, password);

  if (token.type) return res.status(400).json({ message: token.message });
  return res.status(200).json({ token });
};

module.exports = {
  postLogin,
};
