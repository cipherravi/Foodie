const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  address: String,
  landmark: String,
  houseFlatNo: String,
  city: String,
  state: String,
  zip: String,
  lat: String,
  lng: String,
  addressType: { type: String, enum: ["Home", "Work", "Other"] },
});

module.exports = mongoose.model("Address", addressSchema);
