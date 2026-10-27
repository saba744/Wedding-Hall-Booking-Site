
import React from "react";
import "./story.css";
import profile from "./image/hall.jpg"; 
import gallery1 from "./image/gallery1.png"; 
import gallery2 from "./image/gallery2.png"; 
import gallery3 from "./image/gallery3.png"; 
import gallery4 from "./image/gallery4.png";
import gallery5 from "./image/gallery5.png"; 
import gallery6 from "./image/gallery6.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Story = () => {
  return (
    <div className="story-page">
      <div className="story-container">
        {/* Biography Section */}
        <h1 className="story-title">OUR STORY</h1>

        <div className="story-image">
          <img src={profile} alt="Profile" />
        </div>

        <h2 className="story-name">SAAFA</h2>

        <p className="story-description">
         ✨ “A wedding is not just an event — it’s the start of a lifetime of memories. Our mission is to make this journey effortless and joyful by helping you find the perfect wedding hall. With transparency, care, and elegance, we ensure your special day is everything you imagined and more.”🌸
        </p>

        {/* Social Icons */}
        <div className="story-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>

        {/* Collaboration Section */}
        <section className="story-collab">
          <div className="collab-left">
            <h2>
              We collaborate <br /> with brands <br /> and agencies<br/>to create <br/>memorable<br/>Experiences♥
            </h2>
          </div>
          <div className="collab-right">
            <h3>
              We dwelling elegance do shutters appetite yourself diverted.
            </h3>
            <p>
              The principal reason we continue to adapt and evolve our business
              model is to ensure that we are meeting our customers’ expectations.
              We work hand-in-hand with brands and agencies to bring their vision
              to life through creativity, innovation, and dedication.
              With a wide range of halls, transparent pricing, and customer-first
              service, we ensure that your big day is celebrated exactly the way you
              dreamed of. Our commitment is to provide a smooth journey from booking
              to celebration.
            </p>
          </div>
        </section>
        <section className="story-inspiration">
          <p>
            We design People Inspired <br />
            Experiences that create <br />
            positive change in people's <br />
            lives.
          </p>
        </section>
        <section className="story-gallery">
          <div className="gallery-grid">
            <img src={gallery1} alt="Gallery 1" />
            <img src={gallery2} alt="Gallery 2" />
            <img src={gallery3} alt="Gallery 3" />
            <img src={gallery4} alt="Gallery 4" />
            <img src={gallery5} alt="Gallery 5" />
            <img src={gallery6} alt="Gallery 6" />
          </div>
        </section>
        <section className="story-inspiration">
          <p>
            “We create unforgettable wedding experiences <br/> that bring families together <br/> and turn your dream day into reality.”🌸✨
          </p>
        </section>
        <section className="story-contact">
        <h2>Contact Info</h2>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: saafa@email.com</p>
        </section>
        </div>
    </div>
  );
};

export default Story;
