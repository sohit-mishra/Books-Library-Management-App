const express = require("express");
const router = express.Router();
const {
  UserBooks,
  AddUserBooks,
  UpdateReadingStatus,
  BookRating,
} = require("@/controllers/MyBookController");
const auth = require("@/middlewares/authMiddleware");

router.get("", auth, UserBooks);
router.post("/:bookId", auth, AddUserBooks);
router.patch("/:bookId/status", auth, UpdateReadingStatus);
router.patch("/:bookId/rating", auth, BookRating);

module.exports = router;

