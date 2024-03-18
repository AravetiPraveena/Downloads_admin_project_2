import React from 'react'
import { NavData } from "../ug_homepage/components/Header/NavData";
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
function Examheader() {
  return (
    <div>
          <div className="ugexam_header">
        {NavData.map((NavData, index) => {
          return (
            <div className="header ug_exam_header" key={index}>
              <div className={NavData.logo_img_container}>
                <Link to={"/"}>
                
                  <img src={NavData.logo} alt="" />
                </Link>
              </div>
           
             
                <div className="exam_login_menu  ">
                <li>  
                    <Link to='/home' className={NavData.navlist} id='exam_login_menu_home'>
                    <IoMdHome /> {NavData.link1}
                    </Link>
                </li>
                  {/* <a
                    href="https://online-ug.egradtutor.in"
                    target='_blank'
                    className={NavData.login}
                  >
                    {NavData.btn1}
                  </a> */}
             
                </div>
              </div>
           
          );
        })}

        
      </div>
    </div>
  )
}

export default Examheader