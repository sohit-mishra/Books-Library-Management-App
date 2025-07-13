const User = require("@/models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CreateUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed });

    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({ message: "Logged in", user: { email: user.email } });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token").json({ message: "Logged out" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const userInfo = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("email");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { CreateUser, loginUser, logoutUser, userInfo };
