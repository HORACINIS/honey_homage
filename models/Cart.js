const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({

  cart_id: {
      type: ObjectId
    },
  product: {
      type: String,
      type: true
    },
  price: {
      type: Number
    },
  quantity: {
      type: Number
    },
  

});

const Cart = mongoose.model("Cart", ProductSchema);

module.exports = Cart;