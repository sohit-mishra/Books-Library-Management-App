const Book = require("@/models/Book");

const GetAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


module.exports = {GetAllBooks};
