const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

  title: {
      type: String,
      trim: true
    },
  details: {
      type: String,
      trim: true
    },
  image: {
      type: String
    },
  price: {
      type: Number
    },
  sale: {
      type: Boolean
    },
  inStock: {
      type: Boolean
    },

});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;