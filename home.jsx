import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Input  state
  const navigate = useNavigate(); // Navigate 

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert("Please type a hall name or 'hall' to search");
      return;
    }
    // Search query  navigate to venue page
    navigate(`/banquet?search=${searchQuery}`);
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src="/logo1.png" alt="Logo" />
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            Go
          </button>
        </div>

        {/* Nav Links */}
        <ul>
          <li><Link to="/banquet">VENUES</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/story">OUR-STORY</Link></li>
          <li><Link to="/dreamvenues">DREAM-VENUES</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <p className="tagline">♥ Making Your Day Special ♥</p>
          <h3>WE ACCOMPANY YOU</h3>
          <p className="desc">
            A father’s heart holds both joy and tears, for today he walks his little girl
            into a new chapter, entrusting her hand to someone else, while holding her
            forever in his heart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
