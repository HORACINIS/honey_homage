const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: String,
  details: String,
  image: String,
  price: Number,
  sale: Boolean
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;