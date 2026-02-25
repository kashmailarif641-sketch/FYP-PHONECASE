const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const logActivity = require("../utils/activitylogger");

// VENDOR SIGNUP
router.post("/signup", async (req, res) => {
    console.log("Vendor Signup Request received:", req.body.email);
    try {
        const {
            name,
            email,
            phone,
            shopName,
            businessAddress,
            city,
            password
        } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newVendor = new User({
            name,
            email,
            phone,
            shopName,
            businessAddress,
            city,
            password: hashedPassword,
            role: "vendor",
            status: "Pending"
        });

        await newVendor.save();
        console.log("Vendor saved successfully:", newVendor.email);

        res.json({
            message: "Vendor registered successfully. Waiting for admin approval."
        });

    } catch (error) {
        console.error("Vendor Signup Error:", error);
        res.status(500).json({ message: "Server error", detail: error.message });
    }
    await logActivity(
        `${name} applied as vendor`,
        "vendor",
        "info"
    );
});

module.exports = router;