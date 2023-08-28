const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./util/paths");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
// this middleware takes the body parser as an argument because the method signature is the
//  same for what it expects, including calling next at the end

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "not-found.html"));
});

app.listen(3000);
