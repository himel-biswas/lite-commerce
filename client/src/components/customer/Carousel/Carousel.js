import React from 'react'

import {Button, Typography} from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {sliderItems} from '../../../data'
import './carousel.css'

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='carousel-container'>
    <Slider {...settings}>
     
      {sliderItems.map((item) => (
      <div className="carousel-single">
         
        <img src="https://i.ibb.co/cXFnLLV/3.png" alt="Slider" width="90%" height="auto"></img>
         
        <div className='carousel-info'>
        <Typography variant="h4" gutterBottom component="div">
          {item.title}
       </Typography>
       <Typography variant="subtitle1" gutterBottom component="div">
          {item.desc}
        </Typography>
          <Button variant="outlined">SHOW NOW</Button>
        </div>

       </div>
       ))}
    
    </Slider>
    </div>
  //   <div className="container">
  //   <Slider {...settings}>
  //   <div>
  //     <img src="http://placekitten.com/g/400/200" />
  //   </div>
  //   <div>
  //     <img src="http://placekitten.com/g/400/200" />
  //   </div>
  //   <div>
  //     <img src="http://placekitten.com/g/400/200" />
  //   </div>
  //   <div>
  //     <img src="http://placekitten.com/g/400/200" />
  //   </div>
  // </Slider>
  // </div>
  )
}

export default Carousel