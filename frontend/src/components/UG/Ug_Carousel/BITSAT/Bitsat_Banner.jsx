// src/App.js
import React from 'react';
import img0 from './BITSAT_Banner.png'
import img1 from '../../../ug_homepage/components/Home_Section/Banners/BITSAT CRASH COURSE BANNER.jpg';

import Bitsat from './Bitsat';
import { Carousel } from 'react-responsive-carousel';



const Bitsat_Banner = () => {
  const images = [
    [img0],
    [img1]
 
  ];

  return (
    <div>
      {/* <Bitsat images={images} /> */}

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
        {/* <div>
          <img src={img0} alt="" />
        </div> */}
     
        
 
      </Carousel>


    </div>
  );
};

export default Bitsat_Banner;