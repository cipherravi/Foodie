const mongoose = require("mongoose");
const { Database_Key } = require("./server-config");
async function ConnectDB() {
  await mongoose.connect(Database_Key);
}
module.exports = { ConnectDB };
