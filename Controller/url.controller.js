const url = require("../Models/shorturl.model");

const createUrl = (req, res) => {
  const URL = new url({
    originalUrl: req.body.originalUrl,
    shortUrl: req.body.shortUrl,
  });
  URL.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ meaasge: err.message || "User creation got failed" });
    });
};

module.exports = {
  createUrl,
};
