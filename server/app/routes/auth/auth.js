const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  profile,
} = require("../../controllers/auth/index");
const { sessionauth, isuserloggedin } = require("../../middlewares/index");

router.get("/profile", sessionauth, isuserloggedin, profile);
router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);

module.exports = router;
