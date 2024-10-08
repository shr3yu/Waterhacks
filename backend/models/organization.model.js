const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orgSchema = new Schema({
  name: { type: String },
  tags: { type: [String] },
  description: { type: String },
  link: { type: String },
});

module.exports = mongoose.model("Organization", orgSchema);
