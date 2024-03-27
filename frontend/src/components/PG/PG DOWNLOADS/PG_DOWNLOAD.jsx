// import React from 'react'
// import { Nav } from '../../UG/Nav';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../UG/Footer';
import { Nav } from '../../UG/Nav';
import { IoMdHome } from "react-icons/io";



const PG_DOWNLOAD = () => {
    const [cardsToDisplay, setCardsToDisplay] = useState([]);
    const { exam_id, course_id } = useParams(); // Extract exam_id and course_id from URL

    useEffect(() => {
        fetch("http://localhost:5007/ServerForCards/gettingData")
          .then(res => res.json())
          .then(res => {
            // Filter the data where course_id is 101
            const filteredData = res.filter(item => item.course_id === 102);
            setCardsToDisplay(filteredData);
          })
          .catch(err => console.log(err))
      }, []);

    return (
        <div>

<div className='Downloads_body_container'>
<div>
        <div className="ugexam_header">
          {Nav.map((NavData, index) => {
            return (
              <div className="header ug_exam_header" key={index}>
                <div className={NavData.logo_img_container}>
                  <Link to={"/"}>
                    <img src={NavData.logo} alt="" />
                  </Link>
                </div>

                <div className="exam_login_menu  ">
                  <li>
                    <Link to='/PgHome' className={NavData.navlist} id='exam_login_menu_home'>
                      <IoMdHome /> {NavData.link1}
                    </Link>
                  </li>

                </div>
              </div>

            );
          })}
        </div>
      </div>





          
            <div className="Downloadsdiv">
       
                <div className="DownloadsUgdiv">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5rem', margin: '20px', padding: '10px'}}>
                        <h1>PG EXAMS</h1>
                    </div>
                    <div className="DownloadsUgButton">
                        {cardsToDisplay.map((item) => (
                            <div className="DownloadsUgButtondiv" key={item.card_id}>
                                <div className="DownloadsUgButtonimg">
                                    <img src={`http://localhost:5007/ServerForCards/${item.card_image}`} alt="" />
                                </div>
                                <div style={{ textAlign: 'center', margin:'5px' }}>
                                    {/* Use Link to navigate with exam_id and course_id */}
                                    <Link to={`/gatedownload/${item.exam_id}/${item.course_id}`}>{item.card_text}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default PG_DOWNLOAD;




// import React, { useEffect, useState } from 'react';
// // import Examheader from '../../../../UG/Examheader';
// import axios from 'axios';
// // import Footer from '../../Footer/Footer';
// import { Link } from 'react-router-dom';

// const CardsInDownload = () => {
//   const [cardsToDisplay, setCardsToDisplay] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5007/ServerForCards/gettingData")
//       .then(res => res.json())
//       .then(res => {
//         // Filter the data where course_name contains 'UG'
//         const filteredData = res.filter(item => item.course_name.includes('PG'));
//         setCardsToDisplay(filteredData);
//       })
//       .catch(err => console.log(err))
//   }, []);

//   return (
//     <div>
//       {/* <Examheader /> */}
//       <div className="Downloadsdiv">
//         <div className="DownloadsUgdiv">
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5rem', margin: '20px', padding: '10px'}}>
//             <h1>UG EXAMS</h1>
//             {/* <Link to={'/Pg_downloadadminpage_two'}><button>Admin Page</button></Link> */}
//           </div>
//           <div className="DownloadsUgButton">
//             {cardsToDisplay.map((item) => (
//               <div className="DownloadsUgButtondiv" key={item.card_id}>
//                 <div className="DownloadsUgButtonimg">
//                   <img src={`http://localhost:5007/ServerForCards/${item.card_image}`} alt="" />
//                 </div>
//                 <div><a href={`/iitjeemaindownload/${item.card_id}`}>{item.card_text}</a></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </div>
//   )
// }

// export default CardsInDownload;




