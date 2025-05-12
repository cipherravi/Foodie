const express = require("express");
const router = express.Router();
const v1Routes = require("./v1");
const { userProfile } = require("../controllers");
const { userAuth } = require("../middlewares");

router.use("/v1", v1Routes);

router.get("/profile", userAuth, userProfile);
module.exports = router;
