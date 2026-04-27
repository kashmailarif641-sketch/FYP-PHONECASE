const mongoose = require("mongoose");

const premiumGallerySchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,

  source: {
    type: String,
    enum: ["premium", "manual"]
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("PremiumGallery", premiumGallerySchema);
