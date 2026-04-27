const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const Transaction = require("../models/Transaction");
const PremiumGallery = require("../models/PremiumGallery");
const PremiumPayment = require("../models/PremiumPayment");

console.log("ORDER ROUTE FILE LOADED");

// ===============================
// PLACE ORDER
// ===============================
router.post("/place-order", async (req, res) => {
    try {

        const generatedOrderId = "ORD-" + Date.now();

        const newOrder = new Order({
            ...req.body,
            orderId: generatedOrderId
        });

        await newOrder.save();

        const newTransaction = new Transaction({
            internalTransactionId: "TXN-" + Date.now(),
            user: newOrder.userId,
            order: newOrder._id,
            amount: newOrder.totalPrice,
            paymentMethod: newOrder.payment?.mode || "COD",
            paymentReference: newOrder.payment?.trxId || null,
            status: "pending"
        });

        await newTransaction.save();

        res.status(201).json({
            message: "Order placed successfully",
            order: newOrder
        });

    } catch (err) {
        console.log("FULL ERROR:", err);
        console.log("ERROR DETAILS:", err.errors);
        res.status(500).json({ message: err.message });
    }
});


// ===============================
// 🔥 STATIC ROUTES FIRST
// ===============================

// GET Pending Premium
router.get("/premium", async (req, res) => {
    try {
        const premiumOrders = await Order.find({
            isPremium: true,
            premiumStatus: { $in: ["pending", "approved"] }
        })
            .populate("userId", "name email jazzcashNumber")
            .sort({ createdAt: -1 });

        res.json(premiumOrders);

    } catch (error) {
        console.error("PREMIUM ERROR:", error);
        res.status(500).json({ message: "Server error" });
    }
});
// GET Approved Premium
router.get("/premium-approved", async (req, res) => {
    try {
        const approvedPremium = await Order.find({
            isPremium: true,
            premiumStatus: "approved"
        })
            .populate("userId", "name email jazzcashNumber")
            .sort({ createdAt: -1 });

        res.json(approvedPremium);

    } catch (error) {
        console.error("PREMIUM APPROVED ERROR:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ===============================
// PREMIUM PAYMENT ROUTES
// ===============================

// SAVE PREMIUM PAYMENT
router.post("/premium-payment/save", async (req, res) => {
    try {
        const { orderId, userId, amount, paymentMethod, transactionId, paymentDate } = req.body;

        const newPayment = new PremiumPayment({
            orderId,
            userId,
            amount,
            paymentMethod,
            transactionId,
            paymentDate,
            status: "Pending"
        });

        await newPayment.save();

        // Also update the Order status
        await Order.findByIdAndUpdate(orderId, {
            premiumStatus: "approved",
            paymentStatus: "Pending"
        });

        res.status(201).json({ message: "Premium payment recorded in DB", payment: newPayment });

    } catch (error) {
        console.error("SAVE PAYMENT ERROR:", error);
        res.status(500).json({ message: "Failed to save payment" });
    }
});

// GET ALL PREMIUM PAYMENTS
router.get("/premium-payment/all", async (req, res) => {
    try {
        const payments = await PremiumPayment.find()
            .populate("orderId", "orderId")
            .populate("userId", "name email jazzcashNumber")
            .sort({ createdAt: -1 });

        res.json(payments);
    } catch (error) {
        console.error("FETCH PAYMENTS ERROR:", error);
        res.status(500).json({ message: "Failed to fetch payments" });
    }
});

// GET PREMIUM PAYMENT BY ORDER ID
router.get("/premium-payment/order/:orderId", async (req, res) => {
    try {
        const payment = await PremiumPayment.findOne({ orderId: req.params.orderId })
            .populate("userId", "name email");
        
        if (!payment) {
            return res.status(404).json({ message: "Payment details not found" });
        }
        
        res.json(payment);
    } catch (error) {
        console.error("FETCH ORDER PAYMENT ERROR:", error);
        res.status(500).json({ message: "Failed to fetch payment details" });
    }
});

// CONFIRM PREMIUM PAYMENT
router.put("/premium-payment/:id/confirm", async (req, res) => {
    try {
        const updatedPayment = await PremiumPayment.findByIdAndUpdate(
            req.params.id,
            { status: "Verified" },
            { new: true }
        );

        if (!updatedPayment) {
            return res.status(404).json({ message: "Payment record not found" });
        }

        // Also update the Order status
        await Order.findByIdAndUpdate(updatedPayment.orderId, {
            paymentStatus: "Verified"
        });

        res.json({ message: "Payment verified successfully", payment: updatedPayment });
    } catch (error) {
        console.error("CONFIRM PAYMENT ERROR:", error);
        res.status(500).json({ message: "Failed to verify payment" });
    }
});

// NEW: User confirms payment
router.put("/:id/confirm-payment", async (req, res) => {
    try {
        const orderId = req.params.id;
        
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        order.paymentStatus = "Verified";
        await order.save();

        // Also update the PremiumPayment record if it exists
        await PremiumPayment.findOneAndUpdate(
            { orderId: orderId },
            { status: "Verified" }
        );

        res.json({ message: "Payment confirmed successfully", order });
    } catch (error) {
        console.error("USER CONFIRM PAYMENT ERROR:", error);
        res.status(500).json({ message: "Failed to confirm payment" });
    }
});

// Get orders of specific user
router.get("/user/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        
        // Validate if userId is a valid ObjectId
        if (!userId || userId === "null" || userId === "undefined" || userId.length !== 24) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        const orders = await Order.find({ userId: userId })
            .sort({ createdAt: -1 });

        res.json(orders);
    } catch (error) {
        console.error("FETCH USER ORDERS ERROR:", error);
        res.status(500).json({ message: "Failed to fetch user orders" });
    }
});

// Get all orders
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("userId", "name email")
            .populate("assignedVendor", "name email")
            .sort({ createdAt: -1 });

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders" });
    }
});


