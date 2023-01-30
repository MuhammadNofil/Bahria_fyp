const mongoose = require("mongoose");

const ChartanswerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  chartdata: [
    {
      type: Object,
      required: true,
    },
  ],
  stars: { type: Number, default: 0 },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
});
const Chart = mongoose.model("ChartAnswer", ChartanswerSchema);
module.exports = Chart;
