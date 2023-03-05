const express = require("express");
const urlRoute = express.Router();
const urlController = require("../Controller/url.controller");

urlRoute.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
urlRoute.post("/createurl", urlController.createUrl);

module.exports = urlRoute;
