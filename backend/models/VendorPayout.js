const mongoose = require("mongoose");

const vendorPayoutSchema = new mongoose.Schema({
    payoutId: {
        type: String,
        required: true
    },

    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },

    totalAmount: Number,
    commissionPercent: Number,
    commissionAmount: Number,
    vendorPayable: Number,

    paymentMethod: String,
    reference: String,

    status: {
        type: String,
        enum: ["Pending", "Paid"],
        default: "Pending"
    }

}, { timestamps: true });

module.exports = mongoose.model("VendorPayout", vendorPayoutSchema);
