import React, { useContext, useState } from "react";
import Header from "./Header";
import Faq from "./Faq";
import "./JeeOts.css";
import logo from "./logo2.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Examheader from "./Examheader";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { PiChatCenteredTextLight } from "react-icons/pi";
import { BsChatLeftTextFill, BsChatLeftText } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";
import { SiTestcafe } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Neetimg from "../UG/CARDS/images/neet.png"
import answering from "../UG/CARDS/images/answering.png"
import onlinetestseries from "../UG/CARDS/images/onlinetestseries.png"
import examination from "../UG/CARDS/images/examination.png"
import subjects from "../UG/CARDS/images/learning.png";
import Indiarank from "../UG/CARDS/images/Indiarank.png";
import performance from "../UG/CARDS/images/NeetperformanceAnalysis.png";
import explained from "../UG/CARDS/images/explained.png";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import myContext from "../PG/context/MyContext";

 



 

export const NeetOtc = () => {

  const context = useContext(myContext);
  const {isVisible,setIsVisible, handleScroll, scrollToTop, scrol} = context

  const [showscheduledowloaded, setshowscheduledowloaded] = useState(false);
  const scheduledowload = () => {
    setshowscheduledowloaded(true);
  };
  return (
    <>
      {/* import logo from './logo2.jpg' */}
      <Examheader />

      <div class="otsh1" style={{ background: " #000", height: "9vh" }}>
        <h1>NEET - ONLINE TEST SERIES</h1>
      </div>

      {/* NEET - ONLINE TEST SERIES */}
      <div className="jeesection">
        <div className="jeediv">
          <h2>NEET - ONLINE TEST SERIES - 2024 </h2>
          {/* <a href="">COURSE BROCHURE</a> */}
        </div>
        <div>
          <p className="jeesection_paragraph">
            The National eligibility and entrance test is conducted every year
            by the national testing agency for admission to MBBS colleges in
            India. Preparing well and attempting the exam successfully is one of
            the greatest desires of MBBS aspirants. NEET Online Test Series
            provides the students with an opportunity to assess their learning
            and understanding of the subject before showcasing their prowess in
            the final examination. Our online test series makes your
            understanding stronger and helps you prepare better. We at
            eGRADTutor academy are offering 15 online tests and 5 previous year
            question papers as part of the NEET UG Challenger test series.
          </p>
        </div>
      </div>

      {/* WHY ONLINE TEST SERIES? */}
      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots ">
          <h2>WHY ONLINE TEST SERIES?</h2>
          <div className="jeelist">
            <ul className="FEATURES_-contant">
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                  <img  width={90} height={90} src={answering} alt="" />
                </span>
                <p>
                  Helps in enhancing the student's speed and accuracy of
                  answering questions in the examination.
                </p>
              </li>
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                <img  width={90} height={90} src={onlinetestseries} alt="" />
                </span>
               <p>
               Our online test series is crafted by academic experts with years
                of domain knowledge and experience.
               </p>
              </li>
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                <img  width={90} height={90} src={examination} alt="" />
                </span>
              <p>
              Practice with our NEET online test series to be aware of the
                hurdles that you might face while attempting the final
                examination.
              </p>
              </li>
              <li style={{ alignItems: "center" }}>
                <span className="card_-img">
                <img width={90} height={90} src={subjects} alt="" />
                </span>
               <p>
               Practice with our NEET online test series to be aware of the
                hurdles that you might face while attempting the final
                examination.
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
              <div className="card_two">
                <div className="cards_logo_two">
                  {/* <SiTestcafe /> */}
                  <img src={Neetimg} alt="" />
                </div>
                {/* <div className="card_info_two">
                <p>
                  <FaArrowCircleRight />
                  Challenger Test Series (15 Tests)
                </p>
              </div> */}
                <div className="card_dates_two">
                  <span>22-03-2023 to 07-05-2023</span>
                </div>

                <p className="ENROLL_NOW_btn_two">
                  <a target="_blank" href="https://online-ug.egradtutor.in/">
                    <p><FaShoppingBag /></p>
                    Buy Now
                  </a>
                </p>

                <div className="price_viewschedule_btn">
                  <p className="price_two">₹5000 + GST"</p>
                  <a href="#">view schedule
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* BUY ONLINE TEST SERIES */}
      {/* <div className="jeesection">
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
                &#8377;2000 +<small>GST</small>
              </td>
              <td>22-03-2023</td>
              <td>07-05-2023</td>
              <td>
                <center>
                  <a href="https://online-ug.egradtutor.in/">BUY NOW</a>
                </center>
              </td>
            </tr>
          </table>
        </div>
      </div> */}

      {/* NEET - ONLINE TEST SERIES SCHEDULE */}

      {/* <div className="jeesection">
        <h2 className="head">NEET - ONLINE TEST SERIES SCHEDULE</h2>
        <a href="#" className="otsbroucher">
          Challenger Test Series
        </a>
      </div> */}

      {/* FEATURES OF ONLINE TEST SERIES */}
      {/* <div className='jeesection'>
            <h2>FEATURES OF ONLINE TEST SERIES</h2>
            <div className='jeelist'>
            <ul>
                <li>15 tests in the challenger test series</li>
                <li>All India rank will be given for each test.</li>
                <li>Developed as per the latest syllabus of NEET exam.</li>
                <li>Well explained and detailed solution for each question.</li>
                <li>Test series prepared by experts who are top faculty across India.</li>
                <li>We have designed NEET online test series that will provide you with in-depth coverage of the latest syllabus</li>
                <li>Same pattern and time limit as the actual NEET exam which acquaints students with the intricacies of the exam.</li>
            </ul>
            </div>
        </div> */}

      <div className="FEATURES_Bgcolor">
        <div className="whyonline_ots">
          <h2>FEATURES OF ONLINE TEST SERIES</h2>
          <ul className="FEATURES_-contant">
            {/* <li>It will help in improving paper solving speed.</li> */}
            <li id="FEATURES-OTS">
              <span className="card2_-img">
              <img width={90} height={90} src={subjects} alt="" />
              
              </span>
              <p>15 tests in the challenger test series</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
              <img width={90} height={90} src={Indiarank} alt="" />

              </span>
              <p>All India rank will be given for each test.</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
              <img width={90} height={90} src={performance} alt="" />
              </span>
              <p>Developed as per the latest syllabus of NEET exam.</p>
            </li>
            <li id="FEATURES-OTS">
              <span className="card2_-img">
              <img width={90} height={90} src={explained} alt="" />

              </span>
              <p>Well explained and detailed solution for each question.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* <Bots /> */}

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
                <p> 15 tests in the challenger test series</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>All India rank will be given for each test.</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>Developed as per the latest syllabus of NEET exam.</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>Well explained and detailed solution for each question.</p>
              </div>
            </div>
            <div className="ots_-cord_-contant">
              <div>
                <div style={{ fontSize: "50px", color: "red" }}>
                  <HiOutlineChatBubbleBottomCenterText />
                </div>
                <p>
                  Test series prepared by experts who are top faculty across
                  India.
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
          <a href="#topMove"><MdOutlineVerticalAlignTop style={{fontSize:'30px'}} /></a>
        </span>
      )}
    </>
  );
};

export const NeetOtc_card_comp = () => {
  return <div></div>;
};
