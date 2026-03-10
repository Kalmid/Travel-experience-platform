const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    title: String,
    location: String,
    imageUrl: String,
    description: String,
    price: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;