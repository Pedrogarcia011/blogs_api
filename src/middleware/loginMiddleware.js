const Joi = require('joi');

const emailAndPasswordValidate = (req, res, next) => {
  const validEmail = /^[a-zA-Z0-9._%+-]+@.+\.[a-zA-Z]{2,4}$/;
  const schema = Joi.object({
    email: validEmail,
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ statusCode: 400, message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = {
  emailAndPasswordValidate,
};