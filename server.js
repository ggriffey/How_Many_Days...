const pug = require("pug");
const express = require("express");

const app = express();

app.set("view engine", "pug");

const compiledPug = pug.renderFile("./views/index.pug");

app.get("/", (req, res) => {
  res.send(compiledPug);
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
