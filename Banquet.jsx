import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./banquet.css";

import banquet1 from "./image/villa1.jpg";
import banquet2 from "./image/crystal.jpg";
import banquet3 from "./image/heri.jpg";
import banquet4 from "./image/banquet5.jpg";
import banquet5 from "./image/paradise.jpg";
import banquet6 from "./image/banquet6.jpg";
import banquet7 from "./image/banquet7.jpg";
import banquet8 from "./image/banquet8.jpg";
import banquet9 from "./image/banquet9.jpg";
import banquet10 from "./image/banquet10.jpg";

const banquetList = [
  {
    title: "Royal Palace Hall",
    desc: "👑 Step into timeless elegance at the Royal Palace Hall, where luxury meets tradition. With seating for over 800 guests, it is perfect for grand weddings, receptions, and cultural celebrations. ✨ The stunning interiors and royal charm create a majestic atmosphere your guests will never forget🌸.",
    img: banquet1,
    path: "/royal",
  },
  {
    title: "Crystal Crown Hall",
    desc: "💎 The Crystal Crown Hall shines with modern design and dazzling chandeliers that illuminate every moment beautifully. 🌟 Featuring elegant seating arrangements and premium interiors, it is an ideal choice for chic, stylish, and luxurious wedding functions ✨.",
    img: banquet2,
    path: "/elegant",
  },
  {
    title: "Grand Heritage Hall",
    desc: "🏰 A banquet that brings tradition alive, the Grand Heritage Hall is adorned with royal décor and cultural architecture. Perfect for classic weddings, it offers a spacious venue where every corner tells a story of grandeur and celebration 🎶.",
    img: banquet3,
    path: "/heritage",
  },
  {
    title: "Paradise Garden Villa",
    desc: "🌸 Celebrate under the stars at the Paradise Garden Villa. Surrounded by lush greenery and open skies, this banquet offers a refreshing outdoor ambiance. 🌿 It is a dream setting for romantic weddings, receptions, and evening celebrations 🌟.",
    img: banquet5,
    path: "/paradise",
  },
  {
    title: "Elegant Hall",
    desc: "✨ Designed for sophistication, the Elegant Hall combines luxury seating with dazzling chandeliers. 🕊️ Its contemporary interiors create a stylish backdrop for modern weddings and upscale events, leaving a lasting impression on all your guests ✨.",
    img: banquet4,
    path: "/crystal",
  },
  {
    title: "Majestic Hall",
    desc: "👑 The Majestic Hall lives up to its name with expansive space and regal interiors. Crafted for large gatherings, it offers a royal setting for weddings, receptions, and special celebrations 🌟 where grandeur is the theme of the evening💛.",
    img: banquet6,
    path: "/majestic",
  },
  {
    title: "Golden Leaf Banquet",
    desc: "🍃 Adorned with golden interiors and lavish décor, the Golden Leaf Banquet sets the stage for a truly luxurious wedding. 💛 Every detail has been carefully designed to exude richness and charm, making it a perfect fit for opulent functions🌸.",
    img: banquet7,
    path: "/goldenleaf",
  },
  {
    title: "Pearl Palace villa",
    desc: "🤍 Pearl Palace is a vision in white – elegant, sophisticated, and timeless. With its pristine theme and graceful interiors, it is an ideal venue for couples who dream of a classy and serene wedding celebration ✨.",
    img: banquet8,
    path: "/pearl",
  },
  {
    title: "The Regal Banquet",
    desc: "👑 Where modern elegance meets traditional charm, The Regal Venue is designed for versatile celebrations. 💫 Whether you plan a grand cultural wedding or a stylish reception, this venue provides the perfect balance of beauty and comfort💛.",
    img: banquet9,
    path: "/regal",
  },
  {
    title: "Emerald Banquet",
    desc: "💚 The Emerald Banquet sparkles with unique emerald-themed interiors and ambient lighting. 🌌 Perfect for couples seeking something extraordinary, this banquet offers a refreshing and luxurious atmosphere for unforgettable moments🌸.",
    img: banquet10,
    path: "/emerald",
  },
];

const Banquet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  const filteredBanquets = banquetList.filter((hall) =>
    hall.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="banquet-container">
      <h1>Banquet's</h1>
      <p>Select from our premium banquet halls for your wedding functions ❤️.</p>

      <div className="banquet-list">
        {filteredBanquets.length > 0 ? (
          filteredBanquets.map((hall, index) => (
            <div
              key={index}
              className="banquet-card"
              onClick={() => navigate(hall.path)}
            >
              <img src={hall.img} alt={hall.title} className="banquet-img" />
              <div className="banquet-content">
                <h2>{hall.title}</h2>
                <p>{hall.desc}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No such banquet or hall found 😢</p>
        )}
      </div>
    </div>
  );
};

export default Banquet;
