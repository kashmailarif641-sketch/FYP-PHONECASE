const express = require("express");
const router = express.Router();
const VendorPayout = require("../models/VendorPayout");
const Order = require("../models/order");


// ===============================
// ADMIN INITIATE PAYOUT
// ===============================
router.post("/initiate", async (req, res) => {
    try {

        const {
            vendorId,
            orderId,
            totalAmount,
            paymentMethod,
            reference
        } = req.body;

        // 🔹 Commission Logic (System Controlled)
        const commissionPercent = 10; // 10% fixed
        const commissionAmount = (totalAmount * commissionPercent) / 100;
        const vendorPayable = totalAmount - commissionAmount;

        const newPayout = new VendorPayout({
            payoutId: "PAYOUT-" + Date.now(),
            vendor: vendorId,
            order: orderId,
            totalAmount,
            commissionPercent,
            commissionAmount,
            vendorPayable,
            paymentMethod,
            reference,
            status: "Pending"
        });

        await newPayout.save();

        res.status(201).json({
            message: "Payout initiated successfully",
            payout: newPayout
        });

    } catch (error) {
        console.error("INITIATE PAYOUT ERROR:", error);
        res.status(500).json({ message: "Server Error" });
    }
});


// ===============================
// GET ALL PAYOUTS (Admin)
// ===============================
router.get("/", async (req, res) => {
    try {

        const payouts = await VendorPayout.find()
            .populate("vendor", "name email")
            .populate("order", "orderId totalPrice")
            .sort({ createdAt: -1 });

        res.json(payouts);

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});


// ===============================
// GET VENDOR PAYOUTS (Vendor Side)
// ===============================
router.get("/vendor/:vendorId", async (req, res) => {
    try {

        const payouts = await VendorPayout.find({
            vendor: req.params.vendorId
        })
            .populate("order", "orderId totalPrice")
            .sort({ createdAt: -1 });

        res.json(payouts);

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});


// ===============================
// VENDOR CONFIRM PAYMENT
// ===============================
router.put("/vendor-confirm/:id", async (req, res) => {
    try {

        const payout = await VendorPayout.findById(req.params.id);

        if (!payout) {
            return res.status(404).json({ message: "Payout not found" });
        }

        payout.status = "Paid";
        await payout.save();

        res.json({ message: "Payment confirmed by vendor" });

    } catch (error) {
        console.error("VENDOR CONFIRM ERROR:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;