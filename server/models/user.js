const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true }, //user.email
  name: { type: String, required: true }, //user.name
  nickname: { type: String, required: true, unique: true }, //user.nickname
  createdAt: { type: Date, default: Date.now },
  picture: { type: String, required: true }, //user.picture
  email_verified: { type: Boolean, required: true }, //user.emailVerified
});

const User = mongoose.model("User", userSchema);

module.exports = User;
