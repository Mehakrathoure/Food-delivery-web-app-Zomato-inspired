import React from "react";
import "./deliveryCollections.css";
import pizza from "./pizza.avif";
import PrevArrow from "../../common/carousel/prevArrow";
import NextArrow from "../../common/carousel/nextArrow";
import burger from "./burger.png";
import rolls from "./rolls.webp";
import cake from "./cake.jpg";
import biryani from "./biryani.avif"
import momos from "./momos.jpg"
import samosa from "./samosa.jpg"
import chaat from "./chaat.avif"
import paneer from "./paneer.jpg"
import paratha from "./paratha.jpg"
import pastry from "./pastry.avif"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DeliveryItem from "./deliveryitem";

const deliveryItems = [
  {
    id: 1,
    title: "Pizza",
    cover: pizza,
  },

  {
    id: 2,
    title: "Burger",
    cover: burger,
  },
  {
    id: 3,
    title: "Rolls",
    cover: rolls,
  },
  {
    id: 4,
    title: "Cake",
    cover: cake,
  },
  {
    id: 5,
    title: "Biryani",
    cover: biryani,
  },
  {
    id: 6,
    title: "Chaat",
    cover: chaat,
  },
  {
    id: 7,
    title: "Momos",
    cover: momos,
  },
  {
    id: 8,
    title: "Paneer",
    cover: paneer,
  },
  {
    id: 9,
    title: "Samosa",
    cover: samosa,
  },
  {
    id: 10,
    title: "Paratha",
    cover: paratha,
  },
  {
    id: 11,
    title: "Pastry",
    cover: pastry,
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const DeliveryCollections = () => {
  return (
    <div className="delivery-collections">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => (
            <DeliveryItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
