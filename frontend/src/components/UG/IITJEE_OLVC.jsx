
// import React, { useContext, useState } from "react";
// import "./IITJEE_OLVCStyles.css";
// import logo from "./Images/logo2.jpeg";
// import Faq from "./Faq";
// import { Link } from "react-router-dom";
// import jeeposter from "./posters/jee_poster_2023-9-1.pdf";
// import Footer from "./Footer";
// import Examheader from "./Examheader";
// import { FaShoppingBag } from "react-icons/fa";
// import jeeMPC from "./CARDS/images/CLASSSCHEDULE.png";


// import subjects from "./CARDS/images/learning.png";
// import comments from "./CARDS/images/comments.png";
// import complexinformation from "./CARDS/images/complexinformation.png";
// import Liveinteraction from "./CARDS/images/Liveinteraction.png";

// import management from "./CARDS/images/managementskills.png";
// import yourpreparation from "./CARDS/images/yourpreparation.png";
// import planningmanagement from "./CARDS/images/management.png";
// import Indiarank from "./CARDS/images/Indiarank.png";
// import answering from "./CARDS/images/answering.png";

// import JEEOLVC from "./CARDS/images/JEEOLVC.png";

// import { MdOutlineVerticalAlignTop } from "react-icons/md";
// import myContext from "../PG/context/MyContext";



// const IITJEE_OLVC = () => {

//     const context = useContext(myContext);
//     const {isVisible,setIsVisible, handleScroll, scrollToTop, scrol} = context

//     const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
//     const scheduledowload = () => {
//       setshowscheduledowloaded(true);
//     };

//   return (
//     <>
//       {/* import logo from './logo2.jpg' */}
//       <Examheader />

//       <div className="otsh1" style={{ background: " #01c3ff", height: "9vh" }}>
//         <h1>JEE - ONLINE LIVE VIDEO CLASSES</h1>
//       </div>

//       <div className="jeesection">
//         <div className="jeediv">
//           <h2>
//             JEE (Mains & Advanced) ONLINE LIVE VIDEO CLASSES FOR YEAR 2024
//           </h2>
//           <ul className="jee-olvc-kchanges text points">
//             <li className="text-li">
//               Students can also use this course for preparation of other
//               engineering exams.
//             </li>
//             <li className="text-li">
//               These classes are designed perfectly to cater each and every
//               student to learn, practice and perform.{" "}
//             </li>
//             <li className="text-li">
//               Top faculty from IIT/IISc at eGRADTutor, through this course will
//               cover the complete syllabus of XI and XII MPC in 4 to 5 months.
//             </li>
//             <li className="text-li">
//               This course comes with practice tests and challenger questions,
//               which will be discussed in detail by the faculty in guidance
//               sessions.
//             </li>
//             <li className="text-li">
//               4 to 5 months of continuous classes and practice through Sunday
//               test sessions, will improve students confidence and lead them to
//               success.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* <h1 className="subheading">
//         JEE (Mains & Advanced) ONLINE LIVE VIDEO CLASSES FOR YEAR 2024
//       </h1>
//       <br />
//       <ul className="jee-olvc-kchanges text points">
//         <li className="text-li">
//           Students can also use this course for preparation of other engineering
//           exams.
//         </li>
//         <li className="text-li">
//           These classes are designed perfectly to cater each and every student
//           to learn, practice and perform.{" "}
//         </li>
//         <li className="text-li">
//           Top faculty from IIT/IISc at eGRADTutor, through this course will
//           cover the complete syllabus of XI and XII MPC in 4 to 5 months.
//         </li>
//         <li className="text-li">
//           This course comes with practice tests and challenger questions, which
//           will be discussed in detail by the faculty in guidance sessions.
//         </li>
//         <li className="text-li">
//           4 to 5 months of continuous classes and practice through Sunday test
//           sessions, will improve students confidence and lead them to success.
//         </li>
//       </ul> */}

//       <div className="FEATURES_Bgcolor">
//         <div className="whyonline_ots ">
//           <div className="wayOTS_-container  ">
//             <h1 className="subheading">WHY ONLINE LIVE VIDEO CLASSES?</h1>
//             <ul className=" FEATURES_-contant ">
//               <li style={{ alignItems: "center" }}>
//                 <span className="card_-img">
//                 <img width={90} height={90} src={subjects} alt="" />
//                 </span>
//                 <p>Classroom just for you!! Anywhere, Anytime!</p>
//               </li>
//               {/* <li className="text-li">
//                     Live online video classes encourage participation of
//                     students.
//                   </li> */}

//               <li style={{ alignItems: "center" }}>
//                 <span className="card_-img">
//                   <img width={90} height={90} src={Liveinteraction} alt="" />
//                 </span>
//                 <p>
//                   Live interaction with expert faculty helps students to
//                   understand the areas of improvement.
//                 </p>
//               </li>

