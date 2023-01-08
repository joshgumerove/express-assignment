const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("app working");
});

app.listen(3000);
