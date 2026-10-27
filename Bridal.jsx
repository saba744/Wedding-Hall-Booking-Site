
import React from "react";
import "./bridal.css"; 

import make from "./image/make.jpg";
import mehendi from "./image/mehendi.jpg";
import jewellery from "./image/jewellery.jpg";
import room from "./image/room.jpg";
import lehnga from "./image/lehnga.jpg";
import vanety from "./image/vanety.jpg";
import groom from "./image/groom.jpg";
import groom1 from "./image/groom1.jpg";
import haldi from "./image/haldi.jpg";


const Bridal = () => {
  const bridalOptions = [
    { title: "Bridal Makeup", desc: "Professional makeup artists for your big day.", image: make },
    { title: "Mehendi Design", desc: "Beautiful mehendi designs with traditional & modern styles.", image: mehendi },
    { title: "Bridal Jewellery", desc: "Exquisite jewellery sets for a royal bridal look.", image: jewellery },
    { title: "Room Decor", desc: "Beautifully decorated rooms for bride and groom.", image: room },
    { title: "Bridal Lehenga", desc: "Stunning lehengas to make you shine.", image: lehnga },
    { title: "Vanity Setup", desc: "Luxurious vanity setup for the bride.", image: vanety },
    { title: "Groom Styling", desc: "Elegant styling and accessories for the groom.", image: groom },
    { title: "Groom dress", desc: "Stunning dress and accessories for the groom.", image: groom1 },
    { title: "Haldi", desc: "Golden glow of haldi, spreading joy and love. ",image:haldi},
  
  
  ];

  return (
    <div className="bridal-container">
      <header className="bridal-header">
        <h1>Bridal Services</h1>
        <p>Everything you need to look stunning on your wedding day.</p>
      </header>

      <div className="bridal-grid">
        {bridalOptions.map((b, i) => (
          <div className="bridal-card" key={i}>
            <img src={b.image} alt={b.title} className="bridal-image" />
            <div className="bridal-text">
              <h2>{b.title}</h2>
              <p>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bridal;
