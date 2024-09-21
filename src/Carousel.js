import React, { useState } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";
import Atropos from "atropos/react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    {
      src: "./images/IMG_1.jpg",
      title: "La bella y la noche",
      description: "De aquellos paseos en los que mejor la pasé.",
    },
    {
      src: "./images/IMG_2.jpg",
      title: "El beso privado",
      description: "Esta siempre ha sido una de mis fotos favoritas.",
    },
    {
      src: "./images/1.jpg",
      title: "La calida paz",
      description: "Las fotos son recuerdos, los momentos son experiencias para toda la vida.",
    },
  ];

  return (
    <Atropos className="my-atropos">
      <div className="parent">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${activeIndex === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${image.src})` }}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="item-desc">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Botón de regreso */}
      <div className="back-button-container">
        <Link to="/">
          <button className="back-button">Volver</button>
        </Link>
      </div>
    </Atropos>
  );
};

export default Carousel;
