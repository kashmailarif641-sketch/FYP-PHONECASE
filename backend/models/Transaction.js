const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({

    internalTransactionId: {
        type: String,
        required: true,
        unique: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        required: true
    },

    paymentReference: {
        type: String,  // User entered JazzCash ID etc
        default: null
    },

    status: {
        type: String,
        enum: ["pending", "success", "failed"],
        default: "pending"
    },

    verifiedAt: {
        type: Date
    }

}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);