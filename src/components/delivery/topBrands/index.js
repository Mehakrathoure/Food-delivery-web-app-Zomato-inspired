import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Burger_King_logo from "./Burger_King_logo.png";
import espresso from "./espresso.jpg";
import lapino from "./lapino.png";
import bakingo from "./bakingo.png";
import biryanibykilo from "./biryanibykilo.avif";
import dominos from "./dominos.avif";
import kfc from "./kfc.jpg"
import kwalitywalls from "./kwalitywalls.jpg"
import starbucks from "./starbucks.png"
import waffleco from "./waffleco.png"
import wataburger from "./wataburger.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const topBrandsList = [
  {
    id: 1,
    time: "35 min",
    cover: Burger_King_logo,
  },
  {
    id: 2,
    time: "20 min",
    cover: espresso,
  },
  {
    id: 3,
    time: "40 min",
    cover: lapino,
  },
  {
    id: 4,
    time: "45 min",
    cover: kfc,
  },
  {
    id: 5,
    time: "30 min",
    cover: dominos,
  },
  {
    id: 6,
    time: "50 min",
    cover: biryanibykilo,
  },
  {
    id: 7,
    time: "10 min",
    cover: starbucks,
  },
  {
    id: 8,
    time: "45 min",
    cover: kwalitywalls,
  },
  {
    id: 9,
    time: "60 min",
    cover: wataburger,
  },
  {
    id: 10,
    time: "40 min",
    cover: waffleco,
  },
  {
    id: 11,
    time: "25 min",
    cover: bakingo,
  },
];
const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img
                  src={brand.cover}
                  className="top-brands-image"
                  alt={brand.time}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