//               <li style={{ alignItems: "center" }}>
//                 <span className="card_-img">
//                   <img width={90} height={90} src={comments} alt="" />
//                 </span>
//                 <p>
//                   Live online video classes allow interaction with students
//                   through chats and comments.
//                 </p>
//               </li>
//               <li style={{ alignItems: "center" }}>
//                 <span className="card_-img">
//                   <img width={90} height={90} src={complexinformation} alt="" />
//                 </span>
//                 <p>
//                   Helps students to understand complex information through
//                   immediate answers to questions.
//                 </p>
//               </li> 
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="whyonline_ots">
//         <div className="cards_container">
//           <h2>BUY ONLINE TEST SERIES</h2>
//           <div className="cards_subcontainer_two">
//             <div className="cards_two">
//               <div className="card_two"  id="olvcCard_content">
//                 <div className="cards_logo_two">
//                   <img src={jeeMPC} />
//                 </div>
//                 <b>
//                   <p>MORNING BATCH</p>
//                 </b>
//                 <div className="BATCHE_-container">
//                   <div className="MathOLVS">
//                     <b>MATHEMATICS</b>
//                     <ul>
//                       <li>THESDAY-SATURDAY</li>
//                       <li>5:00AM to 6:00AM</li>
//                     </ul>
//                   </div>

//                   <div className="MathOLVS">
//                     <b>PHYSICS</b>
//                     <ul>
//                       <li>MONDAY-WEDNESDAY</li>
//                       <li>6:00AM to 7:00AM</li>
//                     </ul>
//                   </div>

//                   <div className="MathOLVS">
//                     <b>CHEMISTRY</b>
//                     <ul>
//                       <li>THURSDAY-SATURDAY</li>
//                       <li>6:00AM to 7:00AM</li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div>
//                   <b>COURSE DATE</b>
//                   <ul className="COURSEDATE">
//                     <li>SESSION-1 SEP 4th 2023</li>
//                     <li> SESSION-2 SEP 11th 2023</li>
//                   </ul>
//                 </div>

//                 <div className="price_viewschedule_btn">
//                   <p className="price_two">₹50000 + GST"</p>
//                   <a href="">
//                     <p></p>
//                     Buy Now
//                   </a>
//                 </div>
//                 <small style={{ padding: "10px 0 0 0" }}>
//                   Students can also register for individual subjects with course
//                   fee 25000/- per subject
//                 </small>
//               </div>

//               {/* CARD 2 */}
//               <div className="card_two" id="olvcCard_content" >
//                 <div className="cards_logo_two">
//                   <img src={JEEOLVC} />
//                 </div>
//                 <b>
//                   <p>EVENING BATCH</p>
//                 </b>
//                 <div className="BATCHE_-container">
//                   <div className="MathOLVS">
//                     <b>MATHEMATICS</b>
//                     <ul>
//                       <li>MONDAY-FRIDAY</li>
//                       <li>6:00PM to 7:00PM</li>
//                     </ul>
//                   </div>

//                   <div className="MathOLVS">
//                     <b>PHYSICS</b>
//                     <ul>
//                       <li>MONDAY-WEDNESDAY</li>
//                       <li>8:00PM to 9:00PM</li>
//                     </ul>
//                   </div>

//                   <div className="MathOLVS">
//                     <b>CHEMISTRY</b>
//                     <ul>
//                       <li>THURSDAY-SATURDAY</li>
//                       <li>8:00PM to 9:00PM</li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div >
//                   <b>COURSE DATE</b>
//                   <ul className="COURSEDATE">
//                     <li>SESSION-1 SEP 4th 2023</li>
//                     <li> SESSION-2 SEP 11th 2023</li>
//                   </ul>
//                 </div>

//                 <div className="price_viewschedule_btn">
//                   <p className="price_two">₹50000 + GST"</p>
//                   <a href="">
//                     <p>{/* <IoIosStar /> */}</p>
//                     Buy Now
//                   </a>
//                 </div>
//                 <small style={{ padding: "10px 0 0 0" }}>
//                   Students can also register for individual subjects with course
//                   fee 25000/- per subject
//                 </small>
//               </div>
//             </div>
//           </div>
//         </div>
//         <p>
//           <b>MODE OF INSTRUCTIONS :</b> WE TEACH ALL OUR COURSES ONLINE VIA
//           MICROSOFT TEAMS - WORK OR SCHOOL ACCOUNT
//         </p>
//         <div>
//         <a className="flyer"  style={{color:'#021cff'}} href={jeeposter}>
//           Online Live Video Classes brouchure (IIT-JEE Mains & Advanced)
//         </a>
//       </div>
//       </div>



//       {/* <section className="contents">
//         <div className="container content-container uG_iit_CONTAINER">
//           <div className="jee_updatedTable ">
//             <h1 className="subheading buyolvc">
//               BUY ONLINE LIVE VIDEO CLASSES
//             </h1>

//             <table className="olvctable">
//               <tr>
//                 <th>S.NO</th>
//                 <th>BATCHES</th>
//                 <th>TIMINGS</th>
//                 <th>CLASS SCHEDULE</th>
//                 <th>COURSE DATE</th>
//                 <th>COURSE FEE</th>
//               </tr>

