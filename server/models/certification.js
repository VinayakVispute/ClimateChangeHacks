const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const certificateSchema = new Schema({
  issueDate: { type: Date, default: Date.now },
  noOfTrees: {
    type: String,
  },
  nameOFNgo: {
    type: String,
  },
  nameOnCertificate: {
    type: String,
  },
  eventName: {
    type: String,
  },
});

const Certificate = mongoose.model("Certificate", certificateSchema);

module.exports = Certificate;