// ===============================
// UPDATE ROUTES
// ===============================

// Approve Premium
router.put("/:id/premium-approve", async (req, res) => {
    try {

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        order.premiumStatus = "approved";
        order.payment.status = "paid";
        order.addedToGallery = true;

        await order.save();

        // Add to Premium Gallery collection
        const newPremium = new PremiumGallery({
            orderId: order._id,
            designImage: order.designImage,
            designer: order.userId,
            price: order.premiumPrice || order.totalPrice
        });

        await newPremium.save();

        res.json({ message: "Premium approved & added to gallery" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Premium approval failed" });
    }
});

// Reset Gallery Flag
router.put("/:id/premium-unapprove", async (req, res) => {
    try {
        await Order.findByIdAndUpdate(req.params.id, { addedToGallery: false });
        res.json({ message: "Gallery flag reset" });
    } catch (error) {
        res.status(500).json({ message: "Failed to reset gallery flag" });
    }
});

// Reject Premium
router.put("/:id/premium-reject", async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                premiumStatus: "rejected",
                status: "cancelled"
            },
            { new: true }
        );

        res.json(updatedOrder);

    } catch (error) {
        res.status(500).json({ message: "Premium rejection failed" });
    }
});

// Update Order Status
router.put("/:id/status", async (req, res) => {
    try {
        const { status } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { orderStatus: status },
            { new: true }
        );

        res.json(updatedOrder);

    } catch (error) {
        res.status(500).json({ message: "Status update failed" });
    }
});

// Assign Vendor
router.put("/:id/assign", async (req, res) => {
    try {
        const { vendorId } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                assignedVendor: vendorId,
                orderStatus: "Processing"
            },
            { new: true }
        );

        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: "Vendor assignment failed" });
    }
});

// Get vendor dashboard summary
router.get("/vendor/dashboard/:vendorId", async (req, res) => {
    try {
        const vendorId = req.params.vendorId;

        const assignedOrders = await Order.countDocuments({
            assignedVendor: vendorId
        });

        const processing = await Order.countDocuments({
            assignedVendor: vendorId,
            orderStatus: "Processing"
        });

        const completed = await Order.countDocuments({
            assignedVendor: vendorId,
            orderStatus: "Completed"
        });

        const recentOrders = await Order.find({
            assignedVendor: vendorId
        })
            .sort({ createdAt: -1 })
            .limit(5)
            .populate("userId", "name"); // populated userId as per schema

        res.json({
            assignedOrders: assignedOrders || 0,
            inProduction: processing || 0,
            completed: completed || 0,
            recentOrders: recentOrders || []
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Get all assigned orders for vendor
router.get("/vendor/assigned/:vendorId", async (req, res) => {
    try {
        const vendorId = req.params.vendorId;
        const { status, search } = req.query;

        let filter = { assignedVendor: vendorId };

        // ✅ Filter by Status
        if (status && status !== "All") {
            filter.orderStatus = status;
        }

        // ✅ Search by Order ID or Customer Name
        if (search && search.trim() !== "") {
            filter.$or = [
                { orderId: { $regex: search, $options: "i" } },
                { fullName: { $regex: search, $options: "i" } }
            ];
        }

        const orders = await Order.find(filter)
            .sort({ createdAt: -1 });

        res.json(orders);

    } catch (error) {
        console.error("VENDOR ASSIGNED ERROR:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Vendor updates order status
router.put("/vendor/update-status/:orderId", async (req, res) => {
    try {
        const { orderStatus } = req.body;

        const order = await Order.findById(req.params.orderId);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        order.orderStatus = orderStatus;
        await order.save();

        res.json({ message: "Order status updated" });

    } catch (error) {
        console.error("VENDOR STATUS UPDATE ERROR:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

// 🔥 DYNAMIC ROUTE LAST
router.get("/:id", async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.json(order);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;