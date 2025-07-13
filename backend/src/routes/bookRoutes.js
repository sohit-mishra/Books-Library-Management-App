const express = require('express');
const router = express.Router();
const {GetAllBooks, uploadImage} = require('@/controllers/BookController');
const upload = require("@/middlewares/uploadMiddleware");

router.get('/', GetAllBooks);
router.post('/', upload.single("cover"), uploadImage);

module.exports = router;
