const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ngoSchema = new Schema({
  ngoId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Ngo = mongoose.model("Ngo", ngoSchema);

module.exports = Ngo;
