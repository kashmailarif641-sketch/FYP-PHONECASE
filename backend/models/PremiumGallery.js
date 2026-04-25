const mongoose = require("mongoose");

const premiumGallerySchema = new mongoose.Schema({
    designName: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    // Fields for designs approved from orders
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    designImage: String,
    designer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

module.exports = mongoose.model("PremiumGallery", premiumGallerySchema);
