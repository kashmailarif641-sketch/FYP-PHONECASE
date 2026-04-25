const Activity = require("../models/activity");

const logActivity = async (message, type, status = "info", referenceId = null) => {
    try {
        await Activity.create({
            message,
            type,
            status,
            referenceId
        });
    } catch (error) {
        console.error("Activity log error:", error);
    }
};

module.exports = logActivity;