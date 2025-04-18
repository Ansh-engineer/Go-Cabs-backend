const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017');
    console.log("DB Connected");
  } catch (err) {
    // console.error(Error: ${err.message});
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;