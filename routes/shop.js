const path = require("path");

const express = require("express");

const rootDir = require("../util/paths");

const router = express.Router();

router.get("/", (res, req, next) => {
  console.log("generic middleware");
  req.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
