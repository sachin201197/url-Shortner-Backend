const express = require("express");
const connectMongo = require("./dbConfig/db");

const app = express();

connectMongo();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(8080, () => {
  console.log("Running on 8080");
});
