const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.API_KEY);
module.exports = {
  PORT: process.env.PORT || 3000,
  API_KEY: process.env.API_KEY,
};
