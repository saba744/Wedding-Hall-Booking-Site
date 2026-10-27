
const express = require("express");
const DreamVenue = require("../models/DreamVenue");
const authMiddleware = require("../middleware/auth");

const router = express.Router();


// Add to Dream Venues
router.post("/add", authMiddleware, async (req, res) => {
  try {
    console.log("📩 Data received from frontend:", req.body); // Debugging
    const { venueName, location, price, capacity, image } = req.body;

    if (!venueName || !location || !price || !capacity || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newVenue = new DreamVenue({
      userId: req.user.id,
      venueName,
      location,
      price,
      capacity,
      image,
    });

    await newVenue.save();
    res.status(201).json({ message: "Venue added to Dream Venues", newVenue });
  } catch (error) {
    console.error("❌ Error adding venue:", error);
    res.status(500).json({ message: "Error adding venue", error: error.message });
  }
});


// Get all Dream Venues for logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const venues = await DreamVenue.find({ userId: req.user.id });
    res.json(venues);
  } catch (error) {
    console.error("❌ Error fetching all venues:", error);
    res.status(500).json({ message: "Error fetching Dream Venues", error: error.message });
  }
});


// Get Single Dream Venue by ID
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const venue = await DreamVenue.findOne({
      _id: req.params.id,
      userId: req.user.id, //  Ensures user can access only their own venue
    });

    if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
    }

    res.json(venue);
  } catch (error) {
    console.error("❌ Error fetching venue by ID:", error);
    res.status(500).json({ message: "Error fetching venue", error: error.message });
  }
});


//  Remove venue
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedVenue = await DreamVenue.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!deletedVenue) {
      return res.status(404).json({ message: "Venue not found or already deleted" });
    }

    res.json({ message: "Venue removed from Dream Venues" });
  } catch (error) {
    console.error("❌ Error deleting venue:", error);
    res.status(500).json({ message: "Error removing venue", error: error.message });
  }
});

module.exports = router;
