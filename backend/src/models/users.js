const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      set: (value) => value.replace(/\s+/g, " ").trim(),
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    gender: {
      type: String,
      enum: ["", "Male", "Female", "Other"],
    },
    age: {
      type: Number,
      min: 10,
      max: 120,
    },
    mobileNo: {
      type: String,
      required: [true, "Mobile number is required"],
      unique: true,
      match: [/^[6-9]\d{9}$/, "Mobile number must start with 6, 7, 8, or 9"],
    },
    emailId: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
      unique: true,
      sparse: true, // prevents unique on null
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      default: null,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
