const { ConnectDB } = require("./database-config");
const { PORT, API_KEY } = require("./server-config");

module.exports = {
  ConnectDB,
  PORT,
  API_KEY,
};
