const express = require('express');
const router = express.Router();
const {GetAllBooks} = require('@/controllers/BookController');

router.get('/', GetAllBooks);

module.exports = router;
