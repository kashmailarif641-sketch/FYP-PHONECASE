const mongoose = require("mongoose");

const premiumPaymentSchema = new mongoose.Schema({

    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    amount: Number,

    paymentMethod: String,

    transactionId: String,

    paymentDate: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        enum: ["Pending", "Verified"],
        default: "Pending"
    }

}, { timestamps: true });

module.exports = mongoose.model("PremiumPayment", premiumPaymentSchema);