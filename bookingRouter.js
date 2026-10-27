
const express = require("express");
const Booking = require("../models/booking");
const verifyToken = require("../middleware/auth"); 

const router = express.Router();


router.post("/add", verifyToken, async (req, res) => {
  try {
    const { banquetName, location, price, capacity, bookingDate, paymentMethod } = req.body;

    const newBooking = new Booking({
      userId: req.user.id, 
      banquetName,
      location,
      price,
      capacity,
      bookingDate,
      paymentMethod,
      paymentStatus: "Completed",
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating booking", error });
  }
});


router.get("/my-bookings", verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id });
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching bookings", error });
  }
});

module.exports = router;
