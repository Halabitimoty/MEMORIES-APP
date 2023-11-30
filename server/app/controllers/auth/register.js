const bcrypt = require("bcrypt");

require("dotenv").config();

const { user } = require("../../schemas/index");
const { registerval } = require("../../joischema/index");

const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    await registerval.validateAsync({
      fullname,
      email,
      password,
    });

    const isUserPresent = await user.findOne({ email });

    if (isUserPresent) {
      return res.status(409).send({
        success: false,
        error: "email already exists",
        message: "sign up failed.",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(password, salt);

    await user.create({
      fullname,
      email,
      password: hashedpassword,
    });

    res.status(201).send({
      success: true,
      message: "sign up successfull.",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "sign up failed.",
      message: "sign up failed",
    });
  }
};

module.exports = register;
