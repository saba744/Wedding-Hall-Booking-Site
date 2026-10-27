import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./royal.css";

import heritageMain from "./image/heri.jpg";
import area1 from "./image/stage2.jpg";
import area2 from "./image/haldi2.jpg";
import area3 from "./image/mehendi3.jpg";
import area4 from "./image/dinner2.jpg";

const Heritage = () => {
  const [wishlist, setWishlist] = useState(false);
  const [date, setDate] = useState("");
  const [showBooking, setShowBooking] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ Add venue to wishlist
  const handleWishlist = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add this venue to your Dream Venues ❤️");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/dream-venues/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          venueName: "Grand Heritage Hall",
          location: "Mumbai",
          price: 350000,
          capacity: 800,
          image: heritageMain,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setWishlist(true);
        alert("Venue added to your Dream Venues ❤️");
      } else {
        alert(`❌ Failed to add: ${data.message}`);
      }
    } catch (error) {
      console.error("Error adding venue:", error);
      alert("⚠️ Could not connect to the server. Please try again.");
    }
  };

  // ✅ Handle booking date selection
  const handleBook = () => {
    if (!date) {
      alert("Please select a booking date before proceeding.");
      return;
    }
    setShowBooking(true);
  };

  // ✅ Send booking data to backend
  const sendBookingToServer = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first to make a booking.");
        setLoading(false);
        return;
      }

      const response = await fetch("http://localhost:5000/api/booking/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          banquetName: "Grand Heritage Hall",
          location: "Mumbai",
          price: 350000,
          capacity: 800,
          bookingDate: new Date(date),
          paymentMethod: paymentMethod,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Booking Saved:", data);
        navigate("/booking-success");
      } else {
        alert(`❌ Failed to save booking: ${data.message}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("⚠️ Could not connect to server. Check your backend.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle payment form
  const handlePayment = (e) => {
    e.preventDefault();
    if (
      (paymentMethod === "credit" || paymentMethod === "debit") &&
      (!cardDetails.name || !cardDetails.number || !cardDetails.expiry || !cardDetails.cvv)
    ) {
      alert("Please fill all credit/debit card details!");
      return;
    }

    sendBookingToServer();
    setShowBooking(false);
  };

  return (
    <div className="hall-details">
      {/* Title + Wishlist */}
      <div className="hall-header">
        <h1>Grand Heritage Hall</h1>
        <span
          className={`wishlist-heart ${wishlist ? "active" : ""}`}
          onClick={handleWishlist}
        >
          {wishlist ? "❤️" : "🤍"}
        </span>
      </div>

      {/* Main Image */}
      <img src={heritageMain} alt="Grand Heritage Hall" className="hall-img" />
      <p>
        Step into the charm of tradition blended with elegance. Grand Heritage Hall features royal
        interiors, antique decor, and a spacious ambience designed for grand weddings and cultural
        events. Perfect for those who want to celebrate in a regal way.
      </p>

      {/* Areas Section */}
      <div className="area-section">
        <div className="area-card">
          <img src={area1} alt="Wedding Stage" />
          <h3>Wedding Stage</h3>
          <p>A majestic stage setup ideal for royal weddings and receptions.</p>
        </div>
        <div className="area-card">
          <img src={area2} alt="Haldi Area" />
          <h3>Haldi Area</h3>
          <p>Traditional dining section with capacity of 400+ guests.</p>
        </div>
        <div className="area-card">
          <img src={area3} alt="Mehendi Area" />
          <h3>Mehendi Area</h3>
          <p>Open-air heritage garden for evening functions and photo sessions.</p>
        </div>
        <div className="area-card">
          <img src={area4} alt="Dinner Area" />
          <h3>Dinner Area</h3>
          <p>Luxurious lounge with royal seating for special guests.</p>
        </div>
      </div>

      {/* Info Section */}
      <ul>
        <li><strong>Location:</strong> Mumbai</li>
        <li><strong>Price:</strong> ₹3,50,000</li>
        <li><strong>Capacity:</strong> 800+</li>
        <li><strong>Availability:</strong> Available</li>
        <li><strong>AC:</strong> Yes</li>
        <li className="date-picker-row">
          <strong>Booking Date:</strong>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </li>
      </ul>

      {/* Book Button */}
      <button className="book-btn" onClick={handleBook}>
        {loading ? "Saving..." : "Book Now"}
      </button>

      {/* Booking Modal */}
      {showBooking && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Complete Your Booking</h2>
            <form onSubmit={handlePayment}>
              <label>Choose Payment Method:</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">--Select--</option>
                <option value="upi">UPI</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="counter">Pay at Counter</option>
              </select>

              {(paymentMethod === "credit" || paymentMethod === "debit") && (
                <div className="card-details">
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    value={cardDetails.name}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, name: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Card Number"
                    maxLength="16"
                    value={cardDetails.number}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, number: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Expiry (MM/YY)"
                    value={cardDetails.expiry}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, expiry: e.target.value })
                    }
                  />
                  <input
                    type="password"
                    placeholder="CVV"
                    maxLength="3"
                    value={cardDetails.cvv}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cvv: e.target.value })
                    }
                  />
                </div>
              )}

              <div className="modal-buttons">
                <button type="submit" className="confirm-btn">
                  Confirm Booking
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowBooking(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Heritage;