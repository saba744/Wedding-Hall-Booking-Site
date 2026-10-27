
import React from "react";
import { useNavigate } from "react-router-dom";
import "./services.css";

// ✅ Import images
import cateringImg from "./image/catering.jpg";
import transportImg from "./image/transport.jpg";
import bridalImg from "./image/bridal.jpg";
import cakeImg from "./image/cake.jpg";
import photoImg from "./image/photo.jpg";
import venueImg from "./image/venue.jpg";
import musicImg from "./image/music.jpg";
import guestImg from "./image/guest.jpg";
import planningImg from "./image/planning.jpg";
import staffImg from "./image/staff.jpg";
import accommodationImg from "./image/accommodation.jpg";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { title: "Catering Services", desc: "Multi-cuisine menus with customizable packages, live counters, and professional chefs. From traditional Indian thalis to international delicacies, our catering ensures your guests enjoy a royal feast with impeccable service.",  img: cateringImg, link: "/catering" },
    { title: "Transportation & Valet", desc: "Luxury cars, buses, and valet parking services to make guest arrivals hassle-free. Our team ensures timely pick-up & drop-off, along with VIP car arrangements for the bride, groom, and special guests.",  img: transportImg, link: "/transport" }, // ✅ link added
    { title: "Bridal & Groom Rooms", desc: "Private, luxurious rooms designed for comfort & privacy. Equipped with makeup stations, relaxation areas, and premium amenities, these rooms provide the perfect space for the bride and groom to prepare stress-free.",  img: bridalImg, link: "/bridal" }, // ✅ link added
    { title: "Photography & Videography", desc: "Capture timeless memories with our professional team. From pre-wedding shoots and candid clicks to cinematic films and drone coverage, we ensure every magical moment of your wedding is beautifully preserved.",  img: photoImg, link: "/photo" }, // ✅ link added
    { title: "Venue Rental", desc: "Elegant halls with customizable seating, stage, and décor options. From grand ballrooms to intimate garden setups, our venues offer flexibility, premium interiors, and modern facilities for a dream celebration.",  img: venueImg },
    { title: "Music & Entertainment", desc: "DJ nights, live bands, and traditional performances to set the mood for every occasion. Whether it’s soulful melodies, energetic dance numbers, or cultural acts, our entertainment services keep guests engaged.",   img: musicImg },
    { 
  title: "Guest Management", 
  desc: "From valet parking to warm welcomes, our trained hospitality team ensures smooth guest experiences. Personalized seating assistance, welcome drinks, and on-site support make every guest feel valued.", 
  img: guestImg 
}, 

{ 
  title: "Event Planning Assistance", 
  desc: "Dedicated planners to coordinate vendors, décor, and timelines seamlessly. We handle every detail with perfection—from invitations to last-minute changes—so you can enjoy a stress-free celebration.", 
  img: planningImg 
}, 

{ 
  title: "Security & Safety", 
  desc: "Professional security staff, ushers, and surveillance systems for complete safety. From crowd management to VIP protection, we ensure a secure and peaceful environment for your big day.", 
  img: staffImg 
}, 

{ 
  title: "Custom Cake & Bakery", 
  desc: "Designer wedding cakes, pastries & desserts crafted to perfection. Our bakers specialize in personalized flavors, grand tiered cakes, and dessert tables that add sweetness to every celebration.", 
  img: cakeImg 
}, 

{ 
  title: "Accommodation & Guest Stay", 
  desc: "Comfortable, luxury rooms for outstation guests with premium amenities. From cozy family suites to lavish honeymoon suites, we provide hassle-free accommodation near the wedding venue.", 
  img: accommodationImg 
},
     

  ];

  return (
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>From grand venues to the smallest details, we provide everything needed to make your wedding unforgettable. 💍</p>
      </header>

      <div className="services-list">
        {services.map((service, index) => (
          <div 
            className={`service-row ${index % 2 === 0 ? "normal" : "reverse"}`} 
            key={index}
          >
            {/* Image Card */}
            <div
              className="service-card"
              onClick={() => service.link && navigate(service.link)}
              style={{ backgroundImage: `url(${service.img})`, cursor: service.link ? "pointer" : "default" }}
            ></div>

            {/* Text */}
            <div className="service-text">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
