
import React, { useState } from "react";
import "./royal.css";

const PaymentPage = ({ hallName, price, selectedDate, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }
    alert(`Booking confirmed for ${hallName} on ${selectedDate} via ${paymentMethod}`);
    onClose();
  };

  return (
    <div className="payment-modal">
      <div className="payment-content">
        <h2>Complete Your Booking</h2>
        <p>
          <strong>Hall:</strong> {hallName}
        </p>
        <p>
          <strong>Date:</strong> {selectedDate}
        </p>
        <p>
          <strong>Total Price:</strong> {price}
        </p>

        <h3>Select Payment Method</h3>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="payment"
              value="UPI"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            UPI
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="Credit Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="Debit Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="Pay at Counter"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Pay at Counter
          </label>
        </div>

        <button className="book-btn" onClick={handlePayment}>
          Confirm Booking
        </button>
        <button className="close-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
