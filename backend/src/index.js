const express = require("express");
const cors = require("cors");
const { ConnectDB, PORT } = require("./config");
const apiRoutes = require("./routes");
const { scheduleNextPing } = require("./utils/ping");
const { allowedOrigins } = require("./utils/constant");
const { StatusCodes } = require("http-status-codes");
const { API_authentication } = require("./middlewares/");
const rateLimit = require("express-rate-limit");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
// Middleware: Rate limiter
const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 mins
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use("/api", API_authentication, apiRoutes);

async function pingServer(req, res) {
  try {
    const response = await fetch("https://keep-alive-rbb2.onrender.com/pong");
    setTimeout(() => {
      pingServer();
    }, 463275); // 8 minutes
    if (response.ok) {
      console.log("Ping Server is up and running");
    } else {
      console.error("Ping Server is down");
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: "Failed to make call" });
  }
}
pingServer();

ConnectDB()
  .then(() => {
    console.log("Database connected succesfully");
    app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
      scheduleNextPing();
    });
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
