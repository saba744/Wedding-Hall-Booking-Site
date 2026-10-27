const express = require("express");
const router = express.Router();
const Banquet = require("../models/Banquet"); // importing the banquet models 

// Search Banquet Halls
router.get("/search", async (req, res) => {
  try {
    const query = req.query.q; // frontend query
    let halls;

    if (!query || query.toLowerCase() === "hall") {
      halls = await Banquet.find();
    } else {
    //specific search
      halls = await Banquet.find({
        venueName: { $regex: query, $options: "i" }, // case-insensitive search
      });
    }

    res.json(halls);
  } catch (error) {
    console.error("Error searching banquet halls:", error);
    res.status(500).json({ message: "Server error while searching halls" });
  }
});

module.exports = router;
