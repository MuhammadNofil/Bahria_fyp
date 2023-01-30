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
  Skills: { type: Array },
  qualification: { type: String },
  services: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
