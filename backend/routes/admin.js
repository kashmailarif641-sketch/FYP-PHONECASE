const express = require("express");
const router = express.Router();
const User = require("../models/user");

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

module.exports = router;

