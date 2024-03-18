import React, { useContext, useState } from "react";
import logo from "../../../../UG/logo2.jpg";
import Faq from "../../../../UG/Faq";
import { Link } from "react-router-dom";
import Footer from "../../../../UG/Footer";
import Examheader from "../../../../UG/Examheader";
import answering from "../../../../UG/CARDS/images/answering.png";
import Additional from "../../../../UG/CARDS/images/Additional.png";
import explained from "../../../../UG/CARDS/images/explained.png";
import OLVCPAGE from "../../../../UG/CARDS/images/OLVCPAGE.png";
import bitsat1 from "../../../../UG/BitsatOLVC_images/bitsat2024_3.png";

// cards
import comments from "../../../../UG/CARDS/images/comments.png";

import Discussion from "../../../../UG/BitsatOLVC_images/Discussion.png";
import yourpreparation from "../../../../UG/CARDS/images/yourpreparation.png";
import NeetperformanceAnalysis from "../../../../UG/CARDS/images/NeetperformanceAnalysis.png";

import bitsatTable2 from "../../../../UG/BitsatOLVC_images/bitsat2024_CRASH_COURSE_TABLE.png";

import { MdOutlineVerticalAlignTop } from "react-icons/md";
import myContext from "../../../../PG/context/MyContext";
import Faq_BitsatOLVC from "../../../../UG/Faq_BitsatOLVC";
import { Carousel } from "react-responsive-carousel";
import { Nav } from "../../../../UG/Nav";
import { IoMdHome } from "react-icons/io";
const IIT_JAM_OLVC = () => {
  const context = useContext(myContext);
  const { isVisible, setIsVisible, handleScroll, scrollToTop, scrol } = context;

  const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
  const scheduledowload = () => {
    setshowscheduledowloaded(true);
  };
  return (
    <>
      <span id="topMove"></span>
      {/* import logo from './logo2.jpg' */}
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

      <div className="otsh1" style={{ background: "#000", height: "9vh" }}>
        <h1>IITJAM CRASH COURSE - 2024</h1>
      </div>

      {/* <div style={{ padding: '10px 0' }}>
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
            <img src={bitsat2024_CRASH_COURSE} alt="" />
          </div>
          <div>
            <img src={BITSAT_CRASH_COURSE_BANNER} alt="" />
          </div>
          {/* <div>
          <img src={img0} alt="" />
        </div> */}

      {/* </Carousel>
      </div> */}

      {/* <div className="whyonline_ots" >
        <img src={bitsat1} alt="" style={{ width: "100%", marginBottom: '10px' }} />
      </div> */}

      <div>
        <div className="jeesection">
          <div className="jeediv">
            <h2 className="olvcheading">
            IITJAM CRASH COURSE - ONLINE LIVE VIDEO CLASSES FOR YEAR 2024
            </h2>
            <p className="jeesection_paragraph">
             
The IITJAM, or Joint Admission Test for Masters, is a prestigious entrance exam conducted by various IITs and IISc for admissions to postgraduate programs in science at renowned institutes across India. Success in IITJAM is often associated with a strong foundation laid during undergraduate studies. However, as the exam approaches, it becomes crucial to reinforce this foundation with expert guidance. At eGRADTutor, we offer a comprehensive IITJAM Crash Course conducted by top faculty. This course is specially designed to help students cover and prepare for the complete syllabus of their respective disciplines within 30-40 days.

Our daily IITJAM Crash Course Online Live Video Classes focus on teaching the most important topics expected in the examination. The course includes practice tests and daily assignment questions, which are discussed in detail during guidance sessions with the faculty. English and General Aptitude classes are conducted to ensure comprehensive preparation for the examination. The IITJAM Crash Course aims to boost students' confidence and guide them toward success in just 30-40 days, tailored to the specific subjects relevant to their chosen discipline in science.
            </p>
          </div>
        </div>
      </div>

      <div>
        {/* <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots ">
          <div className="wayOTS_-container  ">
            <h1 className="subheading">WHY ONLINE LIVE VIDEO CLASSES?</h1>
            <ul className="FEATURES_-contant">
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                  <img width={90} height={90} src={answering} alt="" />
                </span>
                <p>Classroom just for you!! Anywhere, Anytime!</p>
              </li>
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                  <img width={90} height={90} src={Additional} alt="" />
                </span>
                <p>
                  Live online video classes encourage participation of students.
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
                  <img width={90} height={90} src={explained} alt="" />
                </span>
                <p>
                  Live interaction with expert faculty helps students to
                  understand the areas of improvement.
                </p>
              </li>
             
            </ul>
          </div>

          <div className="Schedulebitsat">
            <div className="COURSEInfoCard_-container">
              <h2>Schedule</h2>
              <ul className="COURSEInfoCard">
                <li>
                  <b>COURSE :</b> ONLINE LIVE VIDEO CLASSES
                </li>

                <li>
                  {" "}
                  <b>EXAM :</b> BITSAT 1 - YEAR COURSE – 2024
                </li>
                <li>
                  <b>SYLLABUS</b> COMPLETE SYLLABUS FOR XI & XII
                </li>
                <li>
                  <b>ELIGIBILITY :</b> APPEARED/PASSED XI IN 2023/PASSED
                  XII(LONG TERM)
                </li>
                <li>
                  <b>SUBJECTS :</b> MATHS + PHYSICS + CHEMISTRY + ENGLISH AND
                  LOGICAL REASONING
                </li>
                <li>
                  <b>COURSE DURATION :</b> 7 - 8 MONTHS
                </li>
                <li>
                  <b>MODE OF INSTRUCTIONS :</b> ENGLISH
                </li>
                <li>
                  <b>START DATE :</b> Batch-1: 01-06-2023 Batch-2: 01-07-2023
                </li>
                <li>
                  <b>END DATE :</b> COURSE VALID UNTIL BITSAT EXAM
                </li>
                <li>
                  <b>FEES :</b> 45000/- + GST (TOTAL FEE CAN BE PAID IN 2
                  INSTALLMENTS) ONLY
                </li>
                <li>
                  <b>TIMINGS :</b> BATCH-1: 6:00 AM – 8:00AM BATCH-2: 7:00 PM –
                  9:00PM
                </li>
                <a href="https://online-ug.egradtutor.in/">
                  <button>ENROLL NOW</button>
                </a>
              </ul>
            </div>
         
          </div>

         
        </div>
      </div> */}
      </div>

      {/* table */}

      {/* BUY ONLINE TEST SERIES */}

      {/* <div
        style={{ overflowY: "scroll" }}
        className="container content-container"
      ></div> */}

      <div className="bitsat_olvc">
        {/* BITSAT CRASH COURSE - ONLINE LIVE VIDEO CLASSES FOR YEAR 2024 */}

        {/* WHY ONLINE LIVE VIDEO CLASSES ? */}
      </div>

      {/* FEATURES OF ONLINE LIVE VIDEO CLASSES */}

      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots">
          {/* <h1 className="subheading">FEATURES OF ONLINE LIVE VIDEO CLASSES</h1> */}
          <h1 className="subheading">FEATURES AND HIGHLIGHTS OF THE COURSE</h1>

          <ul className="FEATURES_-contant">
            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img width={150} height={150} src={Discussion} alt="" />
              </div>
              <p>
                Discussion and coverage of entire IITJAM syllabus in 30-35 days.
              </p>
            </li>

            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img width={150} height={150} src={yourpreparation} alt="" />
              </div>
              <p>Practice sheets with 100-150 questions for daily practice.</p>
            </li>

            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img width={150} height={150} src={comments} alt="" />
              </div>
              <p>
                One-on-One doubt clarification sessions and personal mentoring.
              </p>
            </li>

            <li id="FEATURES-OTS">
              <div className="FEATURES_-contantImg_bg">
                <img
                  width={150}
                  height={150}
                  src={NeetperformanceAnalysis}
                  alt=""
                />
              </div>
              <p>Online test series for continuous performance Evaluation</p>
            </li>
          </ul>
        </div>
      </div>
      <br />

      <div>
        <div className="whyonline_ots">
          {/* <h1 className="subheading">GATE TIMINGS</h1> */}

          {/* <img src={bitsatTable2} alt="" style={{ width: "100%" }} /> */}
        </div>
      </div>

      {/* <Faq_BitsatOLVC /> */}
      {/* <Faq /> */}

      <Footer />

      {isVisible && (
        <span className="UpArrow" onClick={scrollToTop}>
          <a href="#topMove">
            <MdOutlineVerticalAlignTop style={{ fontSize: "30px" }} />
          </a>
        </span>
      )}
    </>
  );
};
export default IIT_JAM_OLVC;
