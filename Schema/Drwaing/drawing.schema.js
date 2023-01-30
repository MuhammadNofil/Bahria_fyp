const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrawingSchema = new Schema({
  lines: {
    type: Array,
    required: true,
  },
  stars: { type: Number, default: 0 },
  text: {
    type: String,
    required: true,
  },
  shapes: {
    type: Array,
    required: true,
  },
});
const Drwaing = mongoose.model("Drawing", DrawingSchema);
module.exports = Drwaing;
