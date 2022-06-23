const express = require("express");
const router = express.Router();
const user = require("./API/user.js");

router.get("/user",user.get);

module.exports = router;