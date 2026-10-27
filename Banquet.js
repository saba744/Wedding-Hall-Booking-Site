const mongoose = require("mongoose");

const banquetSchema = new mongoose.Schema(
  {
    venueName: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Banquet", banquetSchema);
