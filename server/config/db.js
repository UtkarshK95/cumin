const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(
    `MongoDB Connected: ${conn.connection.host}`.blue.underline.italic
  );
};

module.exports = connectDB;
