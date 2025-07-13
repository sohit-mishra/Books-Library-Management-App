const express = require("express");
const router = express.Router();
const {
  CreateUser,
  loginUser,
  logoutUser,
  userInfo,
} = require("@/controllers/AuthController");
const auth = require("@/middlewares/authMiddleware");

router.post("/register", CreateUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/me",auth, userInfo);

module.exports = router;
