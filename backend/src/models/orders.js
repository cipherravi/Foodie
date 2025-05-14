const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  itemUrl: String,
  itemName: String,
  itemPrice: String,
  itemQuantity: String,
});

module.exports = mongoose.model("Orders", ordersSchema);
