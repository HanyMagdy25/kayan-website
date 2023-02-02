import React, { useState } from "react";
import "./HeroCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import { heroCarData } from "../../utils/data";
import Navbar from "../Navbar/Navbar";
const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="heroCarousel__main">
      <Navbar/>
      <Carousel
        fade
        className="heroCarousel"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {heroCarData.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 heroCarousel__image"
              src={item.image}
              alt={item.title}
            />
            <Carousel.Caption>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
