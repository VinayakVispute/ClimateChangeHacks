const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const certificateSchema = new Schema({
  certId: { type: String, required: true, unique: true },
  issueDate: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  ngo: { type: Schema.Types.ObjectId, ref: "Ngo", required: true },
});

const Certificate = mongoose.model("Certificate", certificateSchema);

module.exports = Certificate;
