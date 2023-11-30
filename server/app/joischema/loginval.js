const Joi = require("joi");

const loginval = Joi.object({
  email: Joi.string().email().min(3).max(50).required(),
  password: Joi.string().alphanum().min(6).max(40).required(),
});

module.exports = loginval;
