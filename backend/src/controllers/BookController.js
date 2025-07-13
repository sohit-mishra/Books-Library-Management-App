const Book = require("@/models/Book");

const GetAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const uploadImage = async(req, res)=>{
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    return res.status(200).json({
      message: "Image uploaded successfully",
      imageUrl: req.file.path,
    });
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
}

module.exports = {GetAllBooks, uploadImage};
