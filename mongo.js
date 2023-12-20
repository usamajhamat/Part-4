const mongoose = require("mongoose");

const password = process.env.PASSWORD;

const mongoUrl = `mongodb+srv://usamajhamat111:${password}@cluster0.pwx9zyn.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl).then(() => {
  console.log("Connected to MongoDB-hhhhhhhhhhh");
});

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

const Blog = mongoose.model("Blog", blogSchema);
