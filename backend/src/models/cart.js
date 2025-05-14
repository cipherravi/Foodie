const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  items: Array,
});

module.exports = mongoose.model("Cart", cartSchema);
