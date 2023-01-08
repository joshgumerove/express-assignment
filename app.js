const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("app working");
  next();
});

app.use((req, res, next) => {
  console.log("another console log");
  next();
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(3000);