//               <tr>
//                 <td>1</td>
//                 <td>MORNING</td>
//                 <td>5:00AM to 7:00AM</td>
//                 <td>
//                   5:00AM to 6:00AM <br />
//                   <b>MATHEMATICS</b>
//                   <br />
//                   (THESDAY-SATURDAY)
//                   6:00AM to 7:00AM <br />
//                   <b>PHYSICS</b>
//                   <br />
//                   (MONDAY-WEDNESDAY) <br />
//                   <b>CHEMISTRY</b>
//                   <br />
//                   (THURSDAY-SATURDAY)
//                 </td>
//                 <td>
//                   SESSION-1 <br />
//                   SEP 4<sup>th</sup> 2023 <br /> <br />
//                   SESSION-2 <br /> SEP 11<sup>th</sup> 2023
//                 </td>
//                 <td className="MODE-OF-INSTRUCTIONS">
//                   <span>
//                     <b> 50000/-</b>
//                   </span>{" "}
//                   <br /> ( M + P + C ) <br /> * Students can also register for
//                   individual subjects <br /> with course fee 25000/- per
//                   subject.
//                 </td>
//               </tr>

//               <tr>
//                 <td>2</td>
//                 <td>EVENING</td>
//                 <td>
//                   6:00PM to 7:00PM <br /> 8:00PM to 9:00PM
//                 </td>
//                 <td>
//                   6:00PM to 7:00PM <br />
//                   <b>MATHEMATICS</b>
//                   <br />
//                   (MONDAY-FRIDAY)
//                   8:00PM to 9:00PM <br />
//                   <b>PHYSICS</b>
//                   <br />
//                   (MONDAY-WEDNESDAY) <br />
//                   <b>CHEMISTRY</b>
//                   <br />
//                   (THURSDAY-SATURDAY)
//                 </td>
//                 <td>
//                   SESSION-1 <br /> SEP 4<sup>th</sup> 2023 <br /> <br />
//                   SESSION-2 <br />
//                   SEP 11<sup>th</sup> 2023
//                 </td>
//                 <td className="MODE-OF-INSTRUCTIONS">
//                   {" "}
//                   <span>
//                     {" "}
//                     <b> 50000/-</b>{" "}
//                   </span>{" "}
//                   <br />( M + P + C ) <br /> * Students can also register for
//                   individual subjects <br /> with course fee 25000/- per
//                   subject.
//                 </td>
//               </tr>
//               <tr>
//                 <td className="MODE-OF-INSTRUCTIONS">MODE OF INSTRUCTIONS</td>
//                 <td colSpan="5">
//                   WE TEACH ALL OUR COURSES ONLINE VIA MICROSOFT TEAMS - WORK OR
//                   SCHOOL ACCOUNT
//                 </td>
//               </tr>
//             </table>
//           </div>
//         </div>
//         <br />
//       </section> */}

//       {/* <div className="brocher container">
//         <a className="olvcbroucher" href={jeeposter}>
//           Online Live Video Classes brouchure (IIT-JEE Mains & Advanced)
//         </a>
//       </div> */}


//       <section className="contents">
//         <div className=" content-container">
//           <div className="menu_buttons2">
//             <div className="buttons-with-video">
//               <div className="button-conta"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <br />

//       <div className="FEATURES_Bgcolor">
//         <div className="whyonline_ots">
//           <h1 className="subheading">FEATURES OF ONLINE LIVE VIDEO CLASSES</h1>
//           <ul className="FEATURES_-contant">
//           <li id="FEATURES-OTS">
//               <span className="card2_-img">
//                 <img width={90} height={90} src={management} alt="" />
//                 {/* <BsChatText /> */}
//               </span>
//               <p>Study and Practice daily to crack JEE Mains & other exams.</p>
//             </li>
//             {/* <li style={{ alignItems: "center" }}>
//               <span className="card2_-img">
//                 <img width={90} height={90} src={yourpreparation} alt="" />

//               </span>
//               <p>
//                 Entire course XI and XII MPC will be taught in 4 to 5 months.
//               </p>
//             </li> */}

//             <li id="FEATURES-OTS">
//               <span className="card2_-img">
//                 <img width={90} height={90} src={yourpreparation} alt="" />
//                 {/* <BsChatText /> */}
//               </span>
//               <p>Learn shortcuts and multiple approaches to problem solving.</p>
//             </li>

//             {/* <li className="text-li">
//               <p>
//                 For Xll appearing/passed students along with NCERT learning.
//               </p>
//             </li> */}
//             <li id="FEATURES-OTS">
//               <span className="card2_-img">
//                 <img width={90} height={90} src={Indiarank} alt="" />
//                 {/* <BsChatText /> */}
//               </span>
//               <p>
//                 Instant doubt clarification and practice sessions for JEE Mains.
//               </p>
//             </li>

//             <li id="FEATURES-OTS">
//               <span className="card2_-img">
//                 <img width={90} height={90} src={planningmanagement} alt="" />
//                 {/* <BsChatText /> */}
//               </span>
//               <p>
//                 Develop time management and planning skills during preparation.
//               </p>
//             </li>
//             {/* <li className="text-li">
//               <p>
//                 Crack all engineering entrance exams besides your JEE
//                 preparation.
//               </p>
//             </li> */}
//           </ul>
//         </div>
//       </div>
//       <Faq />
//       <Footer />

