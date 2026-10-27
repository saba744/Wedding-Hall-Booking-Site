
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./dreamvenues.css";

const DreamVenues = () => {
  const [venues, setVenues] = useState([]);
  const navigate = useNavigate();

  //  Fetch wishlist venues
  const fetchVenues = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login to see your Dream Venues!");

    try {
      const response = await fetch("http://localhost:5000/api/dream-venues", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      console.log("API Response in DreamVenues.jsx:", data);

      if (response.ok) {
        setVenues(data);
      } else {
        alert(`❌ Failed to fetch Dream Venues: ${data.message}`);
      }
    } catch (error) {
      console.error("Error fetching dream venues:", error);
      alert("⚠️ Could not connect to the server.");
    }
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  //  Delete venue
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login to manage your Dream Venues!");

    if (!window.confirm("Are you sure you want to remove this venue?")) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/dream-venues/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Venue removed from Dream Venues ❤️‍🔥");
        setVenues((prev) => prev.filter((venue) => venue._id !== id));
      } else {
        alert(`❌ Failed to delete: ${data.message}`);
      }
    } catch (error) {
      console.error("Error deleting venue:", error);
      alert("⚠️ Could not connect to the server.");
    }
  };

  return (
    <div className="dream-venues-page">
      <h1 className="title">Your Dream Venues 💗</h1>

      {Array.isArray(venues) && venues.length > 0 ? (
        <div className="venues-grid">
          {venues.map((venue, index) => (
            <div key={venue._id || index} className="venue-card">
              <Link to={`/dreamvenues/${venue._id}`}>
                <img
                  src={venue.image || "/placeholder.jpg"}
                  alt={venue.venueName || "Venue"}
                  className="venue-image"
                />
              </Link>
              <h3 className="venue-name">{venue.venueName || "No Name"}</h3>
              <button
                onClick={() => handleDelete(venue._id)}
                className="delete-btn"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-venues">No venues added yet 😢</p>
      )}
    </div>
  );
};

export default DreamVenues;
