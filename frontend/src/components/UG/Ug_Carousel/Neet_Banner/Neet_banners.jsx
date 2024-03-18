// src/App.js
import React from 'react';
import { Carousel } from "react-responsive-carousel";
// import img0 from './neet_banner.png'

// import Neet from './Neet';
import img1 from './NEET Banner - 1.jpg'
import img2 from './NEET Banner - 2.jpg'



const Neet_banners = () => {

  return (
    <div>

      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        interval={4600}
        showThumbs={false}
        // showIndicators={false}
        showStatus={false}
      >
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
 
      </Carousel>


    </div>
  );
};

export default Neet_banners;