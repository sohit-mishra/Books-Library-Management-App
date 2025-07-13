const dotenv = require("dotenv");
dotenv.config();

const config = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  FRONTEND_URL: process.env.FRONTEND_URL,
  MONGODB_URI: process.env.MONGODB_URI,
};

module.exports = config;
