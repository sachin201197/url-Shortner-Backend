const express = require("express");
const urlRoute = express.Router();
const urlController = require("../Controller/url.controller");

urlRoute.get("/", urlController.showUrls);
urlRoute.post("/createurl", urlController.createUrl);

module.exports = urlRoute;
