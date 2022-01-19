const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  term: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
  },
  image: {
    type: String,
    default: null,
  },
});

const Card = mongoose.model("Card", CardSchema);
module.exports = Card;
