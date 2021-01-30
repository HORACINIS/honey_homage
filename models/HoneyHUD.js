const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HoneyHUDSchema = new Schema({
  userAccounts: Number,
  totalSales: Number,
  totalRevenue: Number
});

const HoneyHUD = mongoose.model("HoneyHUD", HoneyHUDSchema);

module.exports = HoneyHUD;