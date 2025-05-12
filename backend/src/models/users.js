const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  age: { type: Number },
  location: { type: String },
  mobileNo: { type: String, required: true, unique: true },
  emailId: { type: String },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Users", userSchema);
