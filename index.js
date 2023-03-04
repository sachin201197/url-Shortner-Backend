const express = require("express");
const connectMongo = require("./dbConfig/db");
const url = require("./Routes/url.route");
const app = express();
app.use(express.json());
connectMongo();

app.use("/urlcreator", url);

app.listen(8080, () => {
  console.log("Running on 8080");
});
