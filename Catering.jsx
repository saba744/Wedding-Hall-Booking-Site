
import React from "react";
import "./catering.css";
import vegImage from "./image/veg.jpg";
import nonVegImage from "./image/nonveg.jpg";
import dessertImage from "./image/dessert.jpg";
import fruitImage from "./image/fruit.jpg";
import streetFoodImage from "./image/street.jpg";
import drinksImage from "./image/drinks.jpg";
import south from "./image/south.jpg";
import north from "./image/north.jpg";
import asianImage from "./image/asian.jpg";
import italianImage from "./image/italian.jpg";
import liveCounterImage from "./image/live.jpg";
import healthyImage from "./image/healthy.jpg";
import bbqImage from "./image/bbq.jpg";
import biryaniImage from "./image/biryani.jpg";
import startersImage from "./image/starters.jpg";
import bakeryImage from "./image/bakery.jpg";
import seafoodImage from "./image/seafood.jpg";
import internationalImage from "./image/international.jpg";

const Catering = () => {
  const cateringOptions = [
    { title: "Vegetarian Counter", desc: "Delicious vegetarian dishes.", image: vegImage },
    { title: "Non-Vegetarian Counter", desc: "Chicken, mutton, seafood delights.", image: nonVegImage },
    { title: "Dessert Counter", desc: "Cakes, pastries, gulab jamun & more.", image: dessertImage },
    { title: "Fruit Platters", desc: "Seasonal fruits beautifully arranged.", image: fruitImage },
    { title: "Street Food & Snacks", desc: "Pani puri, chaat, pav bhaji, momos.", image: streetFoodImage },
    { title: "Beverages & Drinks", desc: "Juices, mocktails, tea & coffee.", image: drinksImage },
    { title: "South Indian Special", desc: "Dosa, idli, vada, sambar & chutneys.", image: south},
    { title: "North Indian Feast", desc: "Butter chicken, paneer tikka, naan.", image: north },
    { title: "Chinese & Asian", desc: "Noodles, fried rice, sushi & dim sums.", image: asianImage },
    { title: "Italian & Continental", desc: "Pizza, pasta, lasagna & salads.", image: italianImage },
    { title: "Live Counters", desc: "Live dosa, pasta, tandoor & BBQ.", image: liveCounterImage },
    { title: "Healthy & Diet Food", desc: "Salads, soups, keto & gluten-free.", image: healthyImage },
    { title: "BBQ & Grills", desc: "Grilled chicken, kebabs, paneer tikka.", image: bbqImage },
    { title: "Biryani & Rice Special", desc: "Hyderabadi biryani, pulao & more.", image: biryaniImage },
    { title: "Soup & Starters", desc: "Hot soups, samosas, cutlets & rolls.", image: startersImage },
    { title: "Bakery Corner", desc: "Breads, croissants, cupcakes & cookies.", image: bakeryImage },
    { title: "Seafood Delights", desc: "Prawns, crabs, fish curries & fry.", image: seafoodImage },
    { title: "International Flavors", desc: "Tacos, shawarma, Thai & Turkish.", image: internationalImage },
  ];

  return (
    <div className="catering-container">
      <header className="catering-header">
        <h1>Catering Options</h1>
        <p>Choose from our wide range of catering services that suit your taste and event theme.</p>
      </header>

      <div className="catering-grid">
        {cateringOptions.map((option, index) => (
          <div className="catering-card" key={index}>
            <img src={option.image} alt={option.title} className="catering-image" />
            <div className="catering-text">
              <h2>{option.title}</h2>
              <p>{option.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catering;