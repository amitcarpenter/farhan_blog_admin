const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  author: {
    type: String,
    default: "malik farhan",
  },
  category: {
    type: String,
    default: "real estate",
  },
  post_time: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
