const mongoose = require("mongoose");

const designSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    designName: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    canvasData: {
        type: Object,
        required: true
    },
    previewImage: {
        type: String,
        required: true
    },
    material: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
},
    {timestamps: true
});

module.exports = mongoose.model("Design", designSchema);