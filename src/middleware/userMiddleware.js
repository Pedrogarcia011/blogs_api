const Joi = require('joi');
const { User } = require('../models');

const displayName8car = async (req, res, next) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  }).validate(req.body);

  // verificando se o email existe
  const { email } = req.body;
  const existingEmail = await User.findOne({ where: { email } });
  if (existingEmail) return res.status(409).json({ message: 'User already registered' });

  const { error } = schema;
  if (error) {
    return res
      .status(400)
      .json({ message: error.message });
  }
  return next();
};

module.exports = {
  displayName8car,
};