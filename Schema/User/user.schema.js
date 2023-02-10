const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  isSubsribed: { type: Boolean, default: false },
  Skills: { type: String },
  qualification: { type: String },
  description: { type: String },
  services: { type: String },
  occupation: { type: String },
  img: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
