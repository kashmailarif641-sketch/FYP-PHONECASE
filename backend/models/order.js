const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderId: {
        type: String,
    },

    brand: String,
    model: String,
    material: String,

    totalPrice: Number,

    fullName: String,
    address: String,
    phone: String,

    isPremium: {
        type: Boolean,
        default: false
    },

    premiumPrice: {
        type: Number,
        default: null
    },

    premiumStatus: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: null
    },

    payment: {
        mode: String,
        trxId: String,
        status: {
            type: String,
            default: "pending",
            enum: ["pending", "paid", "failed"]
        }
    },

    status: {
        type: String,
        default: "pending",
        enum: ["pending", "processing", "shipped", "delivered", "cancelled"]
    },

    designImage: {
        type: String
    },
    assignedVendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },

    orderStatus: {
        type: String,
        enum: ["Pending", "In Production", "Completed", "Assigned", "Processing", "Shipped", "Delivered", "Cancelled"],
        default: "Pending"
    },

    paymentStatus: {
        type: String,
        enum: ["Pending", "Verified"],
        default: "Pending"
    }

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);