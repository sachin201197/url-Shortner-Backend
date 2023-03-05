const express = require("express");
const connectMongo = require("./dbConfig/db");
const url = require("./Routes/url.route");
const app = express();
app.use(express.json());
connectMongo();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/urlcreator", url);

app.get("/", (req, res) => {
  res.send("Welcome to node");
});
app.listen(8080, () => {
  console.log("Running on 8080");
});
