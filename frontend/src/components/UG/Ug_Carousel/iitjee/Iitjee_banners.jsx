// src/App.js
import React from 'react';
// import img0 from './IIT-JEE.png'
import { Carousel } from "react-responsive-carousel";

import img1 from '../../../ug_homepage/components/Home_Section/Banners/Jee Mains + Advanced2.png';
import img2 from '../../../ug_homepage/components/Home_Section/Banners/Jee Mains 2024 new.png';
import img3 from '../../../ug_homepage/components/Home_Section/Banners/JEE ADVANCED MATHEMATICS WEB BANNER 1.jpg';
import img4 from '../../../ug_homepage/components/Home_Section/Banners/JEE MAINS AND ADVANCED BANNER.jpg';



const Iitjee_banners = () => {


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
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
        {/* <div>
          <img src={img2} alt="" />
        </div>
  */}
      </Carousel>


    </div>
  );
};

export default Iitjee_banners;