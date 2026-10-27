
import React from "react";
import "./transport.css"; 
import car from "./image/car.jpg";
import bus from "./image/bus.jpg";
import thar from "./image/thar.jpg";
import bolero from "./image/b.jpg";
import van from "./image/van.jpg";
import bmw from "./image/bmw.jpg";
import bike from "./image/bike.jpg";
import audi from "./image/audi1.jpg";
import farari from "./image/farari.jpg";

const Transport = () => {
  const transportOptions = [
    { title: "Luxury Cars", desc: "Arrive in style with our premium luxury cars.", image: car },
    { title: "Buses", desc: "Comfortable buses and vans for guests.", image: bus },
    { title: "Thar", desc: "Make it royal with classic vintage rides.", image: thar},
    { title: "SUV Bolero", desc: "Spacious and reliable SUV for travel.", image: bolero},
    { title: "Mini Vans", desc: "Compact vans for short-distance travel.", image: van },
    { title: "BMW", desc: "Experience ultimate luxury with BMW rides.", image: bmw},
    { title: "Bikes", desc: "Fast and stylish bike rides for events.", image: bike},
    { title: "Audi", desc: "Premium Audi cars for a classy arrival.", image: audi},
     { title: "Farari", desc: "Premium Farari cars for a classy arrival.", image: farari},
  ];

  return (
    <div className="transport-container">
      <header className="transport-header">
        <h1>Transport Services</h1>
        <p>Choose from our wide range of transport services for your big day.</p>
      </header>

      <div className="transport-grid">
        {transportOptions.map((t, i) => (
          <div className="transport-card" key={i}>
            <img src={t.image} alt={t.title} className="transport-image" />
            <div className="transport-text">
              <h2>{t.title}</h2>
              <p>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transport;
