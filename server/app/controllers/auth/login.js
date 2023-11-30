const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { user } = require("../../schemas/index");
const { loginval } = require("../../joischema/index");

require("dotenv").config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    await loginval.validateAsync({ email, password });

    const userdetails = await user.findOne({ email });

    if (!userdetails) {
      return res.status(404).send({
        success: false,
        error: "User not found",
        message: "Login failed",
      });
    }

    const passwordmatch = bcrypt.compareSync(password, userdetails.password);

    if (!passwordmatch) {
      return res.status(400).send({
        success: false,
        error: "Invalid credentials",
        message: "Login failed",
      });
    }

    const { email: user_email, _id } = userdetails;

    const token = jwt.sign(
      {
        useremail: user_email,
        userid: _id,
      },
      process.env.SECRET
    );

    req.session.isAuth = true;

    res.status(200).send({
      success: true,
      message: "login successful",
      userid: _id,
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "sign in failed.",
      message: "sign in failed",
    });
  }
};

module.exports = login;
