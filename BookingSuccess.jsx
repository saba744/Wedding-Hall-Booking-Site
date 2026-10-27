import React from "react";
import { Link } from "react-router-dom";
import "./bookingSuccess.css";

const BookingSuccess = () => {
  return (
    <div className="success-page">
  <div className="success-container">
    <h1>Booking Completed🎉</h1>
    <p>SHAADI MAI JARUR AANA💖.</p>
    <a href="/home" className="back-btn">Go Back to Home</a>
  </div>
</div>
  )
}

export default BookingSuccess;
