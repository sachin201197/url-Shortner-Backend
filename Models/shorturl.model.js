const mongoose = require("mongoose");

const schema = mongoose.Schema;

const urlSchema = new schema({
  originalUrl: {
    type: String,
  },
  shortUrl: {
    type: String,
  },
});

module.exports = mongoose.model("url", urlSchema);
