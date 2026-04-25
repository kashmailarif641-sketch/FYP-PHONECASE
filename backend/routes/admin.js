const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Transaction = require("../models/Transaction");
const Order = require("../models/order");
const PremiumGallery = require("../models/PremiumGallery");
const upload = require("../middleware/upload");
// GET ALL USERS
router.get("/users", async (req, res) => {
  try {
    const { search } = req.query;

    let filter = { role: "user" };

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } }
      ];
    }

    const users = await User.find(filter).select("-password");

    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});



// DELETE USER
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// BLOCK / UNBLOCK USER
router.patch("/users/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await User.findByIdAndUpdate(id, { status });

    res.json({ message: "User status updated successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET PENDING VENDORS COUNT
router.get("/pending-vendors-count", async (req, res) => {
  try {
    const count = await User.countDocuments({ role: "vendor", status: "Pending" });
    res.json({ count });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET ALL VENDORS
router.get("/vendors", async (req, res) => {
  try {
    const vendors = await User.find({ role: "vendor" }).select("-password");
    res.json(vendors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE VENDOR STATUS (Approve/Block/Unblock)
router.patch("/vendors/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await User.findByIdAndUpdate(id, { status });

    res.json({ message: "Vendor status updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE VENDOR
router.delete("/vendors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "Vendor deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/pending-vendors-count", async (req, res) => {
  try {
    const count = await User.countDocuments({
      role: "vendor",
      status: "Pending"
    });

    res.json({ count });
  } catch (error) {
    res.json({ message: "Server error" });
  }
});
// =======================================
// GET ALL TRANSACTIONS
// =======================================

router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate("user", "name email")
      .populate("order", "orderId")
      .sort({ createdAt: -1 });

    res.json(transactions);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching transactions" });
  }
});

// =======================================
// CONFIRM TRANSACTION
// =======================================
router.put("/transactions/:id/confirm", async (req, res) => {
  try {

    const transaction = await Transaction.findById(req.params.id).populate("order");

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    transaction.status = "success";
    transaction.verifiedAt = new Date();
    await transaction.save();

    // update order payment status
    const order = await Order.findById(transaction.order._id);
    order.payment.status = "paid";
    await order.save();

    res.json({ message: "Payment confirmed successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// =======================================
// FAIL TRANSACTION
// =======================================
// FAIL PAYMENT
router.put("/transactions/:id/fail", async (req, res) => {
  try {

    const transaction = await Transaction.findById(req.params.id).populate("order");

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    transaction.status = "failed";
    await transaction.save();

    const order = await Order.findById(transaction.order._id);
    order.payment.status = "failed";
    await order.save();

    res.json({ message: "Payment marked as failed" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// =======================================
// PREMIUM GALLERY MANAGEMENT
// =======================================

// ADD DESIGN
router.post("/add-design", upload.single("image"), async (req, res) => {
  try {
    const { designName, price } = req.body;

    const imageUrl = req.file
      ? `http://localhost:5000/uploads/${req.file.filename}`
      : "";

    const newDesign = new PremiumGallery({
      designName,
      price,
      image: imageUrl
    });

    await newDesign.save();

    res.status(201).json({
      success: true,
      message: "Design added successfully",
      design: newDesign
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET ALL DESIGNS
router.get("/all-designs", async (req, res) => {
  try {
    const designs = await PremiumGallery.find().sort({ createdAt: -1 });

    res.status(200).json(designs);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

