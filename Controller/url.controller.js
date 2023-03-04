const url = require("../Models/shorturl.model");

const showUrls = async (req, res, next) => {
  const result = await url.find({});
  res.json(result);
};
