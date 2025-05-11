const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String },
  age: { type: Number },
  location: { type: String },
  mobileNo: { type: Number, required: true, unique: true },
  emailId: { type: String, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Users", userSchema);
