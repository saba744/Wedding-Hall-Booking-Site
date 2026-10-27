import React from "react";
import "./confirm.css";

const Confirmation = () => {
  return (
    <div className="confirmation-page">
      <h1>Booking Confirmed 🎉</h1>
      <p>Thank you for booking with us! We’ll contact you shortly.</p>
      <button onClick={() => window.location.href = "/"}>Go Back</button>
    </div>
  );
};

export default Confirmation;
