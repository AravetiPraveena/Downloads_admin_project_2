import React, { useContext, useState } from "react";
import Faq from "../Faq";
import logo from "../logo2.jpg";
import { Link } from "react-router-dom";
import "../IITJEE_OLVCStyles.css";
import Footer from "../Footer";
import Examheader from "../Examheader";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { PiChatCenteredTextLight } from "react-icons/pi";
import { BsChatLeftTextFill, BsChatLeftText } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";

import BITSATimg from "../CARDS/images/BITSATCARD.png";
import { FaShoppingBag } from "react-icons/fa";

import academic from "../CARDS/images/academic.png";
import analysis from "../CARDS/images/analysis.png";
import performance from "../CARDS/images/NeetperformanceAnalysis.png";
import subjects from "../CARDS/images/learning.png";
import Indiarank from "../CARDS/images/Indiarank.png";

import subjectsd from "../CARDS/images/learning.png";
import answering from "../CARDS/images/answering.png";
import Additional from "../CARDS/images/Additional.png";

import { MdOutlineVerticalAlignTop } from "react-icons/md";
import myContext from "../../PG/context/MyContext";

export const KcetOTSPage = () => {
  const context = useContext(myContext);
  const { isVisible, setIsVisible, handleScroll, scrollToTop, scrol } = context;

  const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
  const scheduledowload = () => {
    setshowscheduledowloaded(true);
  };
  return (
    <>
      {/* import logo from './logo2.jpg' */}
      <Examheader />

      {/* BITSAT - ONLINE TEST SERIES */}
      <div className="otsh1" style={{ background: "#000", height: "9vh" }}>
        <h1>KCET - ONLINE TEST SERIES</h1>
      </div>
      <div className="jeesection">
        <div className="jeediv">
          <h2>KCET - ONLINE TEST SERIES - 2024</h2>
          {/* <a href="">COURSE BROCHURE</a> */}
        </div>

        <p className="jeesection_paragraph">
          KCET stands for Karnataka Common Entrance Test. It is a computer-based
          examination conducted for students seeking admission into various
          undergraduate programs, including Engineering, Medicine, and
          Agriculture, offered at different campuses in Karnataka. Aspirants aim
          to prepare thoroughly and perform well in this entrance examination to
          fulfill their academic goals and secure admission in renowned
          institutions across Karnataka. To assist students in their preparation
          journey, KCET Online Test Series is designed to evaluate their
          learning and comprehension levels before facing the actual entrance
          exam. Our online test series serves as a platform for students to
          strengthen their understanding of the subjects and test their
          knowledge in an environment closely resembling the final examination.
          eGRADTutor Academy is committed to supporting KCET aspirants by
          providing access to previous year question papers and comprehensive
          online test series. The test series interface mirrors the actual exam
          setup, empowering students to develop effective strategies and
          approach the examination with confidence. Join our academy to enhance
          your preparation, challenge yourself, and achieve success in the KCET,
          securing admission in esteemed institutions in Karnataka.
        </p>
      </div>

      {/* WHY ONLINE TEST SERIES? */}
      <div className="FEATURES_Bgcolor">
        <div className="jeesection">
          <h2>WHY ONLINE TEST SERIES?</h2>
          <ul className="FEATURES_-contant">
            {/* <li>By taking BITSAT online tests series, candidates get familiar with the test-taking environment.</li> */}
            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={academic} alt="" />
              </span>
              <p>
                KCET online test series is crafted by academic experts with
                years of domain knowledge and experience
              </p>
            </li>

            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={performance} alt="" />
              </span>
              <p>
                With the help of online test series, candidates are able to
                enhance their speed and accuracy of answering questions in the
                examination.
              </p>
            </li>
            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={analysis} alt="" />
              </span>
              <p>
                You will be receiving an in-depth analysis post your test that
                will help you understand your strong/weak areas.
              </p>
            </li>
            <li style={{ alignItems: "center" }}>
              <span className="card_-img">
                <img width={90} height={90} src={subjects} alt="" />
              </span>
              <p>
                KCET online test series lets you have a real-time exam
                experience. You can learn to manage your time better, attempt
                questions with accuracy and precision.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* BUY ONLINE TEST SERIES */}
      {/* <div className="jeesection jeetable">
        <h2>BUY ONLINE TEST SERIES</h2>
        <div>
           <table className="jeeinsidetable">
            <tr>
              <th>S.NO</th>
              <th> TEST SERIES TYPE</th>
              <th>PRICE</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th>BUY NOW</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Challenger Test Series (15 Tests)</td>
              <td>
                &#8377;2500 +<small>GST</small>
              </td>
              <td>10-04-2023</td>
              <td>22-06-2023</td>
              <td>
                <center>
                  <a href="https://online-ug.egradtutor.in/">BUY NOW</a>
                </center>
              </td>
            </tr>
          </table> 
        </div>
      </div> */}
      {/* 
      <div className="whyonline_ots">
        <div className="cards_container">
          <h2>BUY ONLINE TEST SERIES</h2>
          <div className="cards_subcontainer_two">
            <div className="cards_two">
              <div className="card_two">
                <div className="cards_logo_two"> */}
      {/* <SiTestcafe /> */}
      {/* <img src={BITSATimg} alt="" />
                </div> */}
      {/* <div className="card_info_two">
                <p>
                  <FaArrowCircleRight />
                  Challenger Test Series (15 Tests)
                </p>
              </div> */}
      {/* <div className="card_dates_two">
                  <span>10-04-2023 to 22-06-2023</span>
                </div> */}

      {/* <p className="ENROLL_NOW_btn_two">
                  <a href="">
                    <p><FaShoppingBag /></p>
                    Buy Now
                  </a>
                </p> */}

      {/* <div className="price_viewschedule_btn">
                  <p className="price_two">₹5000 + GST"</p>
                  <a href="">
                    <p><IoIosStar /></p>
                    view schedule
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* NEET - ONLINE TEST SERIES SCHEDULE */}

      {/* <div className="jeesection ots_schedule">
        <h2 className="bitsatheading">BITSAT - ONLINE TEST SERIES SCHEDULE</h2>
        <a className="otsbroucher" href="#">
          BITSAT - ONLINE TEST SERIES SCHEDULE
        </a>
      </div> */}

      {/* FEATURES OF ONLINE TEST SERIES */}
      {/* <div className='jeesection'>
        <h2>FEATURES OF ONLINE TEST SERIES</h2>
        <ul>
          <li>All India rank will be given for each test.</li>
          <li>10 papers as a part of the challenger test series</li>
          <li>Developed as per the latest syllabus of BITSAT exam.</li>
          <li>Additional 5 Previous year question papers for practice</li>
          <li>Well explained and detailed answers for every question.</li>
          <li>All the tests are active till the BITSAT - 2023 examination.</li>
          <li>Test series prepared by experts who are top faculty across India.</li>
          <li>We have designed BITSAT online test series that will provide you with in-depth coverage of the latest syllabus.</li>
          <li>Our BITSAT online test interface is similar to that of the final exam, and it helps students assess their preparation.</li>
          <li>Same pattern and time limit as the actual BITSAT exam which acquaints students with the intricacies of the exam.</li>
        </ul>
      </div> */}

      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots">
          <h2>FEATURES OF ONLINE TEST SERIES</h2>
          <ul className="FEATURES_-contant">
            {/* <li>It will help in improving paper solving speed.</li> */}
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={Indiarank} alt="" />
              </span>
              <p>All India rank will be given for each test.</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={subjectsd} alt="" />
              </span>
              <p>10 papers as a part of the challenger test series</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={answering} alt="" />
              </span>
              <p>Developed as per the latest syllabus of KCET exam.</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
                <img width={90} height={90} src={Additional} alt="" />
              </span>
              <p>Additional 5 Previous year question papers for practice</p>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="features_ots ">
        <div className="features_heading">
          <h2>FEATURES OF ONLINE TEST SERIES</h2>
          <div className="ots_-cordContainer">
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  {" "}
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p> All India rank will be given for each test.</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>10 papers as a part of the challenger test series</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>Developed as per the latest syllabus of BITSAT exam.</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>Additional 5 Previous year question papers for practice</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>
                  Same pattern and time limit as the actual BITSAT exam which
                  acquaints students with the intricacies of the exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
