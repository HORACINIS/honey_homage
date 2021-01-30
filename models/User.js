const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  author: String,
  title: String
});

const Book = mongoose.model("Book", BookSchema); // This "Book" in this line...

module.exports = Book;