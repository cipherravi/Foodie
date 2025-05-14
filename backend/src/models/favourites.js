const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
  favItems: Array,
});

module.exports = mongoose.model("Favourite", favouriteSchema);
