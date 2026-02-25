const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// SIGNUP API
router.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword
    });

    await newUser.save();

    res.json({ message: "User Registered Successfully" });

  } catch (error) {
    console.log(error);
    res.json({ message: "Server Error" });
  }
});

// LOGIN API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ message: "Invalid password" });
    }
    if (user.status === "Blocked") {
      return res.json({ message: "Your account is blocked." });
    }

    if (user.role === "vendor") {
      if (user.status === "Pending") {
        return res.json({ message: "Waiting for admin approval." });
      }
      if (user.status === "Rejected") {
        return res.json({ message: "Your registration was rejected by admin." });
      }
    }

    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.log(error);
    res.json({ message: "Server error" });
  }
});

module.exports = router;