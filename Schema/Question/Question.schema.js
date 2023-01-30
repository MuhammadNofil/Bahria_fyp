const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: { type: String, required: true },
  answer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TextAnswer",
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChartAnswer",
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FlowchartAnswer",
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Drawing",
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
