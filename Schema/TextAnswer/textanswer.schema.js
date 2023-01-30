const mongoose = require("mongoose");

const TextanswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
  },
  stars: { type: Number, default: 0 },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
});
const TextAnswer = mongoose.model("TextAnswer", TextanswerSchema);
module.exports = TextAnswer;
