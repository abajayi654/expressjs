const path = require("path");

const express = require("express");

const rootDir = require("../util/paths");

const router = express.Router();

router.get("/add-product", (res, req, next) => {
  console.log("returns a html form");
  req.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body.title);
  // this doesn't parse the request body, this needs to be already done
  res.redirect("/");
});

module.exports = router;
