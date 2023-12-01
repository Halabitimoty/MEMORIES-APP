const express = require("express");
const router = express.Router();

const { register, login, logout } = require("../../controllers/auth/index");

router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);

module.exports = router;
