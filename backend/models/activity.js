const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    message: String,
    type: {
        type: String,
        enum: ["user", "vendor", "order", "payment", "design", "system"]
    },
    status: {
        type: String,
        enum: ["info", "success", "warning", "error"],
        default: "info"
    },
    referenceId: String,   // optional (orderId, userId, etc.)
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Activity", activitySchema);