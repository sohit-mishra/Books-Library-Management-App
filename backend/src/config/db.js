const mongoose = require("mongoose");
const config = require("@/config/env");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Connect to Database");
  } catch (error) {
    console.log("Connect to Database", error);
  }
};

module.exports = connectToDatabase;
