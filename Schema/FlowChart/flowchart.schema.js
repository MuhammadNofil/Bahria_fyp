const mongoose = require("mongoose");

const FlowChartanswerSchema = new mongoose.Schema({
  id: { type: String },
  answer: [
    {
      data: {
        label: { type: String },
      },
      position: {
        x: { type: Number },
        y: { type: Number },
      },
    },
  ],
  stars: { type: Number, default: 0 },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
});
const FlowchartAnswer = mongoose.model(
  "FlowchartAnswer",
  FlowChartanswerSchema
);
module.exports = FlowchartAnswer;
