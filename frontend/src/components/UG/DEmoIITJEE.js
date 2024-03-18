
import React, { useContext, useState } from "react";
import "./IITJEE_OLVCStyles.css";
import logo from "./Images/logo2.jpeg";
import Faq from "./Faq";
import { Link } from "react-router-dom";
import jeeposter from "./posters/jee_poster_2023-9-1.pdf";
import Footer from "./Footer";
import Examheader from "./Examheader";
import { FaShoppingBag } from "react-icons/fa";
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
import JeeOlvc1 from '../../components/ug_homepage/components/Home_Section/Banners/JEE 2024 2 7.png';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import JeeOlvcs from './ONLINE-CLASSES-OFFERED.png';
import JeeOlvcs from './black_woman_online_education__1_-removebg-preview.png';

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const IITJEE_OLVC = () => {

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
  return (
    <>
      {/* import logo from './logo2.jpg' */}
      <Examheader />

      <div className="otsh1" style={{ background: " #01c3ff", height: "9vh" }}>
        <h1>JEE (MAINS+ ADVANCED) 2025 - ONLINE LIVE CLASSES</h1>
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
          <img src={JeeOlvc1} alt="" />
        </div>
      </Carousel>
      {/* end */}

      {/* ONLINE LIVE CLASSES*/}
      <div style={{  zIndex: '-9999', margin: '1rem 0' }}>
        <div className="Online_live_-class-container" >

          <h2>ONLINE LIVE CLASSES</h2>
          <div className="Online_live_class_-contant">

            <div className=" Online_live_classData">
              <div className="olvc_card_data">
                <div className="olvc_card_dataIMG">
                  <div className="olvc_card_dataIMG_bg">
                    <img width={90} height={90} src={subjects} alt="" />
                  </div>
                  <div className="olvc_card_dataTEXT">
                    <p>Students can also use this course for preparation of otherengineering exams.</p>
                  </div>

                </div>
              </div>

              <div className="olvc_card_data">
                <div className="olvc_card_dataIMG">
                  <div className="olvc_card_dataIMG_bg"><img src={management} alt="" /></div>
                  <div className="olvc_card_dataTEXT">
                    <p>These classes are designed perfectly to cater each and every student to learn, practice and perform.</p>
                  </div>
                </div>
              </div>

              <div className="olvc_card_data">
                <div className="olvc_card_dataIMG">
                  <div className="olvc_card_dataIMG_bg"><img src={management} alt="" /></div>
                  <div className="olvc_card_dataTEXT">
                    <p>Top faculty from IIT/IISc at eGRADTutor, through this course will cover the complete syllabus of XI and XII MPC in 4 to 5 months.</p>
                  </div>
                </div>
              </div>
         

       
              <div className="olvc_card_data">
                <div className="olvc_card_dataIMG">
                  <div className="olvc_card_dataIMG_bg"><img src={management} alt="" /></div>
                  <div className="olvc_card_dataTEXT">
                    <p>This course comes with practice tests and challenger questions, which will be discussed in detail by the faculty in guidance sessions.</p>
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
                  <div className="olvc_card_dataIMG_bg"><img src={management} alt="" /></div>
                  <div className="olvc_card_dataTEXT"><p>Students can also use this course for preparation of otherengineering exams.</p></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* end ONLINE LIVE CLASSES*/}


      {/* ONLINE CLASSES OFFERED*/}
      <div style={{background: 'rgb(251 243 246)',}}> 
      <div className="Online_live_-class-container">
        <h2>ONLINE CLASSES OFFERED</h2>

        <div className="Contant_-swiper-container" >
          <div className="contant_swiper-container">
            <div className="swiper-container-">
              <div className="swiper-wrapper-">
                <div className={`swiper-slide- ${currentIndex === 0 ? 'aqctive-' : ''}`}>

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
                </div>

                <div className={`swiper-slide- ${currentIndex === 1 ? 'aqctive-' : ''}`}>
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
                        <p>{/* <IoIosStar /> */}</p>
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
            {/* <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
             <button onClick={handleNext} disabled={currentIndex === totalCards - 1}>Next</button> */}
           
             <div className="indicators handleIndicatorClick"> 
              <button onClick={() => handleIndicatorClick(0)}
              ><FaChevronRight/></button>
              </div>
              <div className="indicators handleIndicatorClick2">
              <button onClick={() => handleIndicatorClick(1)}
              ><FaChevronLeft /></button>
              </div>
              {/* Repeat this block for each additional indicator */}
           
            <div className="indicators ">
              <button
                className={`indicator ${currentIndex === 0 ? 'aqctive' : ''}`}
                onClick={() => handleIndicatorClick(0)}
              ></button>
              <button
                className={`indicator ${currentIndex === 1 ? 'aqctive' : ''}`}
                onClick={() => handleIndicatorClick(1)}
              ></button>
              {/* Repeat this block for each additional indicator */}
            </div>
          </div>


          <div className="JeeOlvcsCArdImg">
            <img src={JeeOlvcs} alt="" />
          </div>
        </div>
      </div>
      </div>
   

      {/*  end ONLINE CLASSES OFFERED*/}

      {/* <div style={{ display: 'flex' }}>
        <div  style={{ display: 'flex',width:'30%' }}>
          <Carousel
            autoPlay
            infiniteLoop
            showArrows={false}
            interval={4600}
            showThumbs={false}
          
            showStatus={false}
          >
            <div style={{ display: 'flex' }}>

              <div >
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

              <div>
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

          </Carousel>
        </div>
        <div>
          <img src={JeeOlvcs} alt="" />
        </div>
      </div> */}


      {/* HIGHLIGHTS OF THE COURSE */}
      <div className="Online_live_-class-container">
        <h2>HIGHLIGHTS OF THE COURSE</h2>
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: '4rem' }}>
          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <h3>LIVE LECTURES</h3>
          </div>

          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <h3>STUDY MATERIAL</h3>
          </div>

          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <h3>ONLINE TEST SERIES</h3>
          </div>

          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <h3>ONE - ONE DOUBT CLARIFICATION
            </h3>
          </div>

        </div>
      </div>
      {/* end HIGHLIGHTS OF THE COURSE */}


      {/* COURSE FACULTY */}
      <div className="Online_live_-class-container">
        <h2>HIGHLIGHTS OF THE COURSE</h2>
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: '4rem' }}>
          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <p>Name</p>
            <p>Qualification</p>
            <p>Subject</p>
          </div>

          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <p>Name</p>
            <p>Qualification</p>
            <p>Subject</p>
          </div>

          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <p>Name</p>
            <p>Qualification</p>
            <p>Subject</p>
          </div>

          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <p>Name</p>
            <p>Qualification</p>
            <p>Subject</p>
          </div>

        </div>
      </div>
      {/* end COURSE FACULTY */}


      {/* ADVANTAGES OF ONLINE LEARNING*/}
      <div className="Online_live_-class-container">
        <h2>ADVANTAGES OF ONLINE LEARNING</h2>
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: '4rem' }}>
          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <p>Study and Practice daily to crack JEE Mains & other exams.</p>

          </div>

          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <p>Learn shortcuts and multiple approaches to problem solving.</p>

          </div>

          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <p>Instant doubt clarification and practice sessions for JEE Mains.</p>

          </div>

          <div>
            <img src={JeeOlvcs} width={90} height={90} alt="" />
            <p>Develop time management and planning skills during preparation.</p>

          </div>

        </div>
      </div>

      {/* end ADVANTAGES OF ONLINE LEARNING*/}




      {/* end for new  */}








      <div className="jeesection">
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
      </div>



      <div className="FEATURES_Bgcolor">
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
              {/* <li className="text-li">
                    Live online video classes encourage participation of
                    students.
                  </li> */}

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
      </div>

      <div className="whyonline_ots">
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

              {/* CARD 2 */}
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
                    <p>{/* <IoIosStar /> */}</p>
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
      </div>





      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots">
          <h1 className="subheading">FEATURES OF ONLINE LIVE VIDEO CLASSES</h1>
          <ul className="FEATURES_-contant">
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={management} alt="" />
                {/* <BsChatText /> */}
              </span>
              <p>Study and Practice daily to crack JEE Mains & other exams.</p>
            </li>


            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={yourpreparation} alt="" />
                {/* <BsChatText /> */}
              </span>
              <p>Learn shortcuts and multiple approaches to problem solving.</p>
            </li>


            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={Indiarank} alt="" />
                {/* <BsChatText /> */}
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
      </div>
      <Faq />
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










































