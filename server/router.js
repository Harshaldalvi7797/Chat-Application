const express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.send("server is up and running");
});

module.exports = router;
