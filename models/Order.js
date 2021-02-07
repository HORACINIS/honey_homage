const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({

  user_id: {
      type: String,
      trim: true
      },
  items: {
      type: Array,
    },
  comments: {
      type: String,
      trim: true
    },
  status: {
      type: String,
      trim: true
    },
  total: {
      type: Number
    },
  shippingAddress: {
      type: String
    },
  contactNumber: {
      type: String
    },

});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;