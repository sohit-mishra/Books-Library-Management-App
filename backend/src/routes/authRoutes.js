const express = require("express");
const router = express.Router();
const {
  CreateUser,
  loginUser,
  logoutUser,
  userInfo,
} = require("@/controllers/AuthController");

router.post("/register", CreateUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/me", userInfo);

module.exports = router;
