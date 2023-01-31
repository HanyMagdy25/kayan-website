import React, { useState } from "react";
import "./HeroCarousel.css"
import Carousel from "react-bootstrap/Carousel";
import { heroCarData } from "../../utils/data";
const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="heroCarousel" activeIndex={index} onSelect={handleSelect}>
      {heroCarData.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 heroCarousel__image" src={item.image} alt={item.title} />
          <Carousel.Caption>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
