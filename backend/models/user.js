const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user"
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected", "Blocked", "active"],
    default: "active"
  },
  phone: {
    type: String
  },
  city: {
    type: String
  },
  address: {
    type: String
  },
  jazzcashNumber: {
    type: String
  },
  businessAddress: {
    type: String
  },
  businessName: {
    type: String
  },
  shopName: {
    type: String
  },
  businessType: {
    type: String
  },
  services: {
    type: [String]
  },
  resetToken: {
    type: String
  },
  resetTokenExpiry: {
    type: Date
  }
}, { timestamps: true });

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