//       {isVisible && (
//         <span className="UpArrow" onClick={scrollToTop}>
//           <a href="#topMove"><MdOutlineVerticalAlignTop style={{fontSize:'30px'}} /></a>
//         </span>
//       )}
//     </>
//   );
// };

// export default IITJEE_OLVC;





























import React, { useContext, useState } from "react";
import "./IITJEE_OLVCStyles.css";
import logo from "./Images/logo2.jpeg";
import Faq from "./Faq";
import { Link } from "react-router-dom";
import jeeposter from "./posters/jee_poster_2023-9-1.pdf";
import Footer from "./Footer";
import Examheader from "./Examheader";
import { FaRegFileArchive, FaShoppingBag } from "react-icons/fa";
import jeeMPC from "./CARDS/images/CLASSSCHEDULE.png";


import subjects from "./CARDS/images/learning.png";
import comments from "./CARDS/images/comments.png";
import complexinformation from "./CARDS/images/complexinformation.png";
import Liveinteraction from "./CARDS/images/Liveinteraction.png";

import management from "./CARDS/images/managementskills.png";
import yourpreparation from "./CARDS/images/yourpreparation.png";
import planningmanagement from "./CARDS/images/management.png";
import Indiarank from "./CARDS/images/Indiarank.png";
import answering from "./CARDS/images/answering.png";

import JEEOLVC from "./CARDS/images/JEEOLVC.png";

import { MdOutlineVerticalAlignTop } from "react-icons/md";
import myContext from "../PG/context/MyContext";
// import JeeOlvc1 from '../Banners/JEE 2024 2 7.png';
import JeeOlvc1 from '../../components/ug_homepage/components/Home_Section/Banners/Jee Mains + Advanced2.png';
import jEE_ADVANCED_MATHEMATICS from '../../components/ug_homepage/components/Home_Section/Banners/JEE ADVANCED MATHEMATICS WEB BANNER 1.jpg';

import JEE_MAINS_AND_ADVANCED from '../../components/ug_homepage/components/Home_Section/Banners/JEE MAINS AND ADVANCED BANNER.jpg';
import JEE_chemistry from '../../components/ug_homepage/components/Home_Section/Banners/JEE - chemistry.jpg';



import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import JeeOlvcs from './ONLINE-CLASSES-OFFERED.png';
import JeeOlvcs from './black_woman_online_education__1_-removebg-preview.png';
import LIVE_LECTURES from './infographic/LIVE_LECTURES.png'
import STUDY_MATERIAL from './infographic/STUDY_MATERIAL.png'
import ONE_ONE_DOUBT_CLARIFICATION from './infographic/ONE_ONE_DOUBT_CLARIFICATION.png'
import ONE_ONE from './infographic/ONE_ONE.png'
import engineering from './infographic/png 2.png'

// COURSE FACULTY images
import FACULTY2 from './COURSE FACULTY images/Pavan kumar.png'

// import FACULTY2 from './COURSE FACULTY images/image (1).png'
import FACULTY1 from './COURSE FACULTY images/Prusty Laxmi Narayan.png'
import FACULTY3 from './COURSE FACULTY images/FACULTY3.png'


