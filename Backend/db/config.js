const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://ansh132be22:9qwinMcMHKbbcYI7@cluster0.xbc6svj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("DB Connected");
  } catch (err) {
    // console.error(Error: ${err.message});
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
