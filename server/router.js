const express = require("express");
const router = express.Router();
const user = require("./API/user.js");

router.post("/user",user.post);

module.exports = router;