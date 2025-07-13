const MyBooks = require("@/models/MyBooks");

const UserBooks = async (req, res) => {
  try {
    const books = await MyBooks.find({ userId: req.userId }).populate("bookId");
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const AddUserBooks = async (req, res) => {
  const { bookId } = req.params;
  try {
    const exists = await MyBooks.findOne({ userId: req.userId, bookId });
    if (exists) return res.status(400).json({ message: "Already added" });

    const newEntry = await MyBooks.create({ userId: req.userId, bookId });
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const UpdateReadingStatus = async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;
  try {
    const entry = await MyBooks.findOneAndUpdate(
      { userId: req.userId, bookId },
      { status },
      { new: true }
    );
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const BookRating = async (req, res) => {
  const { bookId } = req.params;
  const { rating } = req.body;
  try {
    const entry = await MyBooks.findOneAndUpdate(
      { userId: req.userId, bookId },
      { rating },
      { new: true }
    );
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { UserBooks, AddUserBooks, UpdateReadingStatus, BookRating };