import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Faq_BitsatOLVC from "./Faq_BitsatOLVC";
import { MdDownload } from "react-icons/md";
import { HIGHLIGHTS } from "./HIGHLIGHTS";
const IITJEE_OLVC = ({ videoUrls }) => {

  const context = useContext(myContext);
  const { isVisible, setIsVisible, handleScroll, scrollToTop, scrol } = context

  const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
  const scheduledowload = () => {
    setshowscheduledowloaded(true);
  };



  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 5; // Total number of cards

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, totalCards - 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const togglePopup = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* import logo from './logo2.jpg' */}
      <Examheader />

      <div className="otsh1 otsh_1" id="otsh1" style={{ background: "#000", height: "9vh" }}>
        <h1>JEE (MAINS + ADVANCED) ONLINE LIVE CLASSES</h1>
      </div>

      {/* adding banners */}
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        interval={4600}
        showThumbs={false}
        // showIndicators={false}
        showStatus={false}
      >
        
        <div >
          <img src={JEE_chemistry} alt="" />
        </div>
        <div >
          <img src={JEE_MAINS_AND_ADVANCED} alt="" />
        </div>
        <div >
          <img src={jEE_ADVANCED_MATHEMATICS} alt="" />
        </div>
        {/* <div >
          <img src={JeeOlvc1} alt="" />
        </div> */}
      </Carousel>
      {/* end */}

      {/* ONLINE LIVE CLASSES*/}
      <div style={{ zIndex: '-9999', margin: '1rem 0' }}>
        <div className="Online_live_-class-container" >

          <h2 style={{ color: '#00aff0' }}>ONLINE LIVE CLASSES</h2>
          <div className="Online_live_class_-contant">

            <div className=" Online_live_classData">
              <div className="olvc_card_data">
                <div className="olvc_card_dataIMG">
                  <div className="olvc_card_dataIMG_bg">
                    <img src={subjects} alt="" />
                  </div>
                  <div className="olvc_card_dataTEXT">
                    {/* <p>Classroom just for you!! Anywhere, Anytime!</p> */}
                    <p>Students can also use this course for preparation of otherengineering exams.</p>
                  </div>

                </div>
              </div>

              <div className="olvc_card_data">
                <div className="olvc_card_dataIMG">
                  <div className="olvc_card_dataIMG_bg">
                    <img src={Liveinteraction} alt="" />
                  </div>
                  <div className="olvc_card_dataTEXT">
                    <p> Live interaction with expert faculty helps students to
                      understand the areas of improvement.</p>
                    {/* <p>These classes are designed perfectly to cater each and every student to learn, practice and perform.</p> */}
                  </div>
                </div>
              </div>

              <div className="olvc_card_data">
                <div className="olvc_card_dataIMG">
                  <div className="olvc_card_dataIMG_bg"><img src={comments} alt="" /></div>
                  <div className="olvc_card_dataTEXT">
                    <p>Live online video classes allow interaction with students through chats and comments.</p>
                    {/* <p>Top faculty from IIT/IISc at eGRADTutor, through this course will cover the complete syllabus of XI and XII MPC in 4 to 5 months.</p> */}
                  </div>
                </div>
              </div>



              <div className="olvc_card_data">
                <div className="olvc_card_dataIMG">
                  <div className="olvc_card_dataIMG_bg"><img src={complexinformation} alt="" /></div>
                  <div className="olvc_card_dataTEXT">
                    <p>
                      Helps students to understand complex information through
                      immediate answers to questions.
                    </p>
                    {/* <p>This course comes with practice tests and challenger questions, which will be discussed in detail by the faculty in guidance sessions.</p> */}
                  </div>

                </div>
              </div>

              <div className="olvc_card_data">
                <div className="olvc_card_dataIMG">
                  <div className="olvc_card_dataIMG_bg"><img src={management} alt="" /></div>
                  <div className="olvc_card_dataTEXT">
                    <p>4 to 5 months of continuous classes and practice through Sunday test sessions, will improve students confidence and lead them to success.</p>
                  </div>
                </div>
              </div>

              <div className="olvc_card_data">
                <div className="olvc_card_dataIMG">
                  <div className="olvc_card_dataIMG_bg"><img src={engineering} alt="" /></div>
                  <div className="olvc_card_dataTEXT"><p>Students can also use this course for preparation of other engineering exams.</p></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* end ONLINE LIVE CLASSES*/}


      {/* ONLINE CLASSES OFFERED*/}
      <div style={{ background: 'rgb(251 243 246)', }}>
        <div className="Online_live_-class-container">
          <div className="OCF_COURSE_BROCHURE">
            <h2>ONLINE CLASSES OFFERED</h2>

            <div>
              <a className="flyer" style={{ color: 'rgb(192 60 97)' }} target="_blank" href={jeeposter}>
                DOWNLOAD COURSE BROCHURE <MdDownload />
              </a>
            </div>
          </div>

          <div className="Contant_-swiper-container" >
            <div className="contant_swiper-container">
              <div className="swiper-container-">
                <div className="swiper-wrapper-">
                  {/* <div className={`swiper-slide- ${currentIndex === 0 ? 'aqctive-' : ''}`}> */}
                  <HIGHLIGHTS />

                  {/* card 2 */}
                  {/* <div className={`swiper-slide- ${currentIndex === 1 ? 'aqctive-' : ''}`}>
                  <div className="card_two" id="olvcCard_content" >
                    <div className="cards_logo_two">
                      <img src={JEEOLVC} />
                    </div>
                    <b>
                      <p>EVENING BATCH</p>
                    </b>
                    <div className="BATCHE_-container">
                      <div className="MathOLVS">
                        <b>MATHEMATICS</b>
                        <ul>
                          <li>MONDAY-FRIDAY</li>
                          <li>6:00PM to 7:00PM</li>
                        </ul>
                      </div>

                      <div className="MathOLVS">
                        <b>PHYSICS</b>
                        <ul>
                          <li>MONDAY-WEDNESDAY</li>
                          <li>8:00PM to 9:00PM</li>
                        </ul>
                      </div>

                      <div className="MathOLVS">
                        <b>CHEMISTRY</b>
                        <ul>
                          <li>THURSDAY-SATURDAY</li>
                          <li>8:00PM to 9:00PM</li>
                        </ul>
                      </div>
                    </div>

                    <div >
                      <b>COURSE DATE</b>
                      <ul className="COURSEDATE">
                        <li>SESSION-1 SEP 4th 2023</li>
                        <li> SESSION-2 SEP 11th 2023</li>
                      </ul>
                    </div>

                    <div className="price_viewschedule_btn">
                      <p className="price_two">₹50000 + GST"</p>
                      <a href="">                     
                        Buy Now
                      </a>
                    </div>
                    <small style={{ padding: "10px 0 0 0" }}>
                      Students can also register for individual subjects with course
                      fee 25000/- per subject
                    </small>
                  </div>
                </div> */}

                </div>
              </div>
              {/* <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
             <button onClick={handleNext} disabled={currentIndex === totalCards - 1}>Next</button> */}

              {/* <div className="indicators handleIndicatorClick">
                <button onClick={() => handleIndicatorClick(0)}
                ><FaChevronRight /></button>
              </div>
              <div className="indicators handleIndicatorClick2">
                <button onClick={() => handleIndicatorClick(1)}
                ><FaChevronLeft /></button>
              </div> */}
              {/* <div className="indicators handleIndicatorClick">
                <button 
                ><FaChevronRight /></button>
              </div>
              <div className="indicators handleIndicatorClick2">
                <button 
                ><FaChevronLeft /></button>
              </div> */}
              {/* Repeat this block for each additional indicator */}

              {/* <div className="indicators ">
                <button
                  className={`indicator ${currentIndex === 0 ? 'aqctive' : ''}`}
                  onClick={() => handleIndicatorClick(0)}
                ></button>
                <button
                  className={`indicator ${currentIndex === 1 ? 'aqctive' : ''}`}
                  onClick={() => handleIndicatorClick(1)}
                ></button>
                <button

                ></button>
                <button

                ></button>
              </div> */}
            </div>


            <div className="JeeOlvcsCArdImg">
              <img src={JeeOlvcs} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
      {/*  end ONLINE CLASSES OFFERED*/}
      <div>

      </div>


      <div className="Online_live_-class-container">
        <h2 style={{ color: '#00aff0' }}>HIGHLIGHTS OF THE COURSE</h2>
        <div className="Online_live_-class-container_HIGHLIGHTS_COURSE">

          <div className="lmnho">
            <div className="LIVE_LECTURES">
              <div className="Online_live_-class-container_HIGHLIGHTS_COURSE_content">
                <img src={ONE_ONE_DOUBT_CLARIFICATION} alt="" />

              </div>
            </div>
            <h3 id="HIGHLIGHTScourse">LIVE LECTURES</h3>
          </div>

          <div className="lmnho">
            <div className="STUDY_MATERIAL">
              <div className="Online_live_-class-container_HIGHLIGHTS_COURSE_content">
                <img src={STUDY_MATERIAL} alt="" />
              
              </div>
            </div>
            <h3 id="HIGHLIGHTScourse">STUDY MATERIAL</h3>
          </div>

          <div className="lmnho">
            <div className="ONLINE_TEST_SERIES">
              <div className="Online_live_-class-container_HIGHLIGHTS_COURSE_content">
                <img src={yourpreparation} alt="" />
               
              </div>
            </div>
            <h3 id="HIGHLIGHTScourse">ONLINE TEST SERIES</h3>
          </div>

          <div className="lmnho">
            <div className="DOUBT_CLARIFICATION">
              <div className="Online_live_-class-container_HIGHLIGHTS_COURSE_content">
                <img src={ONE_ONE} alt="" />

              </div>
            </div>
            <h3 id="HIGHLIGHTScourse">ONE - ONE DOUBT CLARIFICATION</h3>
          </div>
        </div>
      </div>
      {/* end HIGHLIGHTS OF THE COURSE */}

      {/* COURSE FACULTY */}
      <div style={{ background: 'rgb(251 243 246)' }}>
        <div className="Online_live_-class-container" >
          <h2>COURSE FACULTY</h2>
          <div className="Online_live_-class-container_COURSE_FACULTY">

            <div className="Online_live_-class-container_COURSE_FACULTY_content">
              <div className="Online_live_-class-container_COURSE_FACULTY_IMGcontainer">
                <img src={FACULTY1} alt="" />
              </div>
              <div className="Online_live_-class-container_COURSE_FACULTY_info_container">
                <p>
                  Name: <span>Prusty Laxmi Narayan</span>
                </p>
                <p>
                  Qualification: <span>(BTech, IIT KGP)</span>
                </p>
                <p>
                  Subject: <span>Physics</span>
                </p>
              </div>
            </div>

            <div className="Online_live_-class-container_COURSE_FACULTY_content">
              <div className="Online_live_-class-container_COURSE_FACULTY_IMGcontainer">
                <img src={FACULTY3} alt="" />
              </div>
              <div className="Online_live_-class-container_COURSE_FACULTY_info_container">
                <p>
                  Name: <span>Kalyan Dutt</span>
                </p>
                <p>
                  Qualification: <span>(BTech, IITD)</span>
                </p>
                <p>
                  Subject: <span>Physics</span>
                </p>
              </div>
            </div>

            <div className="Online_live_-class-container_COURSE_FACULTY_content">
              <div className="Online_live_-class-container_COURSE_FACULTY_IMGcontainer">
                <img src={FACULTY2} alt="" />
              </div>
              <div className="Online_live_-class-container_COURSE_FACULTY_info_container">
                <p>
                  Name: <span>Pavan Kumar Kasibhotla</span>
                </p>
                <p>
                  Qualification: <span>(MTech, IITH)</span>
                </p>
                <p>
                  Subject: <span>Maths, Physics & Chemistry</span>
                </p>
              </div>
            </div>



          </div>
        </div>
      </div>
      {/* end COURSE FACULTY */}

      {/* ADVANTAGES OF ONLINE LEARNING*/}
      {/* <div className="Online_live_-class-container" >
        <h2>ADVANTAGES OF ONLINE LEARNING</h2>
        <div className="Online_live_-class-container_ADVANTAGES_LEARNING">
          <div className="Online_live_-class-container_ADVANTAGES_LEARNING_content">
            <div className="Online_live_-class-container_ADVANTAGES_LEARNING_content_img_continer">
             <div className="ADVANTAGES_LEARNING">
             <img src={management} alt="" />
             </div>
            </div>
 
            <p>Study and Practice daily to crack JEE Mains & other exams.</p>
          </div>
 
          <div className="Online_live_-class-container_ADVANTAGES_LEARNING_content">
            <div className="Online_live_-class-container_ADVANTAGES_LEARNING_content_img_continer">
            <div className="ADVANTAGES_LEARNING">
             <img src={yourpreparation} alt="" />
             </div>
            </div>
 
            <p>Learn shortcuts and multiple approaches to problem solving.</p>
          </div>
 
          <div className="Online_live_-class-container_ADVANTAGES_LEARNING_content">
            <div className="Online_live_-class-container_ADVANTAGES_LEARNING_content_img_continer">
            <div className="ADVANTAGES_LEARNING">
             <img src={Indiarank} alt="" />
             </div>
            </div>
 
            <p>
              Instant doubt clarification and practice sessions for JEE Mains.
            </p>
          </div>
 
          <div className="Online_live_-class-container_ADVANTAGES_LEARNING_content">
            <div className="Online_live_-class-container_ADVANTAGES_LEARNING_content_img_continer">
            <div className="ADVANTAGES_LEARNING">
             <img src={planningmanagement} alt="" />
             </div>
            </div>
 
            <p>
              Develop time management and planning skills during preparation.
            </p>
          </div>
        </div>
      </div> */}
      {/* end for new  */}




      {/* DEMO LECTURES BY OUR FACULTY */}
      {/* <div >
        <div className="Online_live_-class-container" >
        <h2>DEMO LECTURES BY OUR FACULTY</h2>
          <DEMO_LECTURES />
        </div>
      </div> */}



      {/* <div className="jeesection">
        <div className="jeediv">
          <h2>
            JEE (Mains & Advanced) ONLINE LIVE VIDEO CLASSES FOR YEAR 2024
          </h2>
          <ul className="jee-olvc-kchanges text points">
            <li className="text-li">
              Students can also use this course for preparation of other
              engineering exams.
            </li>
            <li className="text-li">
              These classes are designed perfectly to cater each and every
              student to learn, practice and perform.{" "}
            </li>
            <li className="text-li">
              Top faculty from IIT/IISc at eGRADTutor, through this course will
              cover the complete syllabus of XI and XII MPC in 4 to 5 months.
            </li>
            <li className="text-li">
              This course comes with practice tests and challenger questions,
              which will be discussed in detail by the faculty in guidance
              sessions.
            </li>
            <li className="text-li">
              4 to 5 months of continuous classes and practice through Sunday
              test sessions, will improve students confidence and lead them to
              success.
            </li>
          </ul>
        </div>
      </div> */}



      {/* <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots ">
          <div className="wayOTS_-container  ">
            <h1 className="subheading">WHY ONLINE LIVE VIDEO CLASSES?</h1>
            <ul className=" FEATURES_-contant ">
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                  <img width={90} height={90} src={subjects} alt="" />
                </span>
                <p>Classroom just for you!! Anywhere, Anytime!</p>
              </li>
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                  <img width={90} height={90} src={Liveinteraction} alt="" />
                </span>
                <p>
                  Live interaction with expert faculty helps students to
                  understand the areas of improvement.
                </p>
              </li>

              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                  <img width={90} height={90} src={comments} alt="" />
                </span>
                <p>
                  Live online video classes allow interaction with students
                  through chats and comments.
                </p>
              </li>
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                  <img width={90} height={90} src={complexinformation} alt="" />
                </span>
                <p>
                  Helps students to understand complex information through
                  immediate answers to questions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* <div className="whyonline_ots">
        <div className="cards_container">
          <h2>BUY ONLINE TEST SERIES</h2>
          <div className="cards_subcontainer_two">
            <div className="cards_two">
              <div className="card_two" id="olvcCard_content">
                <div className="cards_logo_two">
                  <img src={jeeMPC} />
                </div>
                <b>
                  <p>MORNING BATCH</p>
                </b>
                <div className="BATCHE_-container">
                  <div className="MathOLVS">
                    <b>MATHEMATICS</b>
                    <ul>
                      <li>THESDAY-SATURDAY</li>
                      <li>5:00AM to 6:00AM</li>
                    </ul>
                  </div>

                  <div className="MathOLVS">
                    <b>PHYSICS</b>
                    <ul>
                      <li>MONDAY-WEDNESDAY</li>
                      <li>6:00AM to 7:00AM</li>
                    </ul>
                  </div>

                  <div className="MathOLVS">
                    <b>CHEMISTRY</b>
                    <ul>
                      <li>THURSDAY-SATURDAY</li>
                      <li>6:00AM to 7:00AM</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <b>COURSE DATE</b>
                  <ul className="COURSEDATE">
                    <li>SESSION-1 SEP 4th 2023</li>
                    <li> SESSION-2 SEP 11th 2023</li>
                  </ul>
                </div>

                <div className="price_viewschedule_btn">
                  <p className="price_two">₹50000 + GST"</p>
                  <a href="">
                    <p></p>
                    Buy Now
                  </a>
                </div>
                <small style={{ padding: "10px 0 0 0" }}>
                  Students can also register for individual subjects with course
                  fee 25000/- per subject
                </small>
              </div>

            
              <div className="card_two" id="olvcCard_content" >
                <div className="cards_logo_two">
                  <img src={JEEOLVC} />
                </div>
                <b>
                  <p>EVENING BATCH</p>
                </b>
                <div className="BATCHE_-container">
                  <div className="MathOLVS">
                    <b>MATHEMATICS</b>
                    <ul>
                      <li>MONDAY-FRIDAY</li>
                      <li>6:00PM to 7:00PM</li>
                    </ul>
                  </div>

                  <div className="MathOLVS">
                    <b>PHYSICS</b>
                    <ul>
                      <li>MONDAY-WEDNESDAY</li>
                      <li>8:00PM to 9:00PM</li>
                    </ul>
                  </div>

                  <div className="MathOLVS">
                    <b>CHEMISTRY</b>
                    <ul>
                      <li>THURSDAY-SATURDAY</li>
                      <li>8:00PM to 9:00PM</li>
                    </ul>
                  </div>
                </div>

                <div >
                  <b>COURSE DATE</b>
                  <ul className="COURSEDATE">
                    <li>SESSION-1 SEP 4th 2023</li>
                    <li> SESSION-2 SEP 11th 2023</li>
                  </ul>
                </div>

                <div className="price_viewschedule_btn">
                  <p className="price_two">₹50000 + GST"</p>
                  <a href="">
                   
                    Buy Now
                  </a>
                </div>
                <small style={{ padding: "10px 0 0 0" }}>
                  Students can also register for individual subjects with course
                  fee 25000/- per subject
                </small>
              </div>
            </div>
          </div>
        </div>
        <p>
          <b>MODE OF INSTRUCTIONS :</b> WE TEACH ALL OUR COURSES ONLINE VIA
          MICROSOFT TEAMS - WORK OR SCHOOL ACCOUNT
        </p>
        <div>
          <a className="flyer" style={{ color: '#021cff' }} href={jeeposter}>
            Online Live Video Classes brouchure (IIT-JEE Mains & Advanced)
          </a>
        </div>
      </div> */}


      {/* <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots">
          <h1 className="subheading">FEATURES OF ONLINE LIVE VIDEO CLASSES</h1>
          <ul className="FEATURES_-contant">
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={management} alt="" />
             
              </span>
              <p>Study and Practice daily to crack JEE Mains & other exams.</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={yourpreparation} alt="" />
              </span>
              <p>Learn shortcuts and multiple approaches to problem solving.</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={Indiarank} alt="" />
              </span>
              <p>
                Instant doubt clarification and practice sessions for JEE Mains.
              </p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={planningmanagement} alt="" />
              </span>
              <p>
                Develop time management and planning skills during preparation.
              </p>
            </li>
          </ul>
        </div>
      </div> */}

      {/* <Faq_BitsatOLVC /> */}
      {/* <Faq /> */}
      <Footer />

      {isVisible && (
        <span className="UpArrow" onClick={scrollToTop}>
          <a href="#topMove"><MdOutlineVerticalAlignTop style={{ fontSize: '30px' }} /></a>
        </span>
      )}
    </>
  );
};

export default IITJEE_OLVC;








export const DEMO_LECTURES = () => {
  const videoUrls = [
    "video_url_1.mp4",
    "video_url_2.mp4",
    "video_url_3.mp4",
    // Add more video URLs as needed
  ];
  return (
    <div>
      <VideoPopup videoUrls={videoUrls} />
    </div>
  )
}
export function VideoPopup({ videoUrls }) {
  const [currentVideo, setCurrentVideo] = useState('');

  const toggleVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  return (
    <div >


      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {videoUrls.map((videoUrl, index) => (
          <div key={index}>

            <button style={{ background: '#fff' }} onClick={() => toggleVideo(videoUrl)}> <video controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video><br />LECTURES{index + 1}</button>

            {currentVideo === videoUrl && (
              <div className="popup">
                <div className="popup-inner">
                  <button onClick={() => setCurrentVideo('')}>Close</button>
                  <video controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
          </div>
        ))}
        <style jsx>{`
      .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
      }

      .popup-inner {
        background-color: white;
        padding: 20px;
      }

      .popup-inner video {
        width: 100%;
      }
    `}</style>
      </div>
    </div>
  );
}