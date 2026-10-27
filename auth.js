
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); 
require("dotenv").config();

const router = express.Router();//it helps to handle routes separately

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("📩 Signup Body:", req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully" });

  } catch (error) {
    console.error("❌ Signup Error:", error.message);  
    res.status(500).json({ success: false, message: error.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("📩 Login Body:", req.body);

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    if (!process.env.JWT_SECRET) {
      console.error("❌ JWT_SECRET missing in .env");
      return res.status(500).json({ success: false, message: "JWT_SECRET not set in .env" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("❌ Login Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
