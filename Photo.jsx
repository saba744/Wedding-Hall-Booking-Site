
import React from "react";
import "./photography.css"; 
/*import bride1 from "./image/car.jpg";
import bride2 from "./image/bus.jpg";
import bride3 from "./image/thar.jpg";
import bride4 from "./image/van.jpg";
import bride5 from "./image/bike.jpg";
import bride6 from "./image/bmw.jpg";
import bride7 from "./image/maruti.jpg";
import bride8 from "./image/audi.jpg";
import bride9 from "./image/maruti.jpg";
import bride10 from "./image/audi.jpg";
import bride11 from "./image/maruti.jpg";
import bride12 from "./image/audi.jpg";*/
  // ✅ alag CSS file

const Photography = () => {
  const photographyOptions = [
    /*{ title: "Pre-Wedding Shoot", desc: "Capture your love story in beautiful outdoor locations.",image:bride12  },
    { title: "Candid Photography", desc: "Natural and real emotions perfectly captured.", image:bride11},
    { title: "Wedding Cinematography", desc: "Make your wedding look like a fairy tale movie.", image:bride10 },
     { title: "Pre-Wedding Shoot", desc: "Capture your love story in beautiful outdoor locations.", image:bride9},
    { title: "Candid Photography", desc: "Natural and real emotions perfectly captured.",image:bride1  },
    { title: "Wedding Cinematography", desc: "Make your wedding look like a fairy tale movie.",image:bride2 },
     { title: "Pre-Wedding Shoot", desc: "Capture your love story in beautiful outdoor locations.", image:bride3},
    { title: "Candid Photography", desc: "Natural and real emotions perfectly captured.",image:bride4},
    { title: "Wedding Cinematography", desc: "Make your wedding look like a fairy tale movie.", image:bride5},
     { title: "Pre-Wedding Shoot", desc: "Capture your love story in beautiful outdoor locations.",image:bride6},
    { title: "Candid Photography", desc: "Natural and real emotions perfectly captured.", image:bride7 },
    { title: "Wedding Cinematography", desc: "Make your wedding look like a fairy tale movie.", image:bride8},*/
  ];

  return (
    <div className="photography-container">
      <header className="photography-header">
        <h1>Photography Services</h1>
        <p>Preserve your special moments with our expert photographers.</p>
      </header>

      <div className="photography-grid">
        {photographyOptions.map((p, i) => (
          <div className="photography-card" key={i}>
            <div className="photography-icon">{p.icon}</div>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
