
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/bookingRouter");
const dreamVenuesRoutes = require("./routes/dreamVenuesRouter");
const banquetRoutes = require("./routes/banquetRouter");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/dream-venues", dreamVenuesRoutes);
app.use("/api/banquet", banquetRoutes);
 

// Basic route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working properly 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
