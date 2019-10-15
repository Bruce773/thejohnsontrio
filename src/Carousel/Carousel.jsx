import React from 'react';
import Slider from 'react-slick';

export const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <Slider {...settings}>{items.map((item) => item)}</Slider>;
};
