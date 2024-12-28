const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  pic: {
    type: String,
  },
});

module.exports = Courses = new mongoose.model("courses", coursesSchema);