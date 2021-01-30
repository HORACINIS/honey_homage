const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HoneyHUDSchema = new Schema({
  
  userAccounts: {
    type: Number
  },

  totalSales: {
    type: Number
  },

  totalRevenue: {
    type: Number
  }

});

const HoneyHUD = mongoose.model("HoneyHUD", HoneyHUDSchema);

module.exports = HoneyHUD;