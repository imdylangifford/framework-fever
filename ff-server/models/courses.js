const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
  framework: String,
  title: String,
  url: String,
  price: String,
  stars: Number
});

module.exports = mongoose.model("Courses", coursesSchema);
