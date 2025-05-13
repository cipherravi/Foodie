const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  landmark: String,
  houseNo: String,
  city: String,
  state: String,
  zip: String,
});

module.exports = mongoose.model("Address", addressSchema);
